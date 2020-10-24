import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GoalComponent } from './goal/goal.component';

const routes: Routes = [
    {
        path: '',
        component: GoalComponent,
        pathMatch: 'full'
    },
    {
        path: 'personas',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: 'design',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: 'critique',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: 'technologies',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
