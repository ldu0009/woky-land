import { Route } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { HomeComponent } from "./modules/pages/home/home.component";

export const appRoutes:Route[] = [
    {
        path:'',
        component: LayoutComponent,
        children:[
            {path:'home',component:HomeComponent}
        ]
    }
]