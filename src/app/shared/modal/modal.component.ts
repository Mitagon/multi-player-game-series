import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ModalInput } from './modal-input';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() modal!: ModalInput;
  @Output() primaryButtonClick = new EventEmitter<any>();
  @Output() secondaryButtonClick = new EventEmitter<any>();
  @Output() closeModal = new EventEmitter<any>();

  @ViewChild('modalContainer') modalContainer!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onCloseModal(event: Event): void {
    this.modalContainer.nativeElement.classList.toggle('active');
    return this.closeModal.emit(event);
  }

  onPrimaryButtonClick (event: Event): void {
    return this.primaryButtonClick.emit(event);
  }

  onSecondaryButtonClick (event: Event): void {
    return this.secondaryButtonClick.emit(event);
  }


}
