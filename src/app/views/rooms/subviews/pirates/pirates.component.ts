import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'pirates',
  templateUrl: './pirates.component.html',
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
export class RoomsPirateComponent implements OnInit {

  animations: any[];
  animation_count: number;
  animation_started: boolean;

  constructor(private meta: Meta, private title: Title) {
    window.scrollTo(0, 0);

    this.title.setTitle('Pirate\'s Cove | Mind Thrill Escape Rooms');
    this.meta.updateTag({name: 'keywords', content: 'mind thrill,mind thrill escape rooms,escape rooms,mackinaw city,mackinaw escape,fun things to do,challenging, group activity,date night,corporate team building,pirate\'s cove,all ages,family'});
  }

  ngOnInit(): void {
    this.animations = [
      'inactive',
      'inactive'
    ];
    this.animation_count = 0;
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
