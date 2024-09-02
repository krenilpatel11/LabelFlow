import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

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
    gsap.from(this.headline.nativeElement,  {
      scrollTrigger: {
        trigger: this.headline.nativeElement,
        start: "top 70%", // Start animation when top of section reaches 80% of viewport height
        end: "bottom 20%", // End animation when bottom of section reaches 20% of viewport height
        toggleActions: "play none none none", // Only play the animation once
      },
      duration: 1.5, y: -50, opacity: 0, ease: 'power2.out' });
      
      
    gsap.from(this.ClientSection.nativeElement, {
      opacity: 0,
      x: 50,
      scrollTrigger: {
        trigger: this.ClientSection.nativeElement,
        start: "top 80%", // Start animation when top of section reaches 80% of viewport height
          end: "bottom 20%", // End animation when bottom of section reaches 20% of viewport height
          toggleActions: "play none none none",
          onEnter: () => this.animateLogos(),
      }
    });
    
  }

  animateLogos() {
    const logos = this.clientLogosWrapper.nativeElement;
    const logosWidth = logos.scrollWidth;
    
    // Adjust duration based on screen size
    const screenWidth = window.innerWidth;
    let duration;
  
    if (screenWidth < 768) {
      // For small screens, increase speed (reduce duration)
      duration = 10; // Faster animation
    } else if (screenWidth < 1024) {
      // For medium screens
      duration = 30;
    } else {
      // For large screens, keep default duration
      duration = 40;
    }
  
    gsap.to(logos, {
      x: -logosWidth,
      duration: duration, // Dynamic duration
      ease: 'linear',
      repeat: -1,
      onRepeat: () => {
        gsap.set(logos, { x: 0 });
      }
    });
  }
  
}
