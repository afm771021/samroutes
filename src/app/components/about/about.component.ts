/*Antonio Fernandez 1.0.0*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  usuarios = ['Antonio', 'Maximiliano'];

  about = "Nombre";
  visible = false;

  constructor() {
    setTimeout( () => {
      this.visible = true;
    },3000);
  }

  ngOnInit(): void {
  }

  addUser(){
    this.usuarios.push(this.about);
  }

}
