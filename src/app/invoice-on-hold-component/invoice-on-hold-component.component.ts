import { Component } from '@angular/core';
import { InvoiceOnHoldService } from '../Services/invoice-on-hold.service';

@Component({
  selector: 'app-invoice-on-hold-component',
  templateUrl: './invoice-on-hold-component.component.html',
  styleUrl: './invoice-on-hold-component.component.scss'
})
export class InvoiceOnHoldComponentComponent {
  invHoldCnt !: number;
  constructor(private _invHoldService : InvoiceOnHoldService ){}

  ngOnInit(): void {
    this.getInvHoldCnt();
  }

  getInvHoldCnt(){
    this._invHoldService.getInvoiceOnHold().subscribe({
      next: (res)=>{
        this.invHoldCnt = res;
      },
      error: console.log,
    })
  }
}
