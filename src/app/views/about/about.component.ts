import {Component, OnInit} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
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
    trigger('flyInFromTop', [
      state('inactive', style({opacity: 0, transform: 'translateY(25%)'})),
      state('activated', style({opacity: 1, transform: 'translateY(0)'})),
      transition('inactive => activated', [animate('0.6s ease-in-out')])
    ]),
    trigger('flyInFromBottom', [
      state('inactive', style({opacity: 0, transform: 'translateY(-50%)'})),
      state('activated', style({opacity: 1, transform: 'translateY(0)'})),
      transition('inactive => activated', [animate('0.6s ease-in-out')])
    ]),
    trigger('fadeIn', [
      state('inactive', style({opacity: 0})),
      state('activated', style({opacity: 1})),
      transition('inactive => activated', [animate('0.6s ease-in-out')])
    ]),
    trigger('growThenBounce', [
      state('inactive', style({transform: 'scale(0.0)'})),
      state('activated', style({transform: 'scale(1.0)'})),
      transition('inactive => activated', [animate('0.3s ease-in-out')])
    ]),
  ]
})
export class AboutComponent implements OnInit {

  option_one: boolean;
  option_two: boolean;

  animations: any[];
  animation_count: number;
  animation_started: boolean;

  constructor() {
    this.option_one = false;
    this.option_two = true;
  }

  ngOnInit(): void {
    this.animations = [
      'inactive',
      'inactive',
      'inactive',
      'inactive',
      'inactive',
      'inactive',
      'inactive',
      'inactive',
      'inactive',
      'inactive',
      'inactive',
      'inactive',
      'inactive',
      'inactive',
      'inactive'
    ];
    this.animation_count = 0;

    let element = document.getElementById("about");

    document.addEventListener("scroll", (e) => {
      if (window.scrollY > (0.5 * window.innerHeight) && (window.scrollY < element.offsetTop + element.offsetHeight)) {
        if (!this.animation_started) {
          this.animation_started = true;
          this.startAnimation();
        }
      }
    });

  }

  startAnimation() {
    /* We NEED this delay so that there is no immediate switch between the 'void' and 'activated' states. */
    setTimeout(() => {
      this.animations[this.animation_count] = 'activated';
      this.animation_count++;
    }, 125);
  }

  continueAnimation(e): void {
    if (e.fromState = 'inactive' && e.totalTime != 0) {
      this.animations[this.animation_count] = 'activated';
      this.animation_count++;
    }
  }

}
