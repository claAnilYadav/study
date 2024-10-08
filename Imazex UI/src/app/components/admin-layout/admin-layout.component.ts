
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild,Renderer2, ElementRef,  } from '@angular/core';
import { Router } from '@angular/router';
import {MediaMatcher} from '@angular/cdk/layout';
import { interval, Subscription } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit{

  @ViewChild('toggleConfiguration', { static: false }) toggleConfiguration?: ElementRef;
  @ViewChild('sidenav') sidenav?: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  isheadertype?: boolean;
  isHide: boolean = true;
  isHideconftrue: boolean = false;
  isHideconfig: boolean = true;
  isShow: boolean = false;
  arrowHide: boolean = false;
  isHideconf: boolean = false;
  isHidesec: boolean = false;
  ribbenvisible: boolean = false;
  isChild?: boolean;
  intervalId?: number;
  type?: boolean;
  bodyClass = 'admin-menu-open';
  leftdays?:any;
  compstatus: any = 0;
  // handle Sub Menu start
  public currentSubMenuIndex: number = 0;
  previousMenu: string= 'dashboard';
  subMenu: any[] = [
    { path: "dashboard", title: "My Dashboard", icon: "category", previousMenuVisted: false },
    { path: "client-dashboard", title: "Client", icon: "category", previousMenuVisted: false },
    { path: "package", title: "Package", icon: "category", previousMenuVisted: false },
    { path: "invoice", title: "invoice", icon: "category", previousMenuVisted: false },
    { path: "report", title: "Reports", icon: "category", previousMenuVisted: false },
    { path: "users", title: "Users", icon: "category", previousMenuVisted: false },
    
  ];
  // handle Sub Menu start

  constructor(private renderer: Renderer2, private elementRef: ElementRef,private router:Router) {
    this.type = true;   
  }

  public ngOnInit(): void {}
  
  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
}
