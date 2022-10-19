import { BudgetService } from '../../services/budget.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-panel',
  templateUrl: 'panel.component.html',
  styleUrls: ['panel.component.css'],
})
export class PanelComponent {
  numPaginas: number = 1;
  numIdiomas: number = 1;

  formularioWeb: FormGroup = this.fb.group({
    paginas: [, [Validators.required, Validators.min(1)]],
    idiomas: [, [Validators.required, Validators.min(1)]],
  });

  @Output() mostrarTotal = new EventEmitter<number>();

  constructor(private fb: FormBuilder, public BudgetService: BudgetService) {
    this.numPaginas = this.formularioWeb.controls['paginas'].value;
    this.numIdiomas = this.formularioWeb.controls['idiomas'].value;
  }

ngOnInit(): void {

  this.formularioWeb.get('paginas')?.valueChanges.subscribe((numPaginas: number) => {
    const numIdiomas = this.formularioWeb.get('idiomas')?.value;
    this.mostrarTotal.emit(this.BudgetService.agregarWebService(numPaginas,numIdiomas))
  });

  this.formularioWeb.get('idiomas')?.valueChanges.subscribe((numIdiomas: number) => {
    const numPaginas = this.formularioWeb.get('paginas')?.value;
    this.mostrarTotal.emit(this.BudgetService.agregarWebService(numPaginas, numIdiomas))
  })
}

sumar(service: string) {
  if (service === 'paginas') { 
    this.numPaginas++;
    this.BudgetService.agregarWebService( this.numPaginas, this.numIdiomas )
  }
  if(service === 'idiomas') {
    this.numIdiomas++;
    this.BudgetService.agregarWebService(this.numPaginas, this.numIdiomas)
  }
}

restar(service: string) {
  if (service === 'paginas') {
    this.numPaginas--;
    this.BudgetService.agregarWebService( this.numPaginas, this.numIdiomas )
  }
  if(service === 'idiomas') {
    this.numIdiomas--;
    this.BudgetService.agregarWebService(this.numPaginas, this.numIdiomas)
  }
}



  campoNoEsValido(campo: string) {
    return (
      this.formularioWeb.controls[campo].errors &&
      this.formularioWeb.controls[campo].touched
    );
  }

  guardar() {
    if (this.formularioWeb.invalid) {
      this.formularioWeb.markAllAsTouched();
      return;
    }
  }
}
