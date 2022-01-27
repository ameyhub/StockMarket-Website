import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GroupsComponent } from './groups/groups.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'groups', component: GroupsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
