import { Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';

export const routes: Routes = [
  {path: "**", component: AddComponent},
];
