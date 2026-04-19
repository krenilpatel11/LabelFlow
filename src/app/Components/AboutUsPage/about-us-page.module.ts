import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../Shared/shared.module';
import { AboutUsPageComponent } from './AboutUsPage.component';
import { ClientApprochComponent } from './ClientApproch/ClientApproch.component';
import { AchivementsComponent } from './achivements/achivements.component';

const routes: Routes = [
  { path: '', component: AboutUsPageComponent }
];

@NgModule({
  declarations: [
    AboutUsPageComponent,
    ClientApprochComponent,
    AchivementsComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class AboutUsPageModule {}
