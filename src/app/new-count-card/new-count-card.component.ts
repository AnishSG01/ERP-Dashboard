import { Component } from '@angular/core';
import { faFileExport } from '@fortawesome/free-solid-svg-icons';
import { faFileContract } from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { faFileCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faFileCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faFileCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-new-count-card',
  templateUrl: './new-count-card.component.html',
  styleUrl: './new-count-card.component.scss'
})
export class NewCountCardComponent {
  faFileExport = faFileExport;
  faFileContract = faFileContract;
  faCalendarCheck = faCalendarCheck;
  faFileCircleXmark = faFileCircleXmark;
  faFileCircleCheck=faFileCircleCheck;
  faFileCircleExclamation=faFileCircleExclamation;
  faFileArrowDown=faFileArrowDown;
  faFileInvoiceDollar=faFileInvoiceDollar;
  faCalendarDays=faCalendarDays;
}
