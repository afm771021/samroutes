import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-nombre-del-componente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div>
      <h2>{{ titulo }}</h2>
      <input [(ngModel)]="valor" (keyup)="onCambioValor()" />
      <button (click)="onClickBoton()">Click me</button>
    </div>
  `,
  styles: [`
    div {
      border: 1px solid #ccc;
      padding: 1rem;
      margin: 1rem 0;
    }
  `]
})
export class NombreDelComponenteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() titulo: string = 'Título por defecto';
  @Output() botonClick = new EventEmitter<void>();

  valor: string = '';

  onCambioValor() {
    console.log('Valor cambiado:', this.valor);
  }

  onClickBoton() {
    this.botonClick.emit();
  }

}
