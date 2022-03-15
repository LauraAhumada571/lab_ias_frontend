import { Component, OnInit } from '@angular/core';

const title = "Hello word";

@Component({
  selector: 'app-component-semillero',
  templateUrl: './component-semillero.component.html',
  styleUrls: ['./component-semillero.component.css']
})
export class ComponentSemilleroComponent implements OnInit {

  constructor() { }

  title2: String = "Hello word2";

  ngOnInit(): void {
  }

}
