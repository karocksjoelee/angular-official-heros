import { Component, OnInit } from '@angular/core';
import { MissionService } from '../../mission.service';

@Component({
  selector: 'app-misson-control',
  templateUrl: './misson-control.component.html',
  styleUrls: ['./misson-control.component.css']
})
export class MissonControlComponent implements OnInit {

  astronauts = ['Lovell', 'Swigert', 'Haise'];
  history: string[] = [];
  missions = ['Fly to the moon !' , 'Fly to mars', 'Fly to Vegas !'];
  nextMission = 0;

  constructor(
    private missionService: MissionService
  ) {
    missionService.missionConfirmed$.subscribe((astronaut) => {
      this.history.push(`${astronaut} confirmed the mission`);
    });
  }

  ngOnInit() {
  }

  announce() {
    let mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`Mission "${mission}" announced `);
    if (this.nextMission >= this.missions.length) {
      this.nextMission = 0;
    }
  }

}
