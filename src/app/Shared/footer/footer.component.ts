import { gsap } from "gsap";
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements AfterViewInit {
  @ViewChild('footer') footer!: ElementRef;

  ngAfterViewInit(): void {
        gsap.from("footer img", {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "footer",
        start: "top 80%", // Start animation when footer is 80% into view
      }
    });

    // Social Links Animation with ScrollTrigger
    gsap.from("footer nav ul li", {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "footer",
        start: "top 80%", // Start animation when footer is 80% into view
      }
    });

    // Copyright Text Animation with ScrollTrigger
    gsap.from("footer div.text-base", {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "footer",
        start: "top 80%", // Start animation when footer is 80% into view
      }
    });
  }
}
