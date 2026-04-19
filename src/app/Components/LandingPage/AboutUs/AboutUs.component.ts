import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-AboutUs',
  templateUrl: './AboutUs.component.html',
  styleUrls: ['./AboutUs.component.css']
})
export class AboutUsComponent  {

  @ViewChild('approachSection') approachSection!: ElementRef;

  ngAfterViewInit() {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!reducedMotion) {
      gsap.from(this.approachSection.nativeElement, {
        opacity: 0,
        x: 40,
        duration: 0.9,
        scrollTrigger: {
          trigger: this.approachSection.nativeElement,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        }
      });
    }

    ScrollTrigger.create({
      trigger: this.approachSection.nativeElement,
      start: "top 60%",
      end: "bottom 30%",
      onEnter: () => {
        gsap.to(this.approachSection.nativeElement, { backgroundColor: "#ffffff", color: "#000000" });
      },
      onLeaveBack: () => {
        gsap.to(this.approachSection.nativeElement, { backgroundColor: "#FF0366", color: "#ffffff" });
      },
      onEnterBack: () => {
        gsap.to(this.approachSection.nativeElement, { backgroundColor: "#ffffff", color: "#000000" });
      },
      onLeave: () => {
        gsap.to(this.approachSection.nativeElement, { backgroundColor: "#FF0366", color: "#ffffff" });
      }
    });
  }
}
