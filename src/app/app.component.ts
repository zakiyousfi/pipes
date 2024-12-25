import {LOCALE_ID,Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projet pipes';
  public birthday: Date = new Date(2000,3,15);
  public d=new Date();
  public somme=20;
  public e=2;
  public a=5;
  public b=6;
}
