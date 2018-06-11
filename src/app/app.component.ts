import { element } from 'protractor';
import { Component, ViewChild, Renderer2, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app';
  @ViewChild('buttons') button;
  open = false;
  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  mouseout() {
    if (this.open) {
      this.toggle();
    }
  }

  toggle() {
    this.open = !this.open;
    if (this.open) {
      this.appendClasses();
    } else {
      this.removeClasses();
    }
  }

  removeClasses() {
    this.renderer.removeClass(this.button.nativeElement, 'step-1');
    this.renderer.removeClass(this.button.nativeElement, 'step-2');
    this.renderer.removeClass(this.button.nativeElement, 'step-3');
  }

  appendClasses() {
    for (let i = 1; i < 4; i++) {
      setTimeout(() => {
        this.removeClasses();
        this.renderer.addClass(this.button.nativeElement, 'step-' + i);
      }, i * 50);
    }
  }
}
