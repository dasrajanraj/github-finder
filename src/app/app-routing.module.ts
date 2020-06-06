import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './component/profile/profile.component';
import { ProfileDetailComponent } from './component/profile-detail/profile-detail.component';


const routes: Routes = [
  {path :'' , component : ProfileComponent},
  {path :'profileDetail/:user', component : ProfileDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
