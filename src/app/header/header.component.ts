import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  clicked: Boolean = false;
  @Output ()
    featureSelected: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

}
