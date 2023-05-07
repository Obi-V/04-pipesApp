import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18nSelect
  public name: string = 'Frenando'
  public gender: 'male'|'female' | 'no existe' = 'male'
  public invitationMap= {
    'male': 'invitartlo',
    'female': 'invitarla',
    'no existe': ' no binario '
  }

  changeClient(): void {
    this.name = 'Melisa'
    this.gender = 'no existe'
  }


  //i18nPlural

  public clients: string[] = ['Maria','Pedro','Jose','Mireia','Juanan']

  public clientsMap = {
    '=0' : 'no tenemos ningún cliente esperando',
    '=1' : 'tenemos un cliente esperando',
    'other' : 'tenemos # clientes esperando'
  }


  borrarCliente():void {
    this.clients.shift()
  }


  //KeyValue Pipe
  public person = {
    name : 'Fernando',
    age: 36,
    address: 'Ottawa, Canada'
  }

  //Async Pipe
  public myObservableTimer = interval(2000).pipe(
    tap( valor=>
      console.log('Tap: ', valor)
      )
  )

  public promiseValue: Promise<string> = new Promise( (resolve, reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data en la promesa')
    }, 3500);
  })
}
