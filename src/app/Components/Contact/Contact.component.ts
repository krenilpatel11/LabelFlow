import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'] 
})
export class ContactComponent implements AfterViewInit {
  @ViewChild('headline') headline!: ElementRef;
  @ViewChild('heading') heading!: ElementRef;
  @ViewChild('flexContainer') flexContainer!: ElementRef;
  @ViewChild('relativeSection') relativeSection!: ElementRef;

  ngAfterViewInit(): void {
    this.animateElements();
    this.loadTypeform();
    
    gsap.from(this.headline.nativeElement,  {
      scrollTrigger: {
        trigger: this.headline.nativeElement,
        start: "top 80%", // Start animation when top of section reaches 80% of viewport height
        end: "bottom 20%", // End animation when bottom of section reaches 20% of viewport heightb
        
        toggleActions: "play none none none", // Only play the animation once
      },
      duration: 1.5, x: -100, opacity: 0, ease: 'power2.out', delay: 0.4 });
  }

  animateElements() {
    gsap.from(this.heading.nativeElement, {
      y: 100, 
      opacity: 0, 
      duration: 1,
      scrollTrigger: {
        trigger: this.heading.nativeElement,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    gsap.from(this.flexContainer.nativeElement, {
      x: -100, 
      opacity: 0, 
      duration: 1, 
      delay: 0.5,
      scrollTrigger: {
        trigger: this.flexContainer.nativeElement,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    gsap.from(this.relativeSection.nativeElement, {
      y: 100, 
      opacity: 0, 
      duration: 1, 
      delay: 1,
      scrollTrigger: {
        trigger: this.relativeSection.nativeElement,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  }

  loadTypeform() {
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }
}
