import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-FAQ',
  templateUrl: './FAQ.component.html',
  styleUrls: ['./FAQ.component.css']
})
export class FAQComponent implements AfterViewInit {
  faqItems: any[] = [
    {
      question: 'What services do you offer?',
      answer: 'We offer web development, graphic design, and marketing solutions. These services are designed to elevate your business by leveraging the latest technology and creative strategies. Whether you need a new website, a refreshed brand identity, or a comprehensive marketing plan, we have you covered.',
      isOpen: false,
    },
    {
      question: 'How long does a typical project take?',
      answer: 'The duration of a project varies depending on the complexity, typically between 4-12 weeks. This timeline includes initial consultations, design phases, revisions, and final deployment. We prioritize quality and thoroughness in every step to ensure the best outcome.',
      isOpen: false,
    },
    {
      question: 'What is your process for web development?',
      answer: 'Our process involves discovery, design, development, and deployment phases. We start by understanding your needs, followed by creating design prototypes. Once approved, we develop the website and ensure it is fully functional and optimized before launch.',
      isOpen: false,
    },
    {
      question: 'How do you approach branding and design?',
      answer: 'We start by understanding your brand’s core values, followed by brainstorming and executing design concepts. Our goal is to create a visual identity that resonates with your target audience while staying true to your brand’s essence.',
      isOpen: false,
    },
    {
      question: 'How do you price your services?',
      answer: 'Our pricing is based on project scope, complexity, and timeline. We provide a detailed proposal outlining all costs upfront, ensuring transparency and no hidden fees.',
      isOpen: false,
    },
    {
      question: 'Are there any additional costs?',
      answer: 'Any additional costs will be discussed upfront during the proposal stage. This includes any extra features or services that may be added as the project evolves.',
      isOpen: false,
    },
    {
      question: 'How does your bottle label marketing work?',
      answer: 'We distribute branded products at events, which helps in brand promotion and engagement. Our bottle label marketing strategy targets high-traffic events to maximize visibility and create lasting impressions.',
      isOpen: false,
    },
    {
      question: 'What types of events do you target for marketing?',
      answer: 'We target events such as product launches, corporate events, and trade shows. These events provide the perfect platform for showcasing your brand to a wide audience.',
      isOpen: false,
    },
  ];

  @ViewChild('headline') headline!: ElementRef;
  @ViewChildren('contentRef') contentRefs!: QueryList<ElementRef>;

  toggleAccordion(index: number): void {
    const content = this.contentRefs.toArray()[index].nativeElement;
    const icon = document.querySelectorAll('.icon')[index];

    this.faqItems[index].isOpen = !this.faqItems[index].isOpen;

    if (this.faqItems[index].isOpen) {
      gsap.to(content, { height: content.scrollHeight + 'px', duration: 0.2, ease: 'power2.inOut' });
      gsap.to(icon, { backgroundColor: '#FF0366', color: '#fff', duration: 0.2 });
    } else {
      gsap.to(content, { height: 0, duration: 0.2, ease: 'power2.inOut' });
      gsap.to(icon, { backgroundColor: '#f3f3f3', color: '#000', duration: 0.2 });
    }
  }

  ngAfterViewInit(): void {
  
    gsap.from(this.headline.nativeElement,  {
      scrollTrigger: {
        trigger: this.headline.nativeElement,
        start: "top 80%", // Start animation when top of section reaches 80% of viewport height
        end: "bottom 20%", // End animation when bottom of section reaches 20% of viewport height
        toggleActions: "play none none none", // Only play the animation once
      },
      duration: 1.5, y: -100, opacity: 0, ease: 'power2.out', delay: 0.4 });
  
    this.contentRefs.forEach((contentRef, index) => {
      const content = contentRef.nativeElement;
      content.style.height = '0';  // Initially collapse all items
    });

    const faqTitles = document.querySelectorAll('.accordion-title');

    faqTitles.forEach((title, index) => {
      gsap.from(title, {
        scrollTrigger: {
          trigger: title,
          start: 'top 80%',
          end:'bottom 20%',
          toggleActions: 'play none none none',
        },
        x: index % 2 === 0 ? -100 : 100,
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
      });
    });
  }
}
