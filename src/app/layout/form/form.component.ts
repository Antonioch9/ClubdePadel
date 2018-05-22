import { Component, OnInit,ViewChild} from '@angular/core';
import { routerTransition } from '../../router.animations';
import {NgForm} from '@angular/forms';

import { Formulario } from './form'

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
export class FormComponent implements OnInit {
    @ViewChild('formJugador') formJugador: NgForm;

    public formulario :Formulario
    constructor() {
        this.formulario = new Formulario ("","","","","","","","","")
     }

    ngOnInit() { }
    Enviar(){
        console.log(this.formulario)
    }
}
