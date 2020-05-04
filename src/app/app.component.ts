import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { incrementar,decrementar } from './contador/contador.actions';
interface AppState {
  contador: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

contador: number;

constructor(private store: Store<AppState>){
this.store.subscribe(state => {
  console.log(state);
});

}

incrementar(){
   this.store.dispatch(incrementar())

}

decrementar(){
  this.store.dispatch(decrementar())
}


}


