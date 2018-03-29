import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {

  intervalid = 0;
  message = '';
  seconds = 11;

  constructor() { }

  ngOnInit() {
  }

  clearTimer() {
    clearInterval(this.intervalid);
  }

  start() {
    this.countDown();
  }

  stop() {
    this.clearTimer();
    this.message = `Holding at T-${this.seconds} seconds`;
  }

  private countDown() {
    this.clearTimer();
    this.intervalid = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = 'Blast Off !!';
      } else {
        if (this.seconds < 0 ) {
          this.seconds = 10; // Reset
          this.message = `T-${this.seconds} seconds and counting`;
        }
      }
    }, 1000);
  }

  ngOnDestroy() {
    this.clearTimer();
  }

}
