import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import gsap from 'gsap';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-Navbar',
  templateUrl: './Navbar.component.html',
  styleUrls: ['./Navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  private routerSubscription?: Subscription;

  constructor(private router: Router) {}

  @ViewChild('fullpageNav') fullpageNav!: ElementRef;
  @ViewChild('navbar') navbar!: ElementRef;
  @ViewChild('navLinks') navLinks!: ElementRef;
  @ViewChild('hamburgerButton') hamburgerButton!: ElementRef;
  isNavOpen = false;
  activeRoute = '';

  ngOnInit(): void {
    // Track active route for nav link highlighting
    this.activeRoute = this.router.url;
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.activeRoute = event.urlAfterRedirects;
      });
  }

  ngAfterViewInit(): void {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Skip animations for users who prefer reduced motion
      gsap.set(this.navbar.nativeElement, { opacity: 1, visibility: 'visible' });
    } else {
      gsap.set(this.navbar.nativeElement, { opacity: 0, y: -20, visibility: 'hidden' });
      gsap.to(this.navbar.nativeElement, { duration: 0.8, y: 0, opacity: 1, visibility: 'visible', ease: 'power2.out' });
    }

    gsap.set(this.fullpageNav.nativeElement, { opacity: 0, visibility: 'hidden' });
    gsap.set(this.navLinks.nativeElement.querySelectorAll('.nav-link'), { opacity: 0, y: -30 });
    gsap.set(this.hamburgerButton.nativeElement.querySelectorAll('.bar'), { transformOrigin: 'center' });
  }

  ngOnDestroy(): void {
    this.routerSubscription?.unsubscribe();
  }

  openCalendly(): void {
    window.open('https://calendly.com/labelflow-pro/30min', '_blank');
  }

  navigateToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (this.isNavOpen) {
      this.toggleNav();
    }
  }

  isActive(route: string): boolean {
    if (route === '/') {
      return this.activeRoute === '/' || this.activeRoute === '';
    }
    return this.activeRoute.startsWith(route);
  }

  toggleNav() {
    const nav = this.fullpageNav.nativeElement;
    const links = this.navLinks.nativeElement.querySelectorAll('.nav-link');
    const bars = this.hamburgerButton.nativeElement.querySelectorAll('.bar');

    if (!this.isNavOpen) {
      gsap.to(nav, { duration: 0.4, opacity: 1, visibility: 'visible', ease: 'power2.inOut' });
      gsap.to(links, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.12 });
      gsap.to(bars[0], { duration: 0.3, rotation: 45, y: 7, ease: 'power2.inOut' });
      gsap.to(bars[1], { duration: 0.3, opacity: 0, ease: 'power2.inOut' });
      gsap.to(bars[2], { duration: 0.3, rotation: -45, y: -5, ease: 'power2.inOut' });
    } else {
      gsap.to(links, { opacity: 0, y: -30, duration: 0.25, ease: 'power2.inOut', stagger: 0.06 });
      gsap.to(nav, { duration: 0.4, opacity: 0, visibility: 'hidden', ease: 'power2.inOut', delay: 0.2 });
      gsap.to(bars[0], { duration: 0.3, rotation: 0, y: 0, ease: 'power2.inOut' });
      gsap.to(bars[1], { duration: 0.3, opacity: 1, ease: 'power2.inOut' });
      gsap.to(bars[2], { duration: 0.3, rotation: 0, y: 0, ease: 'power2.inOut' });
    }

    this.isNavOpen = !this.isNavOpen;
  }
}
