import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalComponent } from './goal/goal.component';
import { PersonasComponent } from './personas/personas.component';
import { DesignComponent } from './design/design.component';
import { CritiqueComponent } from './critique/critique.component';
import { TechnologiesComponent } from './technologies/technologies.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'Goals',
        pathMatch: 'full'
    },
    {
        path: 'Goals',
        component: GoalComponent
    },
    {
        path: 'Personas',
        component: PersonasComponent
    },
    {
        path: 'Design',
        component: DesignComponent
    },
    {
        path: 'Critique',
        component: CritiqueComponent
    },
    {
        path: 'Technologies',
        component: TechnologiesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MainContentRoutingModule { }
