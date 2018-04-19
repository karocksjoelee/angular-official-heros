import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-directives',
  templateUrl: './my-directives.component.html',
  styleUrls: ['./my-directives.component.css']
})
export class MyDirectivesComponent implements OnInit {

  pickedColor: string;

  constructor() { }

  ngOnInit() {
  }

}
