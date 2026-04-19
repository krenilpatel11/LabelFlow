import { gsap } from "gsap";
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements AfterViewInit {
  @ViewChild('footer') footer!: ElementRef;

  ngAfterViewInit(): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const stConfig = { trigger: 'footer', start: 'top 90%' };

    gsap.from('footer img', { opacity: 0, y: 15, duration: 0.7, ease: 'power2.out', scrollTrigger: stConfig });
    gsap.from('footer nav ul li', { opacity: 0, y: 15, stagger: 0.1, duration: 0.7, ease: 'power2.out', scrollTrigger: stConfig });
    gsap.from('footer div.text-base', { opacity: 0, y: 15, duration: 0.7, ease: 'power2.out', scrollTrigger: stConfig });
  }
}
