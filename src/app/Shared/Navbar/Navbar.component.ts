import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import gsap from 'gsap';

@Component({
  selector: 'app-Navbar',
  templateUrl: './Navbar.component.html',
  styleUrls: ['./Navbar.component.css']
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {
  }
  
  constructor(private router: Router){
  }
  
  @ViewChild('fullpageNav') fullpageNav!: ElementRef;
  @ViewChild('navbar') navbar!: ElementRef;
  @ViewChild('navLinks') navLinks!: ElementRef;
  @ViewChild('hamburgerButton') hamburgerButton!: ElementRef;
  isNavOpen = false;

  ngAfterViewInit(): void {
    // Initialize the nav as hidden
    gsap.set(this.navbar.nativeElement, { opacity: 0, visibility: 'hidden' });
    // Animate the navbar to fade in and slide down
    gsap.to(this.navbar.nativeElement, { duration: 2, y: 0, opacity: 1, visibility: 'visible' , ease: 'power2.out'  });
    // Set the full-page navigation to be initially hidden
    gsap.set(this.fullpageNav.nativeElement, { opacity: 0, visibility: 'hidden' });
    // Set initial state for nav links (hidden and slightly above their final position)
    gsap.set(this.navLinks.nativeElement.querySelectorAll('.nav-link'), { opacity: 0, y: -50 });
    // Set the transform origin for hamburger button bars
    gsap.set(this.hamburgerButton.nativeElement.querySelectorAll('.bar'), { transformOrigin: 'center' });
  }
  
  openCalendly(): void {
    window.open('https://calendly.com/labelflow-pro/30min', '_blank');
  }
  navigateToTop(): void {
    // Navigate to the top of the page after route change
    this.router.events.subscribe(() => {
      window.scrollTo(0, 0);
    });
    // You can also close the navigation here if needed
    this.toggleNav();
  }

  toggleNav() {
    const nav = this.fullpageNav.nativeElement;
    const links = this.navLinks.nativeElement.querySelectorAll('.nav-link');
    const bars = this.hamburgerButton.nativeElement.querySelectorAll('.bar');

    if (!this.isNavOpen) {
      // Open Navigation with animation
      gsap.to(nav, { duration: 0.5, opacity: 1, backfaceVisibility: 1,visibility: 'visible', ease: 'power2.inOut' });
      gsap.to(links, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', stagger: 0.3 });

      // Transform hamburger into close icon
      gsap.to(bars[0], { duration: 0.3, rotation: 45, y: 7, ease: 'power2.inOut' });
      gsap.to(bars[1], { duration: 0.3, opacity: 0, ease: 'power2.inOut' });
      gsap.to(bars[2], { duration: 0.3, rotation: -45, y: -5, ease: 'power2.inOut' });
    } else {
      // Close Navigation with animation
      gsap.to(links, { opacity: 0, y: -50, duration: 0.3, ease: 'power2.inOut', stagger: 0.1 });
      gsap.to(nav, { duration: 0.5, opacity: 0, visibility: 'hidden', ease: 'power2.inOut', delay: 0.3 });

      // Transform close icon back to hamburger
      gsap.to(bars[0], { duration: 0.3, rotation: 0, y: 0, ease: 'power2.inOut' });
      gsap.to(bars[1], { duration: 0.3, opacity: 1, ease: 'power2.inOut' });
      gsap.to(bars[2], { duration: 0.3, rotation: 0, y: 0, ease: 'power2.inOut' });
    }

    this.isNavOpen = !this.isNavOpen;
  }
  
  
}
