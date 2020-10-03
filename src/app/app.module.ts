import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartModule } from 'primeng/chart';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TabViewModule } from 'primeng/tabview';
import { TabMenuModule } from 'primeng/tabmenu';
import { CareerComponent } from './career/career.component';
import { CardModule } from 'primeng/card';
import { SkillChartComponent } from './skill-chart/skill-chart.component';
import { SkillTableComponent } from './skill-table/skill-table.component';
import { TreeTableModule } from 'primeng/treetable';
import { HttpClientModule } from '@angular/common/http';
import { TechDairyComponent } from './tech-dairy/tech-dairy.component';
import { ProjectsComponent } from './projects/projects.component';
import { PersonalComponent } from './personal/personal.component';
import { TravelLogComponent } from './travel-log/travel-log.component';
import { IndustryProjectsComponent } from './industry-projects/industry-projects.component';
import { FreelanceProjectsComponent } from './freelance-projects/freelance-projects.component';
import { PocComponent } from './poc/poc.component';
import { DialogModule } from 'primeng/dialog';
import { TechnicalReferencesComponent } from './technical-references/technical-references.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CareerComponent,
    SkillChartComponent,
    SkillTableComponent,
    TechDairyComponent,
    ProjectsComponent,
    PersonalComponent,
    TravelLogComponent,
    IndustryProjectsComponent,
    FreelanceProjectsComponent,
    PocComponent,
    TechnicalReferencesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ChartModule,
    TabViewModule,
    TabMenuModule,
    AppRoutingModule,
    CardModule,
    TreeTableModule,
    HttpClientModule,
    DialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
