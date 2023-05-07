import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower : string = 'frenando'

  public nameUpper : string = 'FERNANDO'

  public nameTitle : string = 'FRenaNDo'

  public customDate: Date = new Date()
}
