import { FormComponent } from './form.component';
import { Routes } from '@angular/router';

export const FormRoutes: Routes = [{
    path: '',
    component: FormComponent,
    data: {
        heading: 'FormComponent'
    }
}
];
