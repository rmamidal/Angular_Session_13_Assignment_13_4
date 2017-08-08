import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { AddMovieComponent } from './Component/add-movie.component';
import { ListMovieComponent } from './Component/list-movie.component';
import { DetailsMovieComponent } from './Component/details-movie.component';
import { PageNotFoundComponent } from './Component/page-not-found.component';
import { RegisterComponent } from './Component/register.component';
import { LoginComponent } from './Component/login.component';
import { SearchPipe } from "./Pipe/search.pipe";
import { ApplicationRoutes } from './app.routes'
import { CapitalisePipe } from "./Pipe/capitalise.pipe";
import { AuthGuardComponent } from "./AuthGuard/auth-guard"
import { UnsavedchangesGuardService } from './AuthGuard/unsavedchanges-guard';


@NgModule({
  declarations: [
    AppComponent,
    AddMovieComponent,
    ListMovieComponent,
    DetailsMovieComponent,
    PageNotFoundComponent,
    RegisterComponent,
    LoginComponent,
    SearchPipe,
    CapitalisePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ApplicationRoutes),
  ],
  providers: [AuthGuardComponent, UnsavedchangesGuardService], // AuthGuardComponent Provider.
  bootstrap: [AppComponent]
})
export class AppModule { }
