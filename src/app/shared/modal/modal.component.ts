import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ModalInput } from './modal-input';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  /**
   * modal inputs
   */
  @Input() modal!: ModalInput;
  /**
   * modal outputs (events)
   * These events are exported when buttons are clicked
   * whithin the modal;
   * Consume them via event binding
   */

  /**
   * Call this function when the primary button is clicked
   */
  @Output() primaryButtonClick = new EventEmitter<any>();
  /**
   * Call this function when the secondary button is clicked
   */
  @Output() secondaryButtonClick = new EventEmitter<any>();
  /**
   * Call this function when the modal is closed
   */
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
