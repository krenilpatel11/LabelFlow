import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../Shared/shared.module';
import { ContactComponent } from './Contact.component';

const routes: Routes = [
  { path: '', component: ContactComponent }
];

@NgModule({
  declarations: [ContactComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class ContactModule {}
