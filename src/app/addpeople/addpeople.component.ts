import { ListpeopleComponent } from './../listpeople/listpeople.component';
import { People } from './../listpeople/people';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RestService } from '../rest.service';
@Component({
  selector: 'app-addpeople',
  templateUrl: './addpeople.component.html',
  styleUrls: ['./addpeople.component.css']
})
export class AddpeopleComponent implements OnInit {
 
  first!:string;
  last!: string;
  email!:string;
  address!:string;
  created!:string;
  balance!: string;
  
  @Output() listAdd = new EventEmitter<any>();
  
  constructor(private RestService:RestService, private ListpeopleComponent:ListpeopleComponent) { }

  ngOnInit(): void {
  }

  addPeople()
  {
    this.listAdd.emit({
      first: this.first,
      last:this.last,
      email: this.email,
      address: this.address,
      created: this.created,
      balance: this.balance
    });
    this.first ='';
    this.last = '';
    this.email ='';
    this.address='';
    this.created = '';
    this.balance = '';
  }

  addPerson(people: any){
    this.ListpeopleComponent.addPeople(people);
  }

}
