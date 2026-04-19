import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../Shared/shared.module';
import { ProjectComponent } from './project.component';

const routes: Routes = [
  { path: '', component: ProjectComponent }
];

@NgModule({
  declarations: [ProjectComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class ProjectModule {}
