import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material';
import {MatIconModule} from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from 'src/app/client/auth/auth.component';
import { LoginComponent } from 'src/app/client/auth/login/login.component';
import { RegistrationComponent } from 'src/app/client/auth/registration/registration.component';
import { PageNotFoundComponent } from 'src/app/client/page-not-found/page-not-found.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmComponent } from './client/film/film.component';
import { HomeComponent } from './client/home/home.component';
import { CoreModule } from './core/core.module';
import { TokenInterceptor } from './core/interceptor/token.interceptor';
import { AuthorizationService } from './core/services/authorization.service';
/**
 * class AppModule
 */

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    FilmComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatSidenavModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatDividerModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    CoreModule,
    AppRoutingModule,
  ],
  entryComponents: [LoginComponent, RegistrationComponent],
  providers: [
    AuthorizationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
