import { RxjsService } from './../../service/rxjs.service';
import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {

  broadMsg:any;
  videoSubscription!: Subscription;

  constructor(private rxjsservice: RxjsService) { }

  ngOnInit(): void {
    //const broadCastVideo = interval(2000)
    const broadCastVideo = timer(5000,1000)
    this.videoSubscription =  broadCastVideo.subscribe(res =>{
      this.broadMsg = 'Video'+res
      this.rxjsservice.elAppend(this.broadMsg, 'elContainer')
      if(res>=5){
        this.videoSubscription.unsubscribe()
      }
    })
  }

}
