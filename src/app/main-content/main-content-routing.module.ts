import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalComponent } from './goal/goal.component';
import { PersonasComponent } from './personas/personas.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'Goal',
        pathMatch: 'full'
    },
    {
        path: 'Goal',
        component: GoalComponent
    },
    {
        path: 'Personas',
        component: PersonasComponent
    },
    {
        path: 'Design',
        component: GoalComponent
    },
    {
        path: 'Critique',
        component: GoalComponent
    },
    {
        path: 'Technologies',
        component: GoalComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MainContentRoutingModule { }
