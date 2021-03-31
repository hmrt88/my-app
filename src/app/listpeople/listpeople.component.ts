import { RestService } from '../rest.service';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-listpeople',
  templateUrl: './listpeople.component.html',
  styleUrls: ['./listpeople.component.css']
})
export class ListpeopleComponent implements OnInit {
  // @Input() dataEntrante:any
  page: number = 1;
  public list: any = []
  constructor(private RestService:RestService) { }

  ngOnInit(): void {
    this.cargarData();

     console.log('Entrando data:', this.cargarData());
  }

  public cargarData(){

    if(localStorage.getItem('list') === null){
      this.RestService.get('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole')
      .subscribe(respuesta=> {
        console.log(respuesta);
        this.list = respuesta;
        localStorage.setItem('list', JSON.stringify(this.list));
      })
    }else{
      this.list = JSON.parse(localStorage.getItem('list') || this.list);
    }
  }

  addPeople(list: any):void
  {
    this.list.unshift(list);
    let listpeople;
    if(localStorage.getItem('list1')=== null)
    {
      listpeople = [];
      listpeople.unshift(list);
      localStorage.setItem('listpeople', JSON.stringify(listpeople))
    }else{
      listpeople = JSON.parse(localStorage.getItem('listpeople')||'{}');
      listpeople.unshift(list);
      localStorage.setItem('listpeople', JSON.stringify(listpeople));
    }
  }

  AddPeople(people: any)
  {
    this.addPeople(people);    
  }

}
