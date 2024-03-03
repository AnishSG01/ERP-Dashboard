import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-rental-contract',
  templateUrl: './create-rental-contract.component.html',
  styleUrl: './create-rental-contract.component.scss'
})
export class CreateRentalContractComponent {
  first = true;
  second = false;
  third = false;
  fourth = false;

  // firstActive = true;
  // secondActive = false;
  // thirdActive = false;
  // fourthActive = false;

  showFirst ():void{
    this.first = true;
    this.second = false;
    this.third = false;
    this.fourth = false;
  }

  showSecond ():void{
    this.first = false;
    this.second = true;
    this.third = false;
    this.fourth = false;
  }

  showThird ():void{
    this.first = false;
    this.second = false;
    this.third = true;
    this.fourth = false;
  }

  showFourth ():void{
    this.first = false;
    this.second = false;
    this.third = false;
    this.fourth = true;
  }
}
