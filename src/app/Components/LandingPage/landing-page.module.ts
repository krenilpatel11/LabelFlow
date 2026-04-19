import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../Shared/shared.module';
import { LandingPageComponent } from './LandingPage/LandingPage.component';
import { HeroSectionComponent } from './Hero-Section/Hero-Section.component';
import { FeaturePageComponent } from './Feature-Page/Feature-Page.component';
import { AboutUsComponent } from './AboutUs/AboutUs.component';
import { FeatureProjectComponent } from './Feature-project/Feature-project.component';
import { OurClientComponent } from '../ourClient/ourClient.component';
import { TestimonialComponent } from './Testimonial/Testimonial.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent }
];

@NgModule({
  declarations: [
    LandingPageComponent,
    HeroSectionComponent,
    FeaturePageComponent,
    AboutUsComponent,
    FeatureProjectComponent,
    OurClientComponent,
    TestimonialComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class LandingPageModule {}
