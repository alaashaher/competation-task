import { Injectable } from '@angular/core';

@Injectable()
export class AppVariables {

    private ObjAllValue: any;

    constructor() {
        this.ObjAllValue = [];
    }
    setValues(valueObject) {
        console.log(valueObject);
        this.ObjAllValue.push(valueObject);
    }

    displayValues(): any {
        return this.ObjAllValue;
    }
}
