import { ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-contact',
  templateUrl: './Contact.component.html',
  styleUrls: ['./Contact.component.css']
})
export class ContactComponent implements AfterViewInit {
  @ViewChild('headline') headline!: ElementRef;
  @ViewChild('heading') heading!: ElementRef;
  @ViewChild('flexContainer') flexContainer!: ElementRef;
  @ViewChild('relativeSection') relativeSection!: ElementRef;

  ngAfterViewInit(): void {
    this.loadTypeform();
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    this.animateElements();
  }

  animateElements() {
    gsap.from(this.heading.nativeElement, {
      y: 60,
      opacity: 0,
      duration: 0.9,
      scrollTrigger: {
        trigger: this.heading.nativeElement,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    gsap.from(this.flexContainer.nativeElement, {
      x: -60,
      opacity: 0,
      duration: 0.9,
      delay: 0.3,
      scrollTrigger: {
        trigger: this.flexContainer.nativeElement,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    gsap.from(this.relativeSection.nativeElement, {
      y: 60,
      opacity: 0,
      duration: 0.9,
      delay: 0.5,
      scrollTrigger: {
        trigger: this.relativeSection.nativeElement,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    gsap.from(this.headline.nativeElement, {
      scrollTrigger: {
        trigger: this.headline.nativeElement,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      duration: 1,
      x: -60,
      opacity: 0,
      ease: 'power2.out',
      delay: 0.2,
    });
  }

  loadTypeform() {
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }
}
