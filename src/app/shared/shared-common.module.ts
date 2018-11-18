import {NgModule, LOCALE_ID, Pipe, PipeTransform} from '@angular/core';
import {Title} from '@angular/platform-browser';

import {WindowRef} from './tracker/window.service';
import {
    SmartcrowdSharedLibsModule,
    FindLanguageFromKeyPipe,
    JhiAlertComponent,
    JhiAlertErrorComponent
} from './';
@Pipe({name: 'TwoDecimalPipe'})
export class TwoDecimalNotRoundPipe implements PipeTransform {
    transform(value: number) {
        if (value) {
            let x = value + '';
            var a = x.lastIndexOf('.') >= 0 ? parseFloat(x.substr(0, x.lastIndexOf('.') + (3))) : value;
            //var am = a.toFixed(2.00);
            var am = parseFloat('' + a).toFixed(2);
            return String(am).split('').reverse().join('')
                .replace(/(\d{3}\B)/g, '$1,')
                .split('').reverse().join('');
        } else {
            return null;
        }
    }
}
@Pipe({name: 'FourDecimalPipe'})
export class FourDecimalNotRoundPipe implements PipeTransform {
    transform(value: number) {
        if (value > 0 || value < 0) {
            let x = value + '';
            var a = x.lastIndexOf('.') >= 0 ? parseFloat(x.substr(0, x.lastIndexOf('.') + (5))) : value;
            var c = a.toString();
            var b =  c.split(".");
            if(b.length == 1){
                b[1] = '00';
            }
            var mainValue = String(b[0]).split("").reverse().join("")
                .replace(/(\d{3}\B)/g, "$1,")
                .split("").reverse().join("");
            var calculated = mainValue+"."+b[1];
            return calculated;
        } else {
            return value;
        }
    }
}
@Pipe({name: 'DecimalPipe'})
export class NumNotRoundPipe implements PipeTransform {
    transform(value: number) {
        if (value) {
            let x = value + '';
            var a = x.lastIndexOf('.') >= 0 ? parseFloat(x.substr(0, x.lastIndexOf('.') + (3))) : value;
            var am = a.toFixed(2.00);
            var am = parseFloat('' + am).toFixed(2);
            return String(am).split("").reverse().join("")
                .replace(/(\d{3}\B)/g, "$1,")
                .split("").reverse().join("");
        } else {
            return null;
        }
    }
}
@NgModule({
    imports: [
        SmartcrowdSharedLibsModule
    ],
    declarations: [
        FindLanguageFromKeyPipe,
        JhiAlertComponent,
        JhiAlertErrorComponent,
        TwoDecimalNotRoundPipe,
        FourDecimalNotRoundPipe,
        NumNotRoundPipe
    ],
    providers: [
        FindLanguageFromKeyPipe,
        WindowRef,
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        },
    ],
    exports: [
        SmartcrowdSharedLibsModule,
        FindLanguageFromKeyPipe,
        JhiAlertComponent,
        JhiAlertErrorComponent,
        TwoDecimalNotRoundPipe,
        FourDecimalNotRoundPipe,
        NumNotRoundPipe
    ]
})
export class SmartcrowdSharedCommonModule {
}
