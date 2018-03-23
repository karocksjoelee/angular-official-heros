import { Component, OnInit, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-version-child',
  templateUrl: './version-child.component.html',
  styleUrls: ['./version-child.component.css']
})
export class VersionChildComponent implements OnInit, OnChanges {

  @Input() major: number;
  @Input() minor: number;
  changeLog: string[] = [];

  constructor() { }

  ngOnInit() {
  }
  // Respond when Angular (re)sets data-bound input properties.
  // The method receives a SimpleChanges object of current and previous property values.
  ngOnChanges(changes) {
    const log: string[] = [];
    for ( let propName in changes) {
      if (propName) {
        const changedProp = changes[propName];
        const to = JSON.parse(changedProp.currentValue);
        if (changedProp.isFirstChange()) {
          log.push(`Intial value of ${propName} set to ${to}`);
        } else {
          const from = JSON.stringify(changedProp.previousValue);
          log.push(`${propName} changed from ${from} to ${to}`);
        }
      }
    }
    this.changeLog.push(log.join(', '));
  }

}
