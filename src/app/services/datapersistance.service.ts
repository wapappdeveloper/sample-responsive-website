import { Injectable } from '@angular/core';

@Injectable()
export class DatapersistanceService {

  constructor() { }

  setData(data:any){
    localStorage.setItem('credential',JSON.stringify(data));
  }

  getData(){
    return localStorage.getItem('credential');
  }

}
