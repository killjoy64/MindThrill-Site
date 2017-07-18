import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'faq',
  templateUrl: './faq.component.html',
  animations: [
    trigger('flyInFromTop', [
      state('inactive', style({opacity: 0, transform: 'translateY(25%)'})),
      state('activated', style({opacity: 1, transform: 'translateY(0)'})),
      transition('inactive => activated', [animate('0.6s ease-in-out')])
    ]),
    trigger('fadeInBackground', [
      state('inactive', style({opacity: 0})),
      state('activated', style({opacity: 1})),
      transition('inactive => activated', [animate('0.6s ease-in-out')])
    ])
  ]
})
export class FAQComponent implements OnInit {

  animations: any[];
  animation_count: number;
  animation_started: boolean;

  constructor() {}

  ngOnInit(): void {
    this.animations = [
      'inactive',
      'inactive'
    ];
    this.animation_count = 0;

    let element = document.getElementById("faq");

    // document.addEventListener("scroll", (e) => {
    //   console.log(window.scrollY  + " | " + element.scrollTop);
    //   if (window.scrollY > (element.offsetTop) && window.scrollY != 0 && element.offsetTop != 0) {
    //     if (!this.animation_started) {
    //       this.animation_started = true;
    //       this.startAnimation();
    //     }
    //   }
    // });
    this.startAnimation();
  }

  startAnimation() {
    /* We NEED this delay so that there is no immediate switch between the 'void' and 'activated' states. */
    setTimeout(() => {
      this.animations[this.animation_count] = 'activated';
      this.animation_count++;
    }, 125);
  }

  continueAnimations(e): void {
    if (e.fromState = 'inactive' && e.totalTime != 0) {
      this.animations[this.animation_count] = 'activated';
      this.animation_count++;
    }
  }

}
