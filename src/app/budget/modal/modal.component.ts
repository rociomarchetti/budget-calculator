import { Component } from "@angular/core";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
    selector: 'app-modal',
    templateUrl: 'modal.component.html'
})

export class ModalComponent {

   constructor( private modalService: NgbModal){}

open(modalInfo: any) {
    this.modalService.open(modalInfo, {ariaLabelledBy: 'modal-basic-title'})
} 

}