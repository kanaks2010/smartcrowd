import {Component, OnInit, ViewChild} from '@angular/core';
import {AreaConfigurationService} from './area-configuration.service';
import * as _ from 'underscore';
import {AreaConfiguration} from './area-configuration.model';

@Component({
  selector: 'app-area-configuration',
  templateUrl: './area-configuration.component.html',
  styleUrls: ['./area-configuration.component.scss']
})
export class AreaConfigurationComponent implements OnInit {
  areaConfigurations: AreaConfiguration;
  constructor(
    private areaConfigurationService: AreaConfigurationService,
  ) {
  }

  ngOnInit() {
    this.getAllAreas();
  }

  public  getAllAreas() {
    this.areaConfigurationService.getAreas().subscribe((data: {}) => {
      console.log(data);
      this.areaConfigurations = data;
    });
  }
}
