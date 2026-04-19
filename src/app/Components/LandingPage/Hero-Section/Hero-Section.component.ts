import { Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-Hero-Section',
  templateUrl: './Hero-Section.component.html',
  styleUrls: ['./Hero-Section.component.css']
})
export class HeroSectionComponent {
  @ViewChild('agencyText') agencyText!: ElementRef;
  @ViewChild('locationText') locationText!: ElementRef;
  @ViewChild('headline') headline!: ElementRef;
  @ViewChild('subheadline') subheadline!: ElementRef;
  @ViewChild('ctaButton') ctaButton!: ElementRef;

  ngAfterViewInit(): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.from(this.agencyText.nativeElement, { duration: 0.9, x: -60, opacity: 0, ease: 'power2.out' });
    gsap.from(this.locationText.nativeElement, { duration: 0.9, x: 60, opacity: 0, ease: 'power2.out', delay: 0.15 });
    gsap.from(this.headline.nativeElement, { duration: 1, x: -60, opacity: 0, ease: 'power2.out', delay: 0.3 });
    gsap.from(this.subheadline.nativeElement, { duration: 1, x: 60, opacity: 0, ease: 'power2.out', delay: 0.45 });
    gsap.from(this.ctaButton.nativeElement, { duration: 0.7, y: 30, opacity: 0, ease: 'power2.out', delay: 0.6 });
  }

  openCalendly(): void {
    window.open('https://calendly.com/labelflow-pro/30min', '_blank');
  }
}
