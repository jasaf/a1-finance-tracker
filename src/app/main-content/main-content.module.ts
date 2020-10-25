import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainContentRoutingModule } from './main-content-routing.module';

import { GoalComponent } from './goal/goal.component';
import { HeaderComponent } from './header/header.component';
import { PersonasComponent } from './personas/personas.component';
import { DesignComponent } from './design/design.component';
import { CritiqueComponent } from './critique/critique.component';
import { TechnologiesComponent } from './technologies/technologies.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MainContentRoutingModule
    ],
    declarations: [
        HeaderComponent,
        GoalComponent,
        PersonasComponent,
        DesignComponent,
        CritiqueComponent,
        TechnologiesComponent
    ]
})
export class MainContentModule { }
