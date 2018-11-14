import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AreaConfiguration} from './area-configuration.model';
@Injectable({
  providedIn: 'root'
})
export class AreaConfigurationService {
  API_URL  =  'http://localhost:8080/api/getAllAreaConfigurations';
  API_URL2  =  'http://localhost:8080/api/area-configurations';
  constructor(private  http:  HttpClient) {}

  create(areaConfiguration: AreaConfiguration) {
    return this.http.post(`${this.API_URL2}`, areaConfiguration);
  }

  update(areaConfiguration: AreaConfiguration) {
    return this.http.put(`${this.API_URL2}`, areaConfiguration);
  }

  find(id: number) {
    return this.http.get(`${this.API_URL2}/${id}`);
  }

  getAreas() {
    return this.http.get(`${this.API_URL}`);
  }
}
