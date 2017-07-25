import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from '../childcomponents/childcomponent';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
    {path:'child',component:ChildComponent}
];

@NgModule({
    imports:[
RouterModule.forRoot(appRoutes)
    ]
})
export class AppRouteModule{}

