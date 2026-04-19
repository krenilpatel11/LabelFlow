import { Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// @ts-ignore
import * as $ from 'jquery';
import 'slick-carousel';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-Testimonial',
  templateUrl: './Testimonial.component.html',
  styleUrls: ['./Testimonial.component.css']
})
export class TestimonialComponent {
  @ViewChild('testimonial', { static: true }) testimonial: ElementRef | undefined;
  @ViewChild('testimonial1') testimonial1!: ElementRef;

  ngOnInit() {
    this.initializeSlickSlider();
  }

  ngAfterViewInit() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // Still fire counter animation, just skip GSAP tweens
      this.animateCounters();
      return;
    }
    this.animateOnScroll();
  }

  animateOnScroll() {
    if (!this.testimonial) return;

    gsap.from('.animate', {
      opacity: 0,
      x: 60,
      duration: 0.5,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: this.testimonial.nativeElement,
        start: 'top 80%',
        onEnter: () => this.animateCounters(),
      },
    });

    gsap.from(this.testimonial1.nativeElement, {
      scrollTrigger: {
        trigger: this.testimonial1.nativeElement,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      duration: 1,
      x: -50,
      opacity: 0,
      ease: 'power2.out',
    });
  }

  initializeSlickSlider(): void {
    ($('.slick-slider') as any).slick({
      dots: true,
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      adaptiveHeight: true,
      cssEase: 'ease',
    });
  }

  animateCounters() {
    const counters = document.querySelectorAll('.setcount');
    counters.forEach((counter) => {
      const counterElement = counter as HTMLElement;
      const target = +counterElement.getAttribute('data-target')!;
      const speed = 200;
      let count = 0;
      const increment = target / speed;

      const updateCounter = () => {
        count += increment;
        if (count < target) {
          counterElement.innerText = Math.ceil(count).toString();
          requestAnimationFrame(updateCounter);
        } else {
          counterElement.innerText = target.toString();
        }
      };

      updateCounter();
    });
  }
}
