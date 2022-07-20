import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css'],
})
export class NoComunesComponent implements OnInit {
  nombre: string = 'Kiko';
  genero: string = 'masculino';
  clientes: string[] = ['Cliente 1', 'Cliente 2', 'Cliente 3'];

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  clientesMapa = {
    '=0': 'no hay clientes',
    '=1': 'solo hay un cliente',
    other: 'hay # clientes',
  };

  cambiarNombre() {
    this.nombre = 'Juana';
    this.genero = 'femenino';
  }

  borrarCliente() {
    this.clientes.pop();
  }

  persona = {
    nombre: 'Juan',
    edad: '30',
    direccion: 'Calle falsa 123',
  };

  miObservable = interval(1000);
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hola');
    }, 3500);
  });
}
