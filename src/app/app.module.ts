import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NewsComponent } from './components/news/news.component';
import { PortifolioComponent } from './components/portifolio/portifolio.component';
import { BadgesComponent } from './components/home/badges/badges.component';
import { CardComponent } from './components/home/card/card.component';
import { PassagemComponent } from './components/home/passagem/passagem.component';
import { SectionGamesComponent } from './components/home/section-games/section-games.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardsComponent } from './components/about-us/cards/cards.component';
import { SectionAboutComponent } from './components/about-us/section-about/section-about.component';
import { TeamSuportComponent } from './components/about-us/team-suport/team-suport.component';
import { ReadMoreComponent } from './components/portifolio/read-more/read-more.component';
import { Section2Component } from './components/portifolio/section2/section2.component';
import { SectionLinearGradientComponent } from './components/portifolio/section-linear-gradient/section-linear-gradient.component';
import { CardsFeedbackComponent } from './components/portifolio/cards-feedback/cards-feedback.component';
import { BuscaComponent } from './components/news/busca/busca.component';
import { ContactComponent } from './components/contact-us/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutUsComponent,
    ContactUsComponent,
    NewsComponent,
    PortifolioComponent,
    BadgesComponent,
    CardComponent,
    PassagemComponent,
    SectionGamesComponent,
    FooterComponent,
    CardsComponent,
    SectionAboutComponent,
    TeamSuportComponent,
    ReadMoreComponent,
    Section2Component,
    SectionLinearGradientComponent,
    CardsFeedbackComponent,
    BuscaComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
