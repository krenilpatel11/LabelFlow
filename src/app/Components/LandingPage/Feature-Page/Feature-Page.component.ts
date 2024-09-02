import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-Feature-Page',
  templateUrl: './Feature-Page.component.html',
  styleUrls: ['./Feature-Page.component.css']
})
export class FeaturePageComponent{
  @ViewChildren('section') sections!: QueryList<ElementRef>;
  @ViewChild('headline') headline!: ElementRef;

  ngAfterViewInit(): void {
  
    this.sections.forEach((section, index) => {
      gsap.from(section.nativeElement, {
        scrollTrigger: {
          trigger: section.nativeElement,
          start: "top 80%", // Start animation when top of section reaches 80% of viewport height
          end: "bottom 20%", // End animation when bottom of section reaches 20% of viewport height
          toggleActions: "play none none none", // Only play the animation once
        },
        duration: 1.2,
        x: index % 2 === 0 ? -200 : 200,
        opacity: 0,
        ease: 'power2.out',
      });
    });
    
    gsap.from(this.headline.nativeElement,  {
      scrollTrigger: {
        trigger: this.headline.nativeElement,
        start: "top 80%", // Start animation when top of section reaches 80% of viewport height
        end: "bottom 20%", // End animation when bottom of section reaches 20% of viewport height
        toggleActions: "play none none none", // Only play the animation once
      },
      duration: 1.5, y: -100, opacity: 0, ease: 'power2.out', delay: 0.4 });
  }
}
