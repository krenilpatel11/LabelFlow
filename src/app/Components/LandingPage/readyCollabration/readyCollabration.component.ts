import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-readyCollabration',
  templateUrl: './readyCollabration.component.html',
  styleUrls: ['./readyCollabration.component.css']
})
export class ReadyCollabrationComponent implements AfterViewInit {
  @ViewChild('ReadyColabtitle') ReadyColabtitle!: ElementRef;

  ngAfterViewInit(): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.from(this.ReadyColabtitle.nativeElement, {
      scrollTrigger: {
        trigger: this.ReadyColabtitle.nativeElement,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      duration: 0.7,
      x: -40,
      opacity: 0,
      ease: 'power2.out',
    });
  }

  openCalendly(): void {
    window.open('https://calendly.com/labelflow-pro/30min', '_blank');
  }
}
