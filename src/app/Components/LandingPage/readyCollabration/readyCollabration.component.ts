import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-readyCollabration',
  templateUrl: './readyCollabration.component.html',
  styleUrls: ['./readyCollabration.component.css']
})
export class ReadyCollabrationComponent implements AfterViewInit  {
  @ViewChild('ReadyColabtitle') ReadyColabtitle!: ElementRef;


  ngAfterViewInit(): void {
    // Animate the heading from left to right
    gsap.from(this.ReadyColabtitle.nativeElement,  {
      scrollTrigger: {
        trigger: this.ReadyColabtitle.nativeElement,
        start: "top 80%", // Start animation when top of section reaches 80% of viewport height
        end: "bottom 20%", // End animation when bottom of section reaches 20% of viewport height
        toggleActions: "play none none none", // Only play the animation once
      },
      duration: 0.2, x: -50, opacity: 0, ease: 'power2.out' });
      
  }
  
  openCalendly(): void {
    window.open('https://calendly.com/labelflow-pro/30min', '_blank');
  }
}
