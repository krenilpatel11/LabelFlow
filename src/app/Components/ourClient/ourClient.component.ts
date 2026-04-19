import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-ourClient',
  templateUrl: './ourClient.component.html',
  styleUrls: ['./ourClient.component.css']
})
export class OurClientComponent implements AfterViewInit {
  @ViewChild('clientLogosWrapper') clientLogosWrapper!: ElementRef;
  @ViewChild('ClientSection') ClientSection!: ElementRef;
  @ViewChild('headline') headline!: ElementRef;

  ngAfterViewInit() {
    this.animateLogos();

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.from(this.headline.nativeElement, {
      scrollTrigger: {
        trigger: this.headline.nativeElement,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      duration: 1,
      y: -40,
      opacity: 0,
      ease: 'power2.out',
    });

    gsap.from(this.ClientSection.nativeElement, {
      opacity: 0,
      x: 40,
      scrollTrigger: {
        trigger: this.ClientSection.nativeElement,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  }

  animateLogos() {
    const logos = this.clientLogosWrapper.nativeElement;
    const logosWidth = logos.scrollWidth;
    const screenWidth = window.innerWidth;
    const duration = screenWidth < 768 ? 12 : screenWidth < 1024 ? 25 : 35;

    gsap.to(logos, {
      x: -logosWidth,
      duration,
      ease: 'linear',
      repeat: -1,
      onRepeat: () => { gsap.set(logos, { x: 0 }); },
    });
  }
}
