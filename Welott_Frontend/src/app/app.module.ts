import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{provideAnimations} from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { IndustriesComponent } from './industries/industries.component';
import { ProductGalleriesComponent } from './industries/product-galleries/product-galleries.component';
import { SnowRemovalRoadMaintenanceComponent } from './industries/product-galleries/snow-removal-road-maintenance/snow-removal-road-maintenance.component';
import { IndustrialFabricationsCastingsForgingsComponent } from './industries/product-galleries/industrial-fabrications-castings-forgings/industrial-fabrications-castings-forgings.component';
import { TruckTrailerComponent } from './industries/product-galleries/truck-trailer/truck-trailer.component';
import { MilitaryUSGovTComponent } from './industries/product-galleries/military-u-s-gov-t/military-u-s-gov-t.component';
import { ConstructionEquipmentComponent } from './industries/product-galleries/construction-equipment/construction-equipment.component';
import { GasOilMiningComponent } from './industries/product-galleries/gas-oil-mining/gas-oil-mining.component';
import { RailroadComponent } from './industries/product-galleries/railroad/railroad.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { AftermarketAutomotiveComponent } from './industries/product-galleries/aftermarket-automotive/aftermarket-automotive.component';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule

import { LightgalleryModule } from 'lightgallery/angular'; // Import the LightGalleryModule

import { LightboxModule } from 'ngx-lightbox';
import { HeaderComponent } from './industries/product-galleries/header/header.component';
import { HeadComponent } from './contact/head/head.component';
import { FormsModule } from '@angular/forms';
import { CapabilitiesComponent } from './capabilities/capabilities.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { QualityControlComponent } from './quality-control/quality-control.component';
import { MainheadComponent } from './mainhead/mainhead.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageService } from './industries/product-galleries/aftermarket-automotive/services/image.service'; // Adjust the import path as necessary
import{IAlbum } from './industries/product-galleries/aftermarket-automotive/models/album.interface';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    IndustriesComponent,
    ProductGalleriesComponent,
    SnowRemovalRoadMaintenanceComponent,
    IndustrialFabricationsCastingsForgingsComponent,
    TruckTrailerComponent,
    MilitaryUSGovTComponent,
    ConstructionEquipmentComponent,
    GasOilMiningComponent,
    RailroadComponent,
    ContactComponent,
    ProductsComponent,
    AftermarketAutomotiveComponent,
    HeaderComponent,
    HeadComponent,
    CapabilitiesComponent,
    FacilitiesComponent,
    QualityControlComponent,
    MainheadComponent,


    


    
  ],
  imports: [
    BrowserModule,
    LightboxModule ,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    LightgalleryModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule // <-- Import HttpClientModule here

  ],
  
  providers: [
    provideAnimations(),
    ImageService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}