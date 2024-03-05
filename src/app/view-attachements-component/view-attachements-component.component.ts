import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-view-attachements-component',
  templateUrl: './view-attachements-component.component.html',
  styleUrl: './view-attachements-component.component.scss'
})
export class ViewAttachementsComponentComponent {

  constructor (private sanitizer: DomSanitizer) {}

  iframes: any[] = [
    { iframeSrc: this.sanitizer.bypassSecurityTrustResourceUrl('https://alpharck.e-emphasys.com:9543/ca/api/resources/MDS_GenericDocument-2950-1-LATEST?$token=lp5C4xXRYOsSIFVlwUcMAAk8zxJckddaCQnFcV4jUFQBRQHZ1wQsXBuEHpZ%2BS1SUht5%2FnhWE6I4N7%2FENBUmFnYag47kpZJi8ovJvx3yyNOhQFBKw3TK5NzK8vm8ZSe%2B%2F5MCThOsFH8uaKmMihcRnhuQCEU%2FA6tHt73ZzEdKTSHCwowfXhaIq%2FeGpIllrO%2BdoIgvTA7TAhCnhIoGpcvbr%2Bq%2BwNyPq7Uy38%2Fi%2BulYumg7S2KFQ6K4vXVciEf5tGc7lYDPu1iqIEJQJz14wUYGO1g%3D%3D') },
    { iframeSrc: this.sanitizer.bypassSecurityTrustResourceUrl('https://alpharck.e-emphasys.com:9543/ca/api/resources/MDS_GenericDocument-2950-1-LATEST?$token=lp5C4xXRYOsSIFVlwUcMAAk8zxJckddaCQnFcV4jUFQBRQHZ1wQsXBuEHpZ%2BS1SUht5%2FnhWE6I4N7%2FENBUmFnYag47kpZJi8ovJvx3yyNOhQFBKw3TK5NzK8vm8ZSe%2B%2F5MCThOsFH8uaKmMihcRnhuQCEU%2FA6tHt73ZzEdKTSHCwowfXhaIq%2FeGpIllrO%2BdoIgvTA7TAhCnhIoGpcvbr%2Bq%2BwNyPq7Uy38%2Fi%2BulYumg7S2KFQ6K4vXVciEf5tGc7lYDPu1iqIEJQJz14wUYGO1g%3D%3D') },
    { iframeSrc: this.sanitizer.bypassSecurityTrustResourceUrl('https://alpharck.e-emphasys.com:9543/ca/api/resources/MDS_GenericDocument-2950-1-LATEST?$token=lp5C4xXRYOsSIFVlwUcMAAk8zxJckddaCQnFcV4jUFQBRQHZ1wQsXBuEHpZ%2BS1SUht5%2FnhWE6I4N7%2FENBUmFnYag47kpZJi8ovJvx3yyNOhQFBKw3TK5NzK8vm8ZSe%2B%2F5MCThOsFH8uaKmMihcRnhuQCEU%2FA6tHt73ZzEdKTSHCwowfXhaIq%2FeGpIllrO%2BdoIgvTA7TAhCnhIoGpcvbr%2Bq%2BwNyPq7Uy38%2Fi%2BulYumg7S2KFQ6K4vXVciEf5tGc7lYDPu1iqIEJQJz14wUYGO1g%3D%3D') },
    { iframeSrc: this.sanitizer.bypassSecurityTrustResourceUrl('https://alpharck.e-emphasys.com:9543/ca/api/resources/MDS_GenericDocument-2950-1-LATEST?$token=lp5C4xXRYOsSIFVlwUcMAAk8zxJckddaCQnFcV4jUFQBRQHZ1wQsXBuEHpZ%2BS1SUht5%2FnhWE6I4N7%2FENBUmFnYag47kpZJi8ovJvx3yyNOhQFBKw3TK5NzK8vm8ZSe%2B%2F5MCThOsFH8uaKmMihcRnhuQCEU%2FA6tHt73ZzEdKTSHCwowfXhaIq%2FeGpIllrO%2BdoIgvTA7TAhCnhIoGpcvbr%2Bq%2BwNyPq7Uy38%2Fi%2BulYumg7S2KFQ6K4vXVciEf5tGc7lYDPu1iqIEJQJz14wUYGO1g%3D%3D') },
    { iframeSrc: this.sanitizer.bypassSecurityTrustResourceUrl('https://alpharck.e-emphasys.com:9543/ca/api/resources/MDS_GenericDocument-2950-1-LATEST?$token=lp5C4xXRYOsSIFVlwUcMAAk8zxJckddaCQnFcV4jUFQBRQHZ1wQsXBuEHpZ%2BS1SUht5%2FnhWE6I4N7%2FENBUmFnYag47kpZJi8ovJvx3yyNOhQFBKw3TK5NzK8vm8ZSe%2B%2F5MCThOsFH8uaKmMihcRnhuQCEU%2FA6tHt73ZzEdKTSHCwowfXhaIq%2FeGpIllrO%2BdoIgvTA7TAhCnhIoGpcvbr%2Bq%2BwNyPq7Uy38%2Fi%2BulYumg7S2KFQ6K4vXVciEf5tGc7lYDPu1iqIEJQJz14wUYGO1g%3D%3D') },
    { iframeSrc: this.sanitizer.bypassSecurityTrustResourceUrl('https://alpharck.e-emphasys.com:9543/ca/api/resources/MDS_GenericDocument-2950-1-LATEST?$token=lp5C4xXRYOsSIFVlwUcMAAk8zxJckddaCQnFcV4jUFQBRQHZ1wQsXBuEHpZ%2BS1SUht5%2FnhWE6I4N7%2FENBUmFnYag47kpZJi8ovJvx3yyNOhQFBKw3TK5NzK8vm8ZSe%2B%2F5MCThOsFH8uaKmMihcRnhuQCEU%2FA6tHt73ZzEdKTSHCwowfXhaIq%2FeGpIllrO%2BdoIgvTA7TAhCnhIoGpcvbr%2Bq%2BwNyPq7Uy38%2Fi%2BulYumg7S2KFQ6K4vXVciEf5tGc7lYDPu1iqIEJQJz14wUYGO1g%3D%3D') },
    
];

responsiveOptions: any[] = [
  {
      breakpoint: '1024px',
      numVisible: 5,
      numScroll: 5
  },
  {
      breakpoint: '768px',
      numVisible: 3,
      numScroll: 3
  },
  {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
  }
];
}
