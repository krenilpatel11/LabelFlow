import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-achivements',
  templateUrl: './achivements.component.html',
  styleUrls: ['./achivements.component.css']
})
export class AchivementsComponent implements AfterViewInit {

  @ViewChild('testimonial', { static: true }) testimonial: ElementRef | undefined;
  @ViewChild('headline') headline!: ElementRef;

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
    gsap.from(this.headline.nativeElement,  {
      scrollTrigger: {
        trigger: this.headline.nativeElement,
        start: "top 80%", // Start animation when top of section reaches 80% of viewport height
        end: "bottom 20%", // End animation when bottom of section reaches 20% of viewport height
        toggleActions: "play none none none", // Only play the animation once
      },
      duration: 1.5, x: -50, opacity: 0, ease: 'power2.out', delay: 0.4 });
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
