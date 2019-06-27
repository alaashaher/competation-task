import { Injectable } from '@angular/core';
import { AppVariables } from '../app.variables';


@Injectable()
export class ResultProvider {

    constructor(
        public appVariables: AppVariables,
    ) { }

}
