import { RestService } from '../rest.service';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-listpeople',
  templateUrl: './listpeople.component.html',
  styleUrls: ['./listpeople.component.css']
})
export class ListpeopleComponent implements OnInit {
  // @Input() dataEntrante:any
  public list: any = []
  constructor(private RestService:RestService) { }

  ngOnInit(): void {
    this.cargarData();

     console.log('Entrando data:', this.cargarData());
  }

  public cargarData(){
    this.RestService.get('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole')
    .subscribe(respuesta=> {
      console.log(respuesta);
      this.list = respuesta;
    })
  }

}
