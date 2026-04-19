import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-Feature-Page',
  templateUrl: './Feature-Page.component.html',
  styleUrls: ['./Feature-Page.component.css']
})
export class FeaturePageComponent {
  @ViewChildren('section') sections!: QueryList<ElementRef>;
  @ViewChild('headline') headline!: ElementRef;

  ngAfterViewInit(): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    this.sections.forEach((section, index) => {
      gsap.from(section.nativeElement, {
        scrollTrigger: {
          trigger: section.nativeElement,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        duration: 0.9,
        x: index % 2 === 0 ? -80 : 80,
        opacity: 0,
        ease: 'power2.out',
      });
    });

    gsap.from(this.headline.nativeElement, {
      scrollTrigger: {
        trigger: this.headline.nativeElement,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      duration: 1,
      y: -60,
      opacity: 0,
      ease: 'power2.out',
      delay: 0.2,
    });
  }
}
