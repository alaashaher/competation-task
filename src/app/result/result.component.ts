import { Component, OnInit } from '@angular/core';
import { ResultProvider } from './result-provider';
@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
    model: any = {};
    resultValue: any;
    firstValue: any;
    SecondValue: any;

    ObjValue = {
        id: null,
        name: null,
        phone: null,
        firstTeam: null,
        secondteam: null
    };

    ObjAllValue: any;

    allTable: boolean;
    resultTable: boolean;
    constructor(
        private resultProvider: ResultProvider,
    ) {
        this.ObjAllValue = [];
    }
    ngOnInit() {
        this.resultValue = this.resultProvider.appVariables.displayValues();
        console.log(this.resultValue);
        this.resultTable = false;
        this.allTable = true;
    }

    ShowAllResult() {
        this.resultValue = this.resultProvider.appVariables.displayValues();
    }

    WinningTeam() {
        this.resultTable = true;
        this.allTable = false;
        if (this.firstValue > this.SecondValue) {
            console.log('first team is win', this.resultValue.length);
            for (let i = 0; i < this.resultValue.length; i++) {
                console.log(this.resultValue[i].firstTeam);
                if (this.resultValue[i].firstTeam > this.resultValue[i].secondteam) {
                    this.ObjValue.id = this.resultValue[i].id;
                    this.ObjValue.name = this.resultValue[i].name;
                    this.ObjValue.phone = this.resultValue[i].phone;
                    this.ObjValue.firstTeam = this.resultValue[i].firstTeam;
                    this.ObjValue.secondteam = this.resultValue[i].secondteam;
                    this.ObjAllValue.push(this.ObjValue);
                    console.log(this.ObjAllValue);
                }
            }
        } else if (this.SecondValue > this.firstValue) {
            console.log('second team is win');
            for (let i = 0; i < this.resultValue.length; i++) {
                console.log(this.resultValue[i].firstTeam);
                if (this.resultValue[i].firstTeam < this.resultValue[i].secondteam) {
                    this.ObjValue.id = this.resultValue[i].id;
                    this.ObjValue.name = this.resultValue[i].name;
                    this.ObjValue.phone = this.resultValue[i].phone;
                    this.ObjValue.firstTeam = this.resultValue[i].firstTeam;
                    this.ObjValue.secondteam = this.resultValue[i].secondteam;
                    this.ObjAllValue.push(this.ObjValue);
                    console.log(this.ObjAllValue);
                }
            }
        } else {
            console.log('first team is win');

        }
    }
}
