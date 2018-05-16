import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'fort',
    templateUrl: './fort.component.html',
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
export class RoomsFortComponent implements OnInit {

    animations: any[];
    animation_count: number;
    animation_started: boolean;

    constructor(private meta: Meta, private title: Title) {
        window.scrollTo(0, 0);

        this.title.setTitle('Fort Escape | Mind Thrill Escape Rooms');
        this.meta.updateTag({name: 'keywords', content: 'all,ages,family,large,group,pirates,cove,theme,1,hour,adventure,activity,mackinaw,city,escape,room,game'});
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
