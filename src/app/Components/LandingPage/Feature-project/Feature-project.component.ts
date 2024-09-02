import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-Feature-project',
  templateUrl: './Feature-project.component.html',
  styleUrls: ['./Feature-project.component.css']
})
export class FeatureProjectComponent {

  @ViewChildren('project') projects!: QueryList<ElementRef>;
  @ViewChildren('otherProject') otherProjects!: QueryList<ElementRef>;
  @ViewChild('headline') headline!: ElementRef;
  @ViewChild('headline2') headline2!: ElementRef;
  @ViewChild('carouselModal') carouselModal!: ElementRef;
  @ViewChild('mainImage') mainImage!: ElementRef;

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit(): void {
    this.projects.forEach((project, index) => {
      gsap.from(project.nativeElement, {
        scrollTrigger: {
          trigger: project.nativeElement,
          start: "top 80%", // Start animation when top of section reaches 80% of viewport height
          end: "bottom 20%", // End animation when bottom of section reaches 20% of viewport height
          toggleActions: "play none none none", // Only play the animation once
        },
        duration: 1.2,
        x: index % 2 === 0 ? -200 : 200,
        opacity: 0,
        ease: 'power2.out',
      });
    });

    this.otherProjects.forEach((otherProject,index) => {
      gsap.from(otherProject.nativeElement, {
        scrollTrigger: {
          trigger: otherProject.nativeElement,
          start: "top 80%", // Start animation when top of section reaches 80% of viewport height
          end: "bottom 20%", // End animation when bottom of section reaches 20% of viewport height
          toggleActions: "play none none none", // Only play the animation once
        },
        duration: 1.5,
        x: index % 2 === 0 ? -200 : 200,
        opacity: 0,
        ease: 'power2.out',
      });
    });
    
    gsap.from(this.headline.nativeElement,  {
      scrollTrigger: {
        trigger: this.headline.nativeElement,
        start: "top 80%", // Start animation when top of section reaches 80% of viewport height
        end: "bottom 20%", // End animation when bottom of section reaches 20% of viewport height
        toggleActions: "play none none none", // Only play the animation once
      },
      duration: 1.5, y: -100, opacity: 0, ease: 'power2.out', delay: 0.4 });

  gsap.from(this.headline2.nativeElement,  {
    scrollTrigger: {
      trigger: this.headline2.nativeElement,
      start: "top 80%", // Start animation when top of section reaches 80% of viewport height
      end: "bottom 20%", // End animation when bottom of section reaches 20% of viewport height
      toggleActions: "play none none none", // Only play the animation once
    },
    duration: 1.5, y: -100, opacity: 0, ease: 'power2.out', delay: 0.4 });
}
  
  }
