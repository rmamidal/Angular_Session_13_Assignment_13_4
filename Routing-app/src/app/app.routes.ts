// Importing required libraries.
import{ Routes, RouterModule } from '@angular/router'
import { AddMovieComponent } from './Component/add-movie.component'
import { ListMovieComponent } from './Component/list-movie.component'
import { PageNotFoundComponent } from './Component/page-not-found.component'
import { DetailsMovieComponent } from './Component/details-movie.component'
import { RegisterComponent } from './Component/register.component'
import { LoginComponent } from './Component/login.component'
import { AuthGuardComponent } from "./AuthGuard/auth-guard"
import { UnsavedchangesGuardService } from './AuthGuard/unsavedchanges-guard';

// Defining path and assigning component to it.
export const ApplicationRoutes: Routes = [
    { path:'', redirectTo:'/ListMovie', pathMatch:'full'}, /* Default routes*/
    { path:'AddMovie', component: AddMovieComponent, canActivate: [AuthGuardComponent]},
    { path:'ListMovie', component: ListMovieComponent, canActivate: [AuthGuardComponent]},
    { path: 'DetailsMovie/:id', component: DetailsMovieComponent},
    { path: 'Login', component: LoginComponent},
    { path: 'Register', component: RegisterComponent, canDeactivate: [UnsavedchangesGuardService]}, // Adding canDeactive guards.
    { path:'**', component: PageNotFoundComponent } /* Wild card routes */
]
