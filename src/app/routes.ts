import { Routes } from "@angular/router";
import {Home} from './home/home'
import { DetailsComponent } from "./details/details";

const routeConfig: Routes = [
     {
    path: '',
    component: Home,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details',
  },
];
export default routeConfig;
