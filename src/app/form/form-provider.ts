import { Injectable } from '@angular/core';
import { AppVariables } from '../app.variables';


@Injectable()
export class FromProvider {

    constructor(
        public appVariables: AppVariables,
    ) { }

}
