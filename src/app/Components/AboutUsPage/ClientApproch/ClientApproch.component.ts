import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-ClientApproch',
  templateUrl: './ClientApproch.component.html',
  styleUrls: ['./ClientApproch.component.css']
})
export class ClientApprochComponent  {
  @ViewChild('labelflowContent') labelflowContent!: ElementRef;
  @ViewChild('approachSection') approachSection!: ElementRef;
  @ViewChild('headline') headline!: ElementRef;

  ngAfterViewInit() {
    gsap.from(this.labelflowContent.nativeElement, {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: this.labelflowContent.nativeElement,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
    
    gsap.from(this.headline.nativeElement,  {
      scrollTrigger: {
        trigger: this.headline.nativeElement,
        start: "top 80%", // Start animation when top of section reaches 80% of viewport height
        end: "bottom 20%", // End animation when bottom of section reaches 20% of viewport heightb
        
        toggleActions: "play none none none", // Only play the animation once
      },
      duration: 1.5, y: -100, opacity: 0, ease: 'power2.out', delay: 0.4 });
    
    gsap.from(this.approachSection.nativeElement, {
      opacity: 0,
      x: -100,
      scrollTrigger: {
        trigger: this.approachSection.nativeElement,
        start: "top 70%", // Start animation when top of section reaches 80% of viewport height
          end: "bottom 20%", // End animation when bottom of section reaches 20% of viewport height
          toggleActions: "play none none none",
      }
    });
    
    ScrollTrigger.create({
      onEnter: () => {
        gsap.to(this.approachSection.nativeElement, { 
        delay:0.5,backgroundColor: "#ffffff", color: "#000000" });
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
