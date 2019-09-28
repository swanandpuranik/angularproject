import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CalcComponent } from './calc/calc.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import { HeaderComponent } from './header/header.component';
import {MatListModule} from '@angular/material/list';
import { WelcomeComponent } from './welcome/welcome.component';
import {RouterModule } from '@angular/router'; 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CalcComponent,
    FlexboxComponent,
    HeaderComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatSelectModule,
    MatMenuModule,
    MatListModule,
    RouterModule.forRoot([{path:'',component:LoginComponent},{path:'welcom',component:WelcomeComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
