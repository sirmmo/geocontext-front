import { MnMapFlavourDirective } from './../mn-map-flavour.directive';
import { Component, OnInit, Input, ContentChildren, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'mn-map',
  templateUrl: './mn-map.component.html',
  styleUrls: ['./mn-map.component.css']
})
export class MnMapComponent implements OnInit, AfterViewInit {

  constructor() { }

  @Input() public center;
  @Input() public startzoom;
  @Input() public minzoom;
  @Input() public maxzoom;
  @Input() public layers;

  @ContentChildren(MnMapFlavourDirective) flavour;

  @ViewChild('map') mapElement: ElementRef;

  ngOnInit() {
    console.log(this.flavour);
  }

  ngAfterViewInit() {
    this.flavour.first.setup(this);
  }

  getelement(): HTMLElement {
    return this.mapElement.nativeElement;
  }

}
