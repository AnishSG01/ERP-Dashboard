import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ViewAttachementsService } from '../Services/view-attachements.service';

@Component({
  selector: 'app-view-attachements-component',
  templateUrl: './view-attachements-component.component.html',
  styleUrl: './view-attachements-component.component.scss'
})
export class ViewAttachementsComponentComponent {

  pdfSrc: string = 'https://alpharck.e-emphasys.com:9543/ca/api/resources/MDS_GenericDocument-2950-1-LATEST?$token=lp5C4xXRYOsSIFVlwUcMAAk8zxJckddaCQnFcV4jUFSGK0beygNSzi7f0Wf5dpCDht5%2FnhWE6I4N7%2FENBUmFnYag47kpZJi8ovJvx3yyNOhQFBKw3TK5NzK8vm8ZSe%2B%2F5MCThOsFH8uaKmMihcRnhuQCEU%2FA6tHt73ZzEdKTSHCwowfXhaIq%2FeGpIllrO%2BdoIgvTA7TAhCnhIoGpcvbr%2Bq%2BwNyPq7Uy38%2Fi%2BulYumg7S2KFQ6K4vXVciEf5tGc7lYDPu1iqIEJQJz14wUYGO1g%3D%3D'; // URL of the PDF
  pdfData: ArrayBuffer | null = null; // PDF data

  constructor (private sanitizer: DomSanitizer) {
    // Somewhere in your code where you set the PDF URL
this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://alpharck.e-emphasys.com:9543/ca/api/resources/MDS_GenericDocument-2950-1-LATEST?$token=lp5C4xXRYOsSIFVlwUcMAAk8zxJckddaCQnFcV4jUFSGK0beygNSzi7f0Wf5dpCDht5%2FnhWE6I4N7%2FENBUmFnYag47kpZJi8ovJvx3yyNOhQFBKw3TK5NzK8vm8ZSe%2B%2F5MCThOsFH8uaKmMihcRnhuQCEU%2FA6tHt73ZzEdKTSHCwowfXhaIq%2FeGpIllrO%2BdoIgvTA7TAhCnhIoGpcvbr%2Bq%2BwNyPq7Uy38%2Fi%2BulYumg7S2KFQ6K4vXVciEf5tGc7lYDPu1iqIEJQJz14wUYGO1g%3D%3D');
  }


  // ngOnInit (): void {
  //   this.getAttachements()
  // }

  // getAttachementsOutput !: string;


  // getAttachements () {
  //   this._viewAttachementsService.getRecentContracts().subscribe({
  //     next: res => {
  //       this.getAttachementsOutput = res;
  //       console.log(this.getAttachementsOutput);
  //     },
  //     error: console.log
  //   })
  // }


  pdfUrl !: SafeResourceUrl;

 

  iframes: any[] = [
    { iframeSrc: this.sanitizer.bypassSecurityTrustResourceUrl('https://alpharck.e-emphasys.com:9543/ca/api/resources/MDS_GenericDocument-2950-1-LATEST?$token=lp5C4xXRYOsSIFVlwUcMAAk8zxJckddaCQnFcV4jUFSGK0beygNSzi7f0Wf5dpCDht5%2FnhWE6I4N7%2FENBUmFnYag47kpZJi8ovJvx3yyNOhQFBKw3TK5NzK8vm8ZSe%2B%2F5MCThOsFH8uaKmMihcRnhuQCEU%2FA6tHt73ZzEdKTSHCwowfXhaIq%2FeGpIllrO%2BdoIgvTA7TAhCnhIoGpcvbr%2Bq%2BwNyPq7Uy38%2Fi%2BulYumg7S2KFQ6K4vXVciEf5tGc7lYDPu1iqIEJQJz14wUYGO1g%3D%3D') },
    { iframeSrc: this.sanitizer.bypassSecurityTrustResourceUrl('https://alpharck.e-emphasys.com:9543/ca/api/resources/MDS_GenericDocument-2950-1-LATEST?$token=lp5C4xXRYOsSIFVlwUcMAAk8zxJckddaCQnFcV4jUFSGK0beygNSzi7f0Wf5dpCDht5%2FnhWE6I4N7%2FENBUmFnYag47kpZJi8ovJvx3yyNOhQFBKw3TK5NzK8vm8ZSe%2B%2F5MCThOsFH8uaKmMihcRnhuQCEU%2FA6tHt73ZzEdKTSHCwowfXhaIq%2FeGpIllrO%2BdoIgvTA7TAhCnhIoGpcvbr%2Bq%2BwNyPq7Uy38%2Fi%2BulYumg7S2KFQ6K4vXVciEf5tGc7lYDPu1iqIEJQJz14wUYGO1g%3D%3D') },
    { iframeSrc: this.sanitizer.bypassSecurityTrustResourceUrl('https://alpharck.e-emphasys.com:9543/ca/api/resources/MDS_GenericDocument-2950-1-LATEST?$token=lp5C4xXRYOsSIFVlwUcMAAk8zxJckddaCQnFcV4jUFSGK0beygNSzi7f0Wf5dpCDht5%2FnhWE6I4N7%2FENBUmFnYag47kpZJi8ovJvx3yyNOhQFBKw3TK5NzK8vm8ZSe%2B%2F5MCThOsFH8uaKmMihcRnhuQCEU%2FA6tHt73ZzEdKTSHCwowfXhaIq%2FeGpIllrO%2BdoIgvTA7TAhCnhIoGpcvbr%2Bq%2BwNyPq7Uy38%2Fi%2BulYumg7S2KFQ6K4vXVciEf5tGc7lYDPu1iqIEJQJz14wUYGO1g%3D%3D') },
    { iframeSrc: this.sanitizer.bypassSecurityTrustResourceUrl('https://alpharck.e-emphasys.com:9543/ca/api/resources/MDS_GenericDocument-2950-1-LATEST?$token=lp5C4xXRYOsSIFVlwUcMAAk8zxJckddaCQnFcV4jUFSGK0beygNSzi7f0Wf5dpCDht5%2FnhWE6I4N7%2FENBUmFnYag47kpZJi8ovJvx3yyNOhQFBKw3TK5NzK8vm8ZSe%2B%2F5MCThOsFH8uaKmMihcRnhuQCEU%2FA6tHt73ZzEdKTSHCwowfXhaIq%2FeGpIllrO%2BdoIgvTA7TAhCnhIoGpcvbr%2Bq%2BwNyPq7Uy38%2Fi%2BulYumg7S2KFQ6K4vXVciEf5tGc7lYDPu1iqIEJQJz14wUYGO1g%3D%3D') },
    { iframeSrc: this.sanitizer.bypassSecurityTrustResourceUrl('https://alpharck.e-emphasys.com:9543/ca/api/resources/MDS_GenericDocument-2950-1-LATEST?$token=lp5C4xXRYOsSIFVlwUcMAAk8zxJckddaCQnFcV4jUFSGK0beygNSzi7f0Wf5dpCDht5%2FnhWE6I4N7%2FENBUmFnYag47kpZJi8ovJvx3yyNOhQFBKw3TK5NzK8vm8ZSe%2B%2F5MCThOsFH8uaKmMihcRnhuQCEU%2FA6tHt73ZzEdKTSHCwowfXhaIq%2FeGpIllrO%2BdoIgvTA7TAhCnhIoGpcvbr%2Bq%2BwNyPq7Uy38%2Fi%2BulYumg7S2KFQ6K4vXVciEf5tGc7lYDPu1iqIEJQJz14wUYGO1g%3D%3D') },
    { iframeSrc: this.sanitizer.bypassSecurityTrustResourceUrl('https://alpharck.e-emphasys.com:9543/ca/api/resources/MDS_GenericDocument-2950-1-LATEST?$token=lp5C4xXRYOsSIFVlwUcMAAk8zxJckddaCQnFcV4jUFSGK0beygNSzi7f0Wf5dpCDht5%2FnhWE6I4N7%2FENBUmFnYag47kpZJi8ovJvx3yyNOhQFBKw3TK5NzK8vm8ZSe%2B%2F5MCThOsFH8uaKmMihcRnhuQCEU%2FA6tHt73ZzEdKTSHCwowfXhaIq%2FeGpIllrO%2BdoIgvTA7TAhCnhIoGpcvbr%2Bq%2BwNyPq7Uy38%2Fi%2BulYumg7S2KFQ6K4vXVciEf5tGc7lYDPu1iqIEJQJz14wUYGO1g%3D%3D') },
    
];

responsiveOptions: any[] = [
  {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
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


// slideConfig = {
//   slidesToShow: 4,
//   slidesToScroll: 4,
//   autoplay: true,
//   autoplaySpeed: 5000,
//   pauseOnHover: true,
//   infinite: true,
//   responsive: [
//     {
//       breakpoint: 1400,
//       settings: {
//         arrows: true,
//         infinite: true,
//         slidesToShow: 3, // Corrected property name
//         slidesToScroll: 3 // Corrected property name
//       }
//     },
//     {
//       breakpoint: 1190,
//       settings: {
//         arrows: true,
//         infinite: true,
//         slidesToShow: 2, // Corrected property name
//         slidesToScroll: 2 // Corrected property name
//       }
//     },
//     {
//       breakpoint: 700,
//       settings: {
//         arrows: true,
//         infinite: true,
//         slidesToShow: 1, // Corrected property name
//         slidesToScroll: 1 // Corrected property name
//       }
//     }
//   ]
// };
}
