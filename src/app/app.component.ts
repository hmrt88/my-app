//import { RestService } from './rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-app';
  // public list: any = []
  constructor() {
    

  }

  ngOnInit(): void {
    //this.cargarData();
  }

  // public cargarData(){
  //   this.RestService.get('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole')
  //   .subscribe(respuesta=> {
  //     console.log(respuesta);
  //     this.list = respuesta;
  //   })
  // }
}
