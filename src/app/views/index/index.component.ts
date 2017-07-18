import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'index',
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {}

}
