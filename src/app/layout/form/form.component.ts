import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgForm } from '@angular/forms';

import { Formulario } from './form'

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
export class FormComponent implements OnInit {
    context: CanvasRenderingContext2D;
    @ViewChild("myCanvas") mycambas
    @ViewChild('formJugador') formJugador: NgForm;

    public formulario: Formulario
    constructor() {
        this.formulario = new Formulario("", "", "", "", "", "", "", "", "")
    }

    ngOnInit() { }
    Enviar() {
        console.log(this.formulario)
    }
    preview(e: any): void {
        let canvas = this.mycambas.nativeElement;
        let context = canvas.getContext('2d');
        context.clearRect(0, 0, 300, 300)
        var render = new FileReader();
        render.onload = function (event) {
            var img = new Image();
            img.onload = function () {
                canvas.width = img.width;
                canvas.height = img.height;
                context.drawImage(img, 0, 0)
            };
            // img.src= event.target.result;
        }
        render.readAsDataURL(e.target.files[0]);
    }
}
