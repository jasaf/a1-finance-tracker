import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'goal',
        pathMatch: 'full'
    },
    {
        path: 'personas',
        redirectTo: 'goal',
        pathMatch: 'full'
    },
    {
        path: 'design',
        redirectTo: 'goal',
        pathMatch: 'full'
    },
    {
        path: 'critique',
        redirectTo: 'goal',
        pathMatch: 'full'
    },
    {
        path: 'technologies',
        redirectTo: 'goal',
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
