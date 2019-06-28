import { Injectable, OnInit } from '@angular/core';
import { AppVariables } from '../app.variables';


@Injectable()
export class ResultProvider implements OnInit {
    resultValue: any;
    constructor(
        public appVariables: AppVariables,
    ) { }

    ngOnInit() {
        this.resultValue = this.appVariables.displayValues();
        console.log(this.resultValue);
    }
}
