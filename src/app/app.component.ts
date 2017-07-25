import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private meta: Meta, private title: Title) {}

  ngOnInit(): void {

    /*
     <meta name="description" content="Escape in 60 minutes or less at Mind Thrill escape rooms located in the heart of Mackinaw City. We offer unique and fun experiences for anyone to enjoy.">
     <meta name="keywords" content="mind thrill,mind thrill escape rooms,escape rooms,mackinaw city,mackinaw escape,fun things to do,challenging, group activity,date night,corporate team building">
     */

    this.title.setTitle('Home | Mind Thrill Escape Rooms');
    this.meta.updateTag({name: 'keywords', content: 'mind thrill,mind thrill escape rooms,escape rooms,mackinaw city,mackinaw city escape room,mackinaw escape,fun things to do,challenging,group activity,date night,corporate team building, home page, index page, main site'});

    // let lastPath: string = window.location.pathname;
    // setInterval((i) => {
    //   let bookeo = document.getElementById("bookeo");
    //   if (bookeo) {
    //     document.getElementById("bookeo").style.display = 'none';
    //     clearInterval(i);
    //   }
    // }, 100);

    // document.getElementById("bookeo").style.display = 'none';

    document.addEventListener("scroll", (e) => {
      let home = document.getElementById("home");
      let about = document.getElementById("about");
      let rooms = document.getElementById("rooms");
      let contact = document.getElementById("faq-contact");

      if (window.scrollY >= (0.75 * window.innerHeight)) {
        document.getElementsByClassName("navbar-default")[0].classList.add("navbar-reduced");
      } else {
        document.getElementsByClassName("navbar-default")[0].classList.remove("navbar-reduced");
      }

      if (home != null && window.scrollY < home.clientHeight) {
        this.resetActiveMenuItem();
        this.makeActiveMenuItem("home-btn");
        this.title.setTitle('Home | Mind Thrill Escape Rooms');
        this.meta.updateTag({name: 'keywords', content: 'mind thrill,mind thrill escape rooms,escape rooms,mackinaw city,mackinaw escape,fun things to do,challenging, group activity,date night,corporate team building, home page, index page, main site'});
      }

      if (about != null && window.scrollY >= about.offsetTop && window.scrollY <= about.offsetTop + about.clientHeight) {
        this.resetActiveMenuItem();
        this.makeActiveMenuItem("about-btn");
        this.title.setTitle('About | Mind Thrill Escape Rooms');
        this.meta.updateTag({name: 'keywords', content: 'mind thrill,mind thrill escape rooms,escape rooms,mackinaw city,mackinaw escape,fun things to do,challenging, group activity,date night,corporate team building,about,what is it'});
      }

      if (rooms != null && window.scrollY >= rooms.offsetTop && window.scrollY <= rooms.offsetTop + rooms.clientHeight) {
        this.resetActiveMenuItem();
        this.makeActiveMenuItem("rooms-btn");
        this.title.setTitle('Rooms | Mind Thrill Escape Rooms');
        this.meta.updateTag({name: 'keywords', content: 'mind thrill,mind thrill escape rooms,escape rooms,mackinaw city,mackinaw escape,fun things to do,challenging, group activity,date night,corporate team building,rooms,options'});
      }

      if (contact != null && window.scrollY >= contact.offsetTop && window.scrollY <= contact.offsetTop + contact.clientHeight) {
        this.resetActiveMenuItem();
        this.makeActiveMenuItem("contact-btn");
        this.title.setTitle('Contact Us | Mind Thrill Escape Rooms');
        this.meta.updateTag({name: 'keywords', content: 'mind thrill,mind thrill escape rooms,escape rooms,mackinaw city,mackinaw escape,fun things to do,challenging, group activity,date night,corporate team building,contact,information'});
      }

    });

  }

  resetActiveMenuItem() {
    let menu_items = document.getElementsByClassName("toggleable");
    for (let i = 0; i < menu_items.length; i++) {
      menu_items[i].querySelector("a").classList.remove("active");
    }
  }

  makeActiveMenuItem(menu_item) {
    document.getElementById(menu_item).querySelector("a").classList.add("active");
  }

}
