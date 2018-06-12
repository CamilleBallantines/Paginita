import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  public formState : string = 'lessons'; 
 

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
  
  showForm(option) {
    this.formState = option
  }
}
