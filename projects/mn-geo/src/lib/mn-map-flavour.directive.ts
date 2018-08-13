import { DatasourceDirective } from './datasources/datasource.directive';
import { LayerComponent } from './layers/layer.directive';
import { MnGeoFlavour } from './mn-geo-flavour.interface';
import { Directive } from '@angular/core';

import { MnMapComponent } from './mn-map/mn-map.component';

@Directive({
  selector: '[mnMapFlavour]'
})
export class MnMapFlavourDirective implements MnGeoFlavour {

  constructor() { }

  setup(map: MnMapComponent) {
    console.log('SETTING UP');
  }


  addLayer(layer: LayerComponent) { }
  removeLayer(id) { }

  addDatasource(datasource: DatasourceDirective) { }
  removeDatasource(id) { }

}
