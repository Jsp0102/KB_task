import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  // @Input() title:string = ''; 
  constructor() { }

  ngOnInit(): void {
  }

}
