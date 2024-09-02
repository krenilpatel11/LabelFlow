import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-Hero-Section',
  templateUrl: './Hero-Section.component.html',
  styleUrls: ['./Hero-Section.component.css']
})
export class HeroSectionComponent{
  @ViewChild('agencyText') agencyText!: ElementRef;
  @ViewChild('locationText') locationText!: ElementRef;
  @ViewChild('headline') headline!: ElementRef;
  @ViewChild('subheadline') subheadline!: ElementRef;
  @ViewChild('ctaButton') ctaButton!: ElementRef;

  ngAfterViewInit(): void {
    // GSAP Animations
    gsap.from(this.agencyText.nativeElement, { duration: 1.5, x: -100, opacity: 0, ease: 'power2.out' });
    gsap.from(this.locationText.nativeElement, { duration: 1.5, x: 100, opacity: 0, ease: 'power2.out', delay: 0.2 });
    gsap.from(this.headline.nativeElement, { duration: 1.5, x: -100, opacity: 0, ease: 'power2.out', delay: 0.4 });
    gsap.from(this.subheadline.nativeElement, { duration: 1.5, x: 100, opacity: 0, ease: 'power2.out', delay: 0.6 });
    gsap.from(this.ctaButton.nativeElement, { duration: 1, y: 50, opacity: 1, ease: 'power2.out', delay: 0.8 });
  }
  openCalendly(): void {
    window.open('https://calendly.com/labelflow-pro/30min', '_blank');
  }
}
