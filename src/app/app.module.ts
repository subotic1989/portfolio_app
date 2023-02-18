import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { AngularTiltModule } from 'angular-tilt';
import { NgxTypedJsModule } from 'ngx-typed-js';

import { AboutMeComponent } from './components/about-me/about-me.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PhraseComponent } from './components/phrase/phrase.component';
import { ServicesComponent } from './components/services/services.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ArticleComponent } from './components/article/article.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog/:article', component: ArticleComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    BlogComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    PhraseComponent,
    ServicesComponent,
    PortfolioComponent,
    ArticleComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AngularTiltModule,
    NgxTypedJsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
