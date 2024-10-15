import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NewsComponent } from './components/news/news.component';
import { PortifolioComponent } from './components/portifolio/portifolio.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'about',component: AboutUsComponent},
  {path:'contact-us',component: ContactUsComponent},
  {path: 'news',component: NewsComponent},
  {path:'portifolio',component: PortifolioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
