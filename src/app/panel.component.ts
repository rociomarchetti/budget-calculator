import { BudgetService } from './services/budget.service';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-panel',
  templateUrl: 'panel.component.html',
  styleUrls: ['panel.component.css'],
})
export class PanelComponent {
  /*   formularioWeb: FormGroup = new FormGroup({
        paginas: new FormControl('4'),
        idiomas: new FormControl('2')
    }) OPCIÓN SIN FORMBUILDER*/

  formularioWeb: FormGroup = this.fb.group({
    paginas: [, [Validators.required, Validators.min(0)]],
    idiomas: [, [Validators.required, Validators.min(0)]],
  });

  constructor(private fb: FormBuilder, public BudgetService: BudgetService) {
    this.webServiceResult = this.BudgetService.webServiceResult;
  }

  campoNoEsValido(campo: string) {
    return (
      this.formularioWeb.controls[campo].errors &&
      this.formularioWeb.controls[campo].touched
    );
  }

  webServiceResult: number = 0;
  numPaginas: number = 0;
  numIdiomas: number = 0;
  total = 500 + this.webServiceResult;

  agregarWebService(numPaginas: number, numIdiomas: number) {
    numPaginas = this.formularioWeb.controls['paginas'].value;
    numIdiomas = this.formularioWeb.controls['idiomas'].value;
    this.BudgetService.agregarWebService(numPaginas, numIdiomas);
    this.webServiceResult = this.BudgetService.webServiceResult;
  }

  guardar() {
    if (this.formularioWeb.invalid) {
      this.formularioWeb.markAllAsTouched();
      return;
    }
  }
}
