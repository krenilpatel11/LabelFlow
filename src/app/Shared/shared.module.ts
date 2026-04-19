import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { ReadyCollabrationComponent } from '../Components/LandingPage/readyCollabration/readyCollabration.component';
import { FAQComponent } from './FAQ/FAQ.component';

@NgModule({
  declarations: [
    FooterComponent,
    ReadyCollabrationComponent,
    FAQComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    FooterComponent,
    ReadyCollabrationComponent,
    FAQComponent,
    CommonModule,
    RouterModule,
  ]
})
export class SharedModule {}
