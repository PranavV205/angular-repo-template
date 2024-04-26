import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {'path': '', component:HomeComponent},
    {'path': 'project', component:ProjectComponent},
    {'path': 'contact', component:ContactComponent},

];
