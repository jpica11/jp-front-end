import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { BioComponent } from './bio/bio.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { HomeTileComponent } from './home-tile/home-tile.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    BioComponent,
    MenuComponent,
    AboutComponent,
    HomeTileComponent,
    SkillsComponent,
    FooterComponent,
    ContactComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgxPageScrollCoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
