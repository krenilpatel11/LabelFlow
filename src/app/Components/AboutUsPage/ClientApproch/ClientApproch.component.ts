import { Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-ClientApproch',
  templateUrl: './ClientApproch.component.html',
  styleUrls: ['./ClientApproch.component.css']
})
export class ClientApprochComponent {
  @ViewChild('labelflowContent') labelflowContent!: ElementRef;
  @ViewChild('approachSection') approachSection!: ElementRef;
  @ViewChild('headline') headline!: ElementRef;

  ngAfterViewInit() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.from(this.labelflowContent.nativeElement, {
      x: 40,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: this.labelflowContent.nativeElement,
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
      y: -60,
      opacity: 0,
      ease: 'power2.out',
      delay: 0.2,
    });

    gsap.from(this.approachSection.nativeElement, {
      opacity: 0,
      x: -60,
      scrollTrigger: {
        trigger: this.approachSection.nativeElement,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    });

    ScrollTrigger.create({
      trigger: this.approachSection.nativeElement,
      start: 'top 60%',
      end: 'bottom 30%',
      onEnter: () => gsap.to(this.approachSection.nativeElement, { delay: 0.5, backgroundColor: '#ffffff', color: '#000000' }),
      onLeaveBack: () => gsap.to(this.approachSection.nativeElement, { backgroundColor: '#FF0366', color: '#ffffff' }),
      onEnterBack: () => gsap.to(this.approachSection.nativeElement, { backgroundColor: '#ffffff', color: '#000000' }),
      onLeave: () => gsap.to(this.approachSection.nativeElement, { backgroundColor: '#FF0366', color: '#ffffff' }),
    });
  }
}
