import { Component} from '@angular/core';

@Component({
  selector: 'app-count-widgets',
  templateUrl: './count-widgets.component.html',
  styleUrls: ['./count-widgets.component.scss']
})
export class CountWidgetsComponent {
  slides = [
    {
      name: 'Active Contracts',
      count: '2644',
      totalCount: '5000',
      dscr: 'This Widget shows the count of Active contracts',
      threshold:false
    },
    {
      name: 'Open Contracts',
      count: '2644',
      totalCount: '5000',
      dscr: 'This Widget shows the count of Open contracts',
      threshold:false
    },
    {
      name: 'Closed Contracts',
      count: '4222',
      totalCount: '5000',
      dscr: 'This Widget shows the count of Closed contracts',
      threshold:true
    },
    {
      name: 'Reopen Contracts',
      count: '2644',
      totalCount: '5000',
      dscr: 'This Widget shows the count of Reopen contracts',
      threshold:false
    },
    {
      name: 'Cancelled Contracts',
      count: '2644',
      totalCount: '5000',
      dscr: 'This Widget shows the count of Cancelled contracts',
      threshold:false
    },
    {
      name: 'Submitted Contracts',
      count: '4668',
      totalCount: '5000',
      dscr: 'This Widget shows the count of Submitted contracts',
      threshold:true
    },
    {
      name: 'Approved Contracts',
      count: '2644',
      totalCount: '5000',
      dscr: 'This Widget shows the count of Approved contracts',
      threshold:false
    },
    {
      name: 'Declined Contracts',
      count: '2644',
      totalCount: '5000',
      dscr: 'This Widget shows the count of Declined contracts',
      threshold:false
    },
    {
      name: 'Blocked Contracts',
      count: '4000',
      totalCount: '5000',
      dscr: 'This Widget shows the count of Blocked contracts',
      threshold:true
    }
  ];

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          arrows: true,
          infinite: true,
          slidesToShow: 3, // Corrected property name
          slidesToScroll: 3 // Corrected property name
        }
      },
      {
        breakpoint: 1190,
        settings: {
          arrows: true,
          infinite: true,
          slidesToShow: 2, // Corrected property name
          slidesToScroll: 2 // Corrected property name
        }
      },
      {
        breakpoint: 700,
        settings: {
          arrows: true,
          infinite: true,
          slidesToShow: 1, // Corrected property name
          slidesToScroll: 1 // Corrected property name
        }
      }
    ]
  };

  constructor () {}
}
