

export class People{
  first:string = 'Hector';
  last:string = 'Rodriguez';
  email:string= 'hmrt88@gmail.com';
  address: string= 'dlfñlkfg';
  created: string = 'October 2, 2020';
  balance: string = '$4,619.50';

  /**
   *
   */
  constructor(first:string, last:string, email:string, address:string, created:string, balance:string) {
    
    this.first = first;
    this.last = last;
    this.email = email;
    this.address = address;
    this.created = created;
    this.balance = balance
  }
}