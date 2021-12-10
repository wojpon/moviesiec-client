import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpageComponent } from './pages/adminpage/adminpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { RankingpageComponent } from './pages/rankingpage/rankingpage.component';
import { UserpageComponent } from './pages/userpage/userpage.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'ranking', component: RankingpageComponent },
  { path: 'login', component: LoginpageComponent },
  { path: 'user', component: UserpageComponent },
  { path: 'admin', component: AdminpageComponent },
  { path: '**', component: HomepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
