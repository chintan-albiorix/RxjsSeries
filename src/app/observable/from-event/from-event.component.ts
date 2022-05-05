import { RxjsService } from './../../service/rxjs.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit, AfterViewInit {

  constructor(private rxjsService: RxjsService) { }

  @ViewChild('addBtn')
  addBtn!: ElementRef;

  ngOnInit(): void {

  
  }

  ngAfterViewInit(){
    let count=0;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(res=>{
      let countValue = "Video"+ count++
      this.rxjsService.elAppend(countValue,'elContainer');
      this.rxjsService.elAppend(countValue,'elContainer2');
    })
  }



}
