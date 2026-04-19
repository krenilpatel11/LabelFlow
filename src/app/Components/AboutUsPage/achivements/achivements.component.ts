import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-achivements',
  templateUrl: './achivements.component.html',
  styleUrls: ['./achivements.component.css']
})
export class AchivementsComponent implements AfterViewInit {
  @ViewChild('testimonial', { static: true }) testimonial: ElementRef | undefined;
  @ViewChild('headline') headline!: ElementRef;

  ngAfterViewInit() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
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

    gsap.from(this.headline.nativeElement, {
      scrollTrigger: {
        trigger: this.headline.nativeElement,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      duration: 1,
      x: -50,
      opacity: 0,
      ease: 'power2.out',
      delay: 0.2,
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
