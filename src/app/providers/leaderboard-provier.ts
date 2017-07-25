/**
 * Created by Kyle Flynn on 7/25/2017.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LeaderboardService {

    constructor(private http: Http) {}

    public getLeaderboards() {
        return this.http.get("https://escaperoommaster.com/leaderboards/api/6d2752ac-6736-4fc1-82c1-d42625c97a30/top/").map(res => res.json());
    }

}
