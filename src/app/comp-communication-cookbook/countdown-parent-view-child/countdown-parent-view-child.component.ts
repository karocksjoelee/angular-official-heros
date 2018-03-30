import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CountdownTimerComponent } from '../countdown-timer/countdown-timer.component';

@Component({
  selector: 'app-countdown-parent-view-child',
  templateUrl: './countdown-parent-view-child.component.html',
  styleUrls: ['./countdown-parent-view-child.component.css']
})
export class CountdownParentViewChildComponent implements OnInit, AfterViewInit {

  @ViewChild(CountdownTimerComponent)
  private timerComponent: CountdownTimerComponent;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    /* The ngAfterViewInit() lifecycle hook is an important wrinkle.
       The timer component isn't available until after Angular displays
       the parent view. So it displays 0 seconds initially. **/
    setTimeout(() => {
      this.seconds = (() => {
        return this.timerComponent.seconds;
      });
    }, 0);
  }

  seconds() {
    return 0;
  }

  start() {
    this.timerComponent.start();
  }

  stop() {
    this.timerComponent.stop();
  }


}
