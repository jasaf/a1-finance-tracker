import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalComponent } from './goal/goal.component';

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
        component: GoalComponent
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
