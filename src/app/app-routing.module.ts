import { ProjectsComponent } from './projects/projects.component';
import { TravelLogComponent } from './travel-log/travel-log.component';
import { PersonalComponent } from './personal/personal.component';
import { TechDairyComponent } from './tech-dairy/tech-dairy.component';
import { CareerComponent } from './career/career.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'my-bio', pathMatch: 'full' },
  { path: 'my-bio', component: CareerComponent },
  { path: 'tech-dairy', component: TechDairyComponent },
  { path: 'personal', component: PersonalComponent },
  { path: 'travel-log', component: TravelLogComponent },
  { path: 'projects', component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
