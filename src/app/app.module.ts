import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DateCountPipe } from './date-count.pipe';
import { StrikethroughDirective } from './strikethrough.directive';
import { GitsearchComponent } from './gitsearch/gitsearch.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RepoComponent } from './repo/repo.component';

@NgModule({
  declarations: [
    AppComponent,
    DateCountPipe,
    StrikethroughDirective,
    GitsearchComponent,
    NotFoundComponent,
    RepoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
