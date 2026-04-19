import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./Components/LandingPage/landing-page.module').then(
        m => m.LandingPageModule
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./Components/AboutUsPage/about-us-page.module').then(
        m => m.AboutUsPageModule
      ),
  },
  {
    path: 'project',
    loadChildren: () =>
      import('./Components/project/project.module').then(
        m => m.ProjectModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./Components/Contact/contact.module').then(
        m => m.ContactModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
