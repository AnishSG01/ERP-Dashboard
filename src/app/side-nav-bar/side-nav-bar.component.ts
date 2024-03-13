import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, HostListener, OnInit, Output, ViewChild, ElementRef } from '@angular/core';

interface sideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrl: './side-nav-bar.component.scss',
  animations:[
    trigger('rotate',[
      transition(':enter',[
        animate('500ms',
        keyframes([
          style({transform: 'rotate(0deg)', offset: '0'}),
          style({transform: 'rotate(1turn)', offset: '1'}),
        ]))
      ])
    ])
  ]
})
export class SideNavBarComponent implements OnInit {

  @ViewChild('fileInput') fileInput !: ElementRef;

  openFileExplorer() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    console.log(file); // You can do whatever you want with the selected file
  }


  @Output() onToggleSideNav: EventEmitter<sideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;

  @HostListener('window:resize', ['$event'])
  onResize(event:any){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768){
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed:this.collapsed, screenWidth:this.screenWidth});
    }
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  toggleCollapse():void{
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed:this.collapsed, screenWidth:this.screenWidth});
  }

  closeSideNav():void{
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed:this.collapsed, screenWidth:this.screenWidth});
  }
}
