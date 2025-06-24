import { Component, OnInit } from '@angular/core';
import { AuthService} from "../service/auth.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss']
})
export class DatosComponent implements OnInit {

  usuarios: any;
  datos$: Observable<string[]>;

  constructor(private authService: AuthService) {
    this.datos$ = this.authService.getDatos();
  }

  ngOnInit(): void {
     this.authService.getUsuarios().subscribe({
        next: (res) =>{
          this.usuarios = res;
          console.log(this.usuarios);
        },
       error: (err) =>{
          alert ('Error:' + err.status);
       },
       complete: () => console.log('done')
     });
  }

}
