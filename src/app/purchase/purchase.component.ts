import { Component } from '@angular/core';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrl: './purchase.component.scss'
})
export class PurchaseComponent {
  modalOpen = false;

  toggleModalOpen (): void{
    this.modalOpen = !this.modalOpen;
  }
}
