import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent  {

  nombreLower: string = 'Kiko';
  nombreUpper: string = 'KIKO';
  nombreCapitalize: string = 'kIkO';

  fecha: Date = new Date();

}
