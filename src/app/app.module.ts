import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ChartsModule } from "ng2-charts";
import { HomeService } from "./Services/home.service";
import { from } from 'rxjs';
import { MapsComponent } from './home/maps/maps.component';
import { ConstantsService } from './Services/Constants.service';
import { LeafletModule } from "@asymmetrik/ngx-leaflet";


@NgModule({
  declarations: [AppComponent, HomeComponent, MapsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
    ReactiveFormsModule,
    LeafletModule.forRoot()
  ],
  providers: [HomeService, ConstantsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
