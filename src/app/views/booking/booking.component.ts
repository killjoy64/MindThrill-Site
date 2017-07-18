import {Component, SecurityContext, OnInit, AfterViewInit} from '@angular/core';
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'booking',
  templateUrl: './booking.component.html'
})
export class BookingComponent implements OnInit, AfterViewInit {

  safeHTML: any;
  safeURL: SafeUrl;

  constructor(private sanitizer: DomSanitizer) {
    // document.getElementById("fake-bookeo").remove();
    this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl("https://bookeo.com/widget.js?a=41562H6YTFF15C44DEC3AD");
    this.safeHTML = this.sanitizer.bypassSecurityTrustHtml('<script type="text/javascript" src="https://bookeo.com/widget.js?a=41562H6YTFF15C44DEC3AD"></script>');
  }

  ngOnInit(): void {
    // this.reloadScript();
  }

  ngAfterViewInit(): void {}

  reloadScript() {
    let docHeadObj = document.getElementById("bookeo");
    let dynamicScript = document.createElement("script");
    dynamicScript.type = "text/javascript";
    dynamicScript.src = "https://bookeo.com/widget.js?a=41562H6YTFF15C44DEC3AD";
    docHeadObj.appendChild(dynamicScript);
  }

  refreshPage() {
    location.reload();
  }

}
