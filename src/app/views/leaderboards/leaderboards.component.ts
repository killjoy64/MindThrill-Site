import { Component } from '@angular/core';
import { LeaderboardService } from "../../providers/leaderboard-provier";
import { Title, Meta } from "@angular/platform-browser";

@Component({
    selector: 'leaderboards',
    templateUrl: './leaderboards.component.html'
})
export class LeaderboardsComponent {

    public leaderboards: any;
    private current_tab: string;

    constructor(private leaderboards_service: LeaderboardService, private meta: Meta, private title: Title) {
        this.leaderboards_service.getLeaderboards().subscribe((data) => {

            for (let i = 0; i < data.rooms.length; i++) {
                data.rooms[i].id = i;
            }

            if (data.rooms[0].name == "Test") {
                data.rooms.shift();
            }

            this.leaderboards = data;

            this.selectTab(this.leaderboards.rooms[0].name);
            console.log(data);
        }, (err) => {
            console.log(err);
        });

        this.title.setTitle('Leaderboards | Mind Thrill Escape Rooms');
        this.meta.updateTag({name: 'keywords', content: 'mind thrill,mind thrill escape rooms,escape rooms,mackinaw city,mackinaw escape,fun things to do,challenging,group activity,date night,corporate team building,leaderboards,top times'});
    }

    selectTab(tab: string) {
        this.current_tab = tab;
    }

    isSelected(tab: string) {
        return this.current_tab == tab;
    }

    getDateFormat(date_string) {
        return new Date(date_string).toDateString();
    }

    getTimeString(seconds_left) {
        let min = Math.trunc(seconds_left / 60);
        let sec = seconds_left - (min * 60);
        return min + "m " + sec + "s";
    }

}
