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
    gsap.from(this.approachSection.nativeElement, {
      opacity: 0,
      x: 50,
      scrollTrigger: {
        trigger: this.approachSection.nativeElement,
        start: "top 80%", // Start animation when top of section reaches 80% of viewport height
          end: "bottom 20%", // End animation when bottom of section reaches 20% of viewport height
          toggleActions: "play none none none",
      }
    });
    
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
