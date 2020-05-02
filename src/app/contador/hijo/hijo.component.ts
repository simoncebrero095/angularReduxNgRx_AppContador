import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
@Input() contador: number;
  constructor() { }
  

multiplicar(){
  this.contador *=2; 
}
dividir(){
  this.contador /=2;
}


  ngOnInit(): void {
  }

}
