import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

const routes: Routes = [
    {
        path: '', component: FormComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [RouterModule]
})
export class FormRoutingModule {
}
