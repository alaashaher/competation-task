import { Component, OnInit, Injectable } from '@angular/core';
import { FromProvider } from './form-provider';
@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
    // model: any = {};
    NameValue: any;
    EmailValue: any;
    phoneValue: any;
    firstValue: any;
    secValue: any;
    ObjValue = {
        id: null,
        name: null,
        phone: null,
        firstTeam: null,
        secondteam: null
    };
    count: any;
    ObjAllValue: any;
    constructor(
        private fromProvider: FromProvider,
    ) { }
    ngOnInit() {
        this.count = 0;
        this.ObjAllValue = [];
    }

    onsubmit() {
        this.ObjValue.id = this.count + 1;
        this.ObjValue.name = this.NameValue;
        this.ObjValue.phone = this.phoneValue;
        this.ObjValue.firstTeam = this.firstValue;
        this.ObjValue.secondteam = this.secValue;
        this.fromProvider.appVariables.setValues(this.ObjValue);
        console.log(this.fromProvider.appVariables.displayValues());
        this.ObjAllValue.push(this.ObjValue);
        console.log(this.ObjAllValue);
        this.count = this.count + 1;
    }
}
