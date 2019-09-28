import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  person='Vijay'
  title = 'angprjct';
  toggle=false;
  fruits=['banana','mango'];

  change(val:any){
    alert(val);
    this.toggle=true;
  }
}
