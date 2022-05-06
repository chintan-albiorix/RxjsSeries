import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const obs1 = of('anup', 'shekhar', 'ajay')

    obs1.subscribe(res=>{
      console.log(res)
    })
  }

}
