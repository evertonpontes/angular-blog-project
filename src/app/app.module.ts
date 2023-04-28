import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { BlogTitleComponent } from './components/blog-title/blog-title.component';
import { FeaturedArticleComponent } from './components/featured-article/featured-article.component';
import { FeaturedRightSectionComponent } from './components/featured-right-section/featured-right-section.component';
import { FeaturedArticleSmallComponent } from './components/featured-article-small/featured-article-small.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    BlogTitleComponent,
    FeaturedArticleComponent,
    FeaturedRightSectionComponent,
    FeaturedArticleSmallComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
