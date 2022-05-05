import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  constructor() { }

  elAppend(countValue:any, containerId:any){
    let el = document.createElement('li');
    el.innerText = countValue
    document.getElementById(containerId)?.appendChild(el)
  }
}
