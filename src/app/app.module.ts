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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
