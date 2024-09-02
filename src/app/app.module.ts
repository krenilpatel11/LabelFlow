import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Components/HomePage/HomePage.component';
import { NavbarComponent } from './Shared/Navbar/Navbar.component';
import { LandingPageComponent } from './Components/LandingPage/LandingPage/LandingPage.component';
import { HeroSectionComponent } from './Components/LandingPage/Hero-Section/Hero-Section.component';
import { FeaturePageComponent } from './Components/LandingPage/Feature-Page/Feature-Page.component';
import { FeatureProjectComponent } from './Components/LandingPage/Feature-project/Feature-project.component';
import { AboutUsComponent } from './Components/LandingPage/AboutUs/AboutUs.component';
import { OurClientComponent } from './Components/ourClient/ourClient.component';
import { TestimonialComponent } from './Components/LandingPage/Testimonial/Testimonial.component';
import { ReadyCollabrationComponent } from './Components/LandingPage/readyCollabration/readyCollabration.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { AboutUsPageComponent } from './Components/AboutUsPage/AboutUsPage.component';
import { ContactComponent } from './Components/Contact/Contact.component';
import { ProjectComponent } from './Components/project/project.component';
import { FAQComponent } from './Shared/FAQ/FAQ.component';
import { AchivementsComponent } from './Components/AboutUsPage/achivements/achivements.component';
import { ClientApprochComponent } from './Components/AboutUsPage/ClientApproch/ClientApproch.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    LandingPageComponent,
    HeroSectionComponent,
    FeaturePageComponent,
    AboutUsComponent,
    FeatureProjectComponent,
    OurClientComponent,
    TestimonialComponent,
    ReadyCollabrationComponent,
    FooterComponent,
    AboutUsPageComponent,
    ContactComponent,
    ProjectComponent,
    FAQComponent,
    AchivementsComponent,
    ClientApprochComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
