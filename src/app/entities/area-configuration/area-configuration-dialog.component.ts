import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AreaConfigurationService} from './area-configuration.service';
import {AreaConfiguration} from './area-configuration.model';

@Component({
  selector: 'app-area-configuration-dialog',
  templateUrl: './area-configuration-dialog.component.html'
})
export class AreaConfigurationDialogComponent implements OnInit {

  areaConfiguration: AreaConfiguration;
  isSaving: boolean;
  constructor(
    private areaConfigurationService: AreaConfigurationService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.areaConfiguration = {};
    this.isSaving = false;
    this.route.params.subscribe((params) => {
      this.load(params['id']);
    });
  }

  load(id) {
    if (id) {
      this.areaConfigurationService.find(id).subscribe((data: {}) => {
        this.areaConfiguration = data;
      });
    }
  }

  clear() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    if (this.areaConfiguration.id !== undefined) {
      this.areaConfigurationService.update(this.areaConfiguration).subscribe(data => {
        console.log(data);
        this.router.navigate(['/area-configuration']);
      }, error => {
        console.log(error);
      });
    } else {
      this.areaConfigurationService.create(this.areaConfiguration).subscribe(data => {
        console.log(data);
        this.router.navigate(['/area-configuration']);
      }, error => {
        console.log(error);
      });
    }
  }
}
