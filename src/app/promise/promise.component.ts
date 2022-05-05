import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {


  constructor() { }

  ngOnInit(): void { }

  //promise defined
  promise = new Promise((resolve, reject) => {
    resolve('promise resolve')
  });

  promise2 = fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())

  //with promise
  fetch1() {
    this.promise.then((res: any) => {
      console.log(res);
      document.getElementById('result1')!.innerText = res
    }).catch((res: any) => {
      console.log(res);
    })
  }

  //with async & await method
  async fetch2() {
   let data = await this.promise
   document.getElementById('result2')!.innerText = JSON.stringify(data)
  }

  //fetch api
  // fetch3(){
  //   this.promise2.then(res=>{
  //     document.getElementById('result3')!.innerText = JSON.stringify(res)
  //   })
  // }

  //async & await
  async fetch3(){
    let data = await this.promise2
   document.getElementById('result3')!.innerText = JSON.stringify(data)
  }


}
