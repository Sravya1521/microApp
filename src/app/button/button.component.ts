import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-button-lib',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
