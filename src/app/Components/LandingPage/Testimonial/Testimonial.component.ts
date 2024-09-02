import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
    this.animateOnScroll();
  }

  animateOnScroll() {
    if (!this.testimonial) return;

    gsap.from('.animate', {
      opacity: 0,
      x: 100,
      duration: 0.5,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: this.testimonial.nativeElement,
        start: 'top 80%', 
        onEnter: () => this.animateCounters(),
      },
    });
    gsap.from(this.testimonial1.nativeElement,  {
      scrollTrigger: {
        trigger: this.testimonial1.nativeElement,
        start: "top 80%", // Start animation when top of section reaches 80% of viewport height
        end: "bottom 20%", // End animation when bottom of section reaches 20% of viewport height
        toggleActions: "play none none none", // Only play the animation once
      },
      duration: 1.5, x: -50, opacity: 0, ease: 'power2.out' });
      
  }

  initializeSlickSlider(): void {
    ($('.slick-slider') as any).slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      adaptiveHeight: true,
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
