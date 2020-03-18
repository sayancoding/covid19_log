import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MapsComponent } from "./home/maps/maps.component";
import { PrecautionsComponent } from './precautions/precautions.component';

const routes: Routes = [
  {
    path: "map-live-coverage",
    component: MapsComponent
  },
  {
    path: "precautions",
    component: PrecautionsComponent
  },
  { 
    path: "map-live-coverage", 
    pathMatch: "full", 
    redirectTo: "/" 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
