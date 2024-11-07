import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { IndustriesComponent } from './industries/industries.component';
import { ProductGalleriesComponent } from './industries/product-galleries/product-galleries.component';
import { AftermarketAutomotiveComponent } from './industries/product-galleries/aftermarket-automotive/aftermarket-automotive.component';
import { SnowRemovalRoadMaintenanceComponent } from './industries/product-galleries/snow-removal-road-maintenance/snow-removal-road-maintenance.component';
import { IndustrialFabricationsCastingsForgingsComponent } from './industries/product-galleries/industrial-fabrications-castings-forgings/industrial-fabrications-castings-forgings.component';
import { TruckTrailerComponent } from './industries/product-galleries/truck-trailer/truck-trailer.component';
import { MilitaryUSGovTComponent } from './industries/product-galleries/military-u-s-gov-t/military-u-s-gov-t.component';
import { ConstructionEquipmentComponent } from './industries/product-galleries/construction-equipment/construction-equipment.component';
import { GasOilMiningComponent } from './industries/product-galleries/gas-oil-mining/gas-oil-mining.component';
import { RailroadComponent } from './industries/product-galleries/railroad/railroad.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { CapabilitiesComponent } from './capabilities/capabilities.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { QualityControlComponent } from './quality-control/quality-control.component';
import { MainheadComponent } from './mainhead/mainhead.component';
import { HeadComponent } from './contact/head/head.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
{path:'capabilities', component:CapabilitiesComponent},
  {path:'contact', component:ContactComponent},
  {path:'industries', component:IndustriesComponent},
  {path:'products', component:ProductsComponent},
  {path:'facilities',component:FacilitiesComponent},
  {path:'quality-control',component:QualityControlComponent},
  { path: 'industries/product-galleries', component: ProductGalleriesComponent }, // Add this route
  {path : 'industries/product-galleries/aftermarket-automotive', component: AftermarketAutomotiveComponent},
  { path: 'industries/product-galleries/snow-removal-road-maintenance', component: SnowRemovalRoadMaintenanceComponent },
  { path: 'industries/product-galleries/industrial-fabrications-castings-forgings', component: IndustrialFabricationsCastingsForgingsComponent },
  { path: 'industries/product-galleries/truck-trailer', component: TruckTrailerComponent },
  { path: 'industries/product-galleries/military-u-s-gov-t', component:  MilitaryUSGovTComponent },
  { path: 'industries/product-galleries/construction-equipment', component: ConstructionEquipmentComponent },
  { path: 'industries/product-galleries/gas-oil-mining', component: GasOilMiningComponent },
  { path: 'industries/product-galleries/railroad', component: RailroadComponent },
{path:'mainhead/mainhead.component', component:MainheadComponent},
{path:'contact/head/head.component', component:HeadComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' } // Redirect to /home by default
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',  // Scroll to the top on navigation
  anchorScrolling: 'enabled',            // Enable anchor scrolling
};

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  } 