import { Component, OnInit, Injectable } from '@angular/core';
import { FromProvider } from './form-provider';
@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
    model: any = {};
    NameValue: any;
    EmailValue: any;
    phoneValue: any;
    firstValue: any;
    secValue: any;
    ObjValue = {
        id: '',
        name: '',
        phone: '',
        firstTeam: '',
        secondteam: ''
     };
    // ObjAllValue: any;
    constructor(
        private fromProvider: FromProvider,
    ) {}
    ngOnInit() {
        // this.ObjAllValue = [];
    }

    onsubmit() {
        this.ObjValue.name = this.NameValue;
        this.ObjValue.phone = this.phoneValue;
        this.ObjValue.firstTeam = this.firstValue;
        this.ObjValue.secondteam = this.secValue;
        this.fromProvider.appVariables.setValues(this.ObjValue);
        console.log(this.fromProvider.appVariables.displayValues());
        alert('SUCCESS!)\n\n');
    }


}
