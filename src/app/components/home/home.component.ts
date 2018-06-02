import { Component, OnInit, Inject, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  navIsFixed: boolean;

  constructor() { }

ngOnInit(): void {

}

scrollToElement(element){
  let el = document.getElementById(element);
      el.scrollIntoView({behavior: "smooth", block: 'start'})
}


}
