import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransfereService {
  public data;
  constructor() { }
 

  setData(data){
   // console.log(data);
    this.data = data;
  }

  getData(){
    
   let temp = this.data;
   this.clearData();
   return temp;
  }

  clearData(){
    this.data = undefined;
  }
}
