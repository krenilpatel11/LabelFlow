import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit, AfterViewInit {
  @ViewChild('headline') headline!: ElementRef;
  @ViewChild('headline2') headline2!: ElementRef;
  @ViewChild('graphicproject') graphicproject!: ElementRef;
  selectedTag: string = 'all';

  tags: string[] = ['Dashboard', 'Landing Page', 'Mobile Responsive', 'Web App Design', 'Azure AI'];

  projects = [
    {
      logo: '../../../../assets/Image/LOGOsports-logo.svg',
      description: `Sport: A Dynamic and Responsive Sports Website Sport is a cutting-edge sports website designed to deliver an immersive and engaging user experience. Built with React, SCSS, and a suite of powerful libraries, Sportify ensures seamless performance and stunning visuals across all devices.`,
      image: '../../../../assets/Image/screenshot4.jpeg',
      labels: ['Web App Design', 'Mobile Responsive', 'Landing Page'],
    },
    {
      logo: '../../../../assets/Image/goodkitlogo.svg',
      description: `Sport: A Dynamic and Responsive Sports Website Sport is a cutting-edge sports website designed to deliver an immersive and engaging user experience. Built with React, SCSS, and a suite of powerful libraries, Sportify ensures seamless performance and stunning visuals across all devices.`,
      image: '../../../../assets/Image/screenshot1.jpeg',
      labels: ['Web App Design', 'Mobile Responsive'],
    },
    {
      logo: '../../../../assets/Image/logo.svg',
      description: `Trafalgar: Progressive and Affordable Virtual Healthcare Trafalgar is a revolutionary virtual healthcare platform designed to provide accessible, affordable, and high-quality healthcare services to everyone. Available on both mobile and online platforms, Trafalgar ensures that healthcare is just a click away.`,
      image: '../../../../assets/Image/screenshot3.jpeg',
      labels: ['Web App Design', 'Mobile Responsive'],
    },
    {
      logo: '../../../../assets/Image/k.design.png',
      description: `Portfolio Website using ReactJS: Tech Stack: We've built this website using ReactJS, ensuring a dynamic and responsive user interface. Interactive Design: We've incorporated engaging features that showcase my skills and projects effectively. Learning Journey: The website reflects my dedication to continuous learning in web development.`,
      image: '../../../../assets/Image/screenshot2.jpeg',
      labels: ['Web App Design', 'Mobile Responsive', 'Dashboard'],
    },
    {
      logo: '../../../../assets/Image/neighborlyHub-Logo.png',
      description: `Gated Community Management App – A modern, mobile-first application designed for residents, security staff, administrators, and service staff to simplify community living.`,
      image: '../../../../assets/Image/CommunityHubPortfolio.jpeg',
      labels: ['Web App Design', 'Mobile Responsive', 'Dashboard'],
    },
    {
      logo: '../../../../assets/Image/ViewVoicelogo.png',
      description: `ViewVoice — AI-Powered Invoice Intelligence – ViewVoice is a full-stack, AI-powered document intelligence platform conceptualized and developed by LabelFlow to automate invoice and receipt processing.`,
      image: '../../../../assets/Image/ViewVoiceScreenShot.jpeg',
      labels: ['Web App Design', 'Dashboard', 'Azure AI'],
      link: 'https://view-voice-ui.vercel.app/',
    },
  ];

  graphicProject = {
    logo: '../../../../assets/Image/k.design.png',
    description: `Explore a range of graphic design projects on Behance, featuring unique brand identities, eye-catching packaging, and impactful social media campaigns.`,
    image: 'https://www.designportal.cz/wp-content/uploads/2017/10/behance-portfolio-review-00.jpg',
    labels: ['Logo Design', 'Print Design', 'Social Media Graphics'],
    link: 'https://www.behance.net/krenilpatel2',
  };

  filteredProjects = [...this.projects];

  ngOnInit(): void {}

  filterProjects(tag: string): void {
    this.selectedTag = tag;
    if (tag === 'all') {
      this.filteredProjects = [...this.projects];
    } else {
      this.filteredProjects = this.projects.filter(p => p.labels.includes(tag));
    }
    this.animateProjects();
  }

  ngAfterViewInit(): void {
    this.animateProjects();
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.from(this.headline.nativeElement, {
      scrollTrigger: { trigger: this.headline.nativeElement, start: 'top 85%', toggleActions: 'play none none none' },
      duration: 0.9, x: -40, opacity: 0, ease: 'power2.out', delay: 0.2,
    });

    gsap.from(this.headline2.nativeElement, {
      scrollTrigger: { trigger: this.headline2.nativeElement, start: 'top 85%', toggleActions: 'play none none none' },
      duration: 1, x: 60, opacity: 0, ease: 'power2.out', delay: 0.2,
    });

    gsap.from(this.graphicproject.nativeElement, {
      scrollTrigger: { trigger: this.graphicproject.nativeElement, start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 0, y: 40, duration: 0.9, ease: 'power3.out',
    });
  }

  animateProjects(): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.from('.project-container', {
      opacity: 0, y: 40, duration: 0.7, stagger: 0.15, ease: 'power3.out',
    });
  }
}
