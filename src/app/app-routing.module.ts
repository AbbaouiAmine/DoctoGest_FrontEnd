import { InformationComponent } from './pages/information/information.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { AuthSideBarGuardsService } from './services/auth-sidebar-guards.service';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { AdminStatisticComponent } from './components/admin-statistic/admin-statistic.component';
import { AdminDoctorantsComponent } from './components/admin-doctorants/admin-doctorants.component';
import { AdminLayoutComponent } from './pages/admin-layout/admin-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardsService } from './services/auth-guards.service';


const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'menu', canActivate: [AuthGuardsService], component: AdminLayoutComponent, children: [
      { path: 'doctorants', canActivate: [AuthSideBarGuardsService], component: AdminDoctorantsComponent },
      { path: 'statistic', component: AdminStatisticComponent },
      { path: 'profile', component: AdminProfileComponent }
    ]
  },
  { path: 'contact', component: ContactComponent },
  { path: 'information', component: InformationComponent },
  { path: 'notfound', component: NotfoundComponent },
  { path: '**', redirectTo: 'notfound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
