import { Component } from '@angular/core';
import { ResultProvider } from './result-provider';
@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss']
})
export class ResultComponent {
    model: any = {};

    onSubmit() {
        alert('SUCCESS!)\n\n' + JSON.stringify(this.model));
    }
}
