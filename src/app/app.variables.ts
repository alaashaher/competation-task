import { Injectable } from '@angular/core';

@Injectable()
export class AppVariables {

    private ObjAllValue = [];

    constructor() { }
    setValues(valueObject) {
        this.ObjAllValue.push(valueObject);
    }

    displayValues(): any {
        return this.ObjAllValue;
    }
}
