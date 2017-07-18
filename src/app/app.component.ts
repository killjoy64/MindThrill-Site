import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {

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
      }

      if (about != null && window.scrollY >= about.offsetTop && window.scrollY <= about.offsetTop + about.clientHeight) {
        this.resetActiveMenuItem();
        this.makeActiveMenuItem("about-btn");
      }

      if (rooms != null && window.scrollY >= rooms.offsetTop && window.scrollY <= rooms.offsetTop + rooms.clientHeight) {
        this.resetActiveMenuItem();
        this.makeActiveMenuItem("rooms-btn");
      }

      if (contact != null && window.scrollY >= contact.offsetTop && window.scrollY <= contact.offsetTop + contact.clientHeight) {
        this.resetActiveMenuItem();
        this.makeActiveMenuItem("contact-btn");
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
