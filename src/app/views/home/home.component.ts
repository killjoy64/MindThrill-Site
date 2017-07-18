import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  animations: [
    trigger('flyInFromLeft', [
      state('inactive', style({opacity: 0, transform: 'translateX(-100%)'})),
      state('activated', style({opacity: 1, transform: 'translateX(0)'})),
      transition('inactive => activated', [animate('0.6s ease-in-out')]),
      // transition('void => *', [style({opacity: 0, transform: 'translateX(-100%)'}), animate('0.75s 0.5s ease-in-out')])
    ]),
    trigger('flyInFromRight', [
      state('inactive', style({opacity: 0, transform: 'translateX(100%)'})),
      state('activated', style({opacity: 1, transform: 'translateX(0)'})),
      transition('inactive => activated', [animate('0.6s ease-in-out')])
    ]),
    trigger('growThenBounce', [
      state('inactive', style({transform: 'scale(0.0)'})),
      state('activated', style({transform: 'scale(1.0)'})),
      transition('inactive => activated', [animate('0.3s ease-in-out')])
    ]),
  ]
})
export class HomeComponent implements OnInit {

  animations: any[];
  animation_count: number;

  constructor() {
  }

  ngOnInit(): void {
    this.animations = [
      'inactive',
      'inactive',
      'inactive',
      'inactive',
      'inactive'
    ];
    this.animation_count = 0;
    this.startAnimation();
  }

  startAnimation() {
    /* We NEED this delay so that there is no immediate switch between the 'void' and 'activated' states. */
    setTimeout(() => {
      this.animations[this.animation_count] = 'activated';
      this.animation_count++;
    }, 500);
  }

  continueAnimation(e): void {
    if (e.fromState = 'inactive' && e.totalTime != 0) {
      this.animations[this.animation_count] = 'activated';
      this.animation_count++;
    }
  }

  getMobileOperatingSystem() {
    let userAgent = navigator.userAgent || navigator.vendor;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
      return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
      return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent)) {
      return "iOS";
    }

    return "unknown";
  }

}
