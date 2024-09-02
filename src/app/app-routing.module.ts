import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Components/HomePage/HomePage.component';
import { LandingPageComponent } from './Components/LandingPage/LandingPage/LandingPage.component';
import { AboutUsComponent } from './Components/LandingPage/AboutUs/AboutUs.component';
import { ProjectComponent } from './Components/project/project.component';
import { ContactComponent } from './Components/Contact/Contact.component';
import { AboutUsPageComponent } from './Components/AboutUsPage/AboutUsPage.component';

const routes: Routes = [
  {
    path: '', component: LandingPageComponent,
  },
  {
    path: 'about', component: AboutUsPageComponent
  },
  {
    path: 'project', component:ProjectComponent
  },
  {
    path:'contact', component:ContactComponent
  } 
];
@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
