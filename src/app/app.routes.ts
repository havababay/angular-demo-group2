import { Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { CommunicationComponent } from './communication/communication.component';
import { NgforDemoComponent } from './ngfor-demo/ngfor-demo.component';
import { NgifDemoComponent } from './ngif-demo/ngif-demo.component';
import { HomeDemoComponent } from './home-demo/home-demo.component';
import { RouterDemoComponent } from './router-demo/router-demo.component';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { PersonsListComponent } from './persons-list/persons-list.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';

export const routes: Routes = [
    {path: "binding", component: BindingComponent},
    {path: "communication", component: CommunicationComponent},
    {path: "ngfor", component: NgforDemoComponent},
    {path: "ngif", component: NgifDemoComponent},
    {path: "", component: HomeDemoComponent},
    {path: "routerdemo/:id", component: RouterDemoComponent},
    {path: "forms/:id", component: FormsDemoComponent},
    {path: "newform", component: FormsDemoComponent},
    {path: "persons", component: PersonsListComponent},
    {path: "newperson", component: PersonFormComponent},
    {path: "person/:idString", component: PersonFormComponent},
    {path: "pipes", component: PipesDemoComponent}
];
