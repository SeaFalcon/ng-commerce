import { DOCUMENT } from "@angular/platform-browser";
import { AfterViewInit, Component, ElementRef, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'fc-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  didScroll = false;
  changeHeaderOn = 200;
  navbar;

  constructor(private el: ElementRef, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.navbar = this.el.nativeElement.querySelector('.navbar-default');
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (!this.didScroll) {
      this.didScroll = true;
      setTimeout(() => {
        const sy = this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
        if (sy >= this.changeHeaderOn) {
          this.navbar.classList.add('navbar-scroll');
          this.navbar.classList.add('navbar-fixed-top');
        }
        else {
          this.navbar.classList.remove('navbar-scroll');
          this.navbar.classList.remove('navbar-fixed-top');
        }
        this.didScroll = false;
      }, 250);
    }
  }

}
