import { ResultComponent } from './result.component';
import { Routes } from '@angular/router';

export const ResultRoutes: Routes = [{
    path: '',
    component: ResultComponent,
    data: {
        heading: 'ResultComponent'
    }
}
];
