import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class JhiConfigurationService {

    constructor(private http: HttpClient) {
    }

    get() {
        return this.http.get('management/configprops').map((res: Response) => {
            const properties: any[] = [];
            const propertiesObject = res.json();
            for (const key in propertiesObject) {
                if (propertiesObject.hasOwnProperty(key)) {
                    properties.push(propertiesObject[key]);
                }
            }
            return properties.sort((propertyA, propertyB) => {
                return (propertyA.prefix === propertyB.prefix) ? 0 :
                    (propertyA.prefix < propertyB.prefix) ? -1 : 1;
            });
        });
    }

    getEnv() {
        return this.http.get('management/env').map((res: Response) => {
            const properties: any = {};
            const propertiesObject = res.json();
            for (const key in propertiesObject) {
                if (propertiesObject.hasOwnProperty(key)) {
                    const valsObject = propertiesObject[key];
                    const vals: any[] = [];
                    for (const valKey in valsObject) {
                        if (valsObject.hasOwnProperty(valKey)) {
                            vals.push({key: valKey, val: valsObject[valKey]});
                        }
                    }
                    properties[key] = vals;
                }
            }
            return properties;
        });
    }
}
