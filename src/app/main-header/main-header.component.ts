import {Component, OnInit, Directive} from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})

@Directive({ selector : '[appDropdown]'})

export class MainHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
