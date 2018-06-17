import { CommonModule } from '@angular/common';
import { DatasourcesModule } from './datasources/datasources.module';
import { NgModule } from '@angular/core';

import { LayersModule } from './layers/layers.module';
import { MnMapComponent } from './mn-map/mn-map.component';

import { MnDatasourceComponent } from './mn-datasource/mn-datasource.component';
import { MnLayerComponent } from './mn-layer/mn-layer.component';

import { MnMapFlavourDirective } from './mn-map-flavour.directive';



const dec = [
  MnMapComponent,
  MnDatasourceComponent,
  MnLayerComponent,
  MnMapFlavourDirective];

@NgModule({
  imports: [
    CommonModule,
    LayersModule,
    DatasourcesModule
  ],
  declarations: dec,
  exports: dec
})
export class MnGeoModule { }