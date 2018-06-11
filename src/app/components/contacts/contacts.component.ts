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
  
  private showForm( option: string ){
    switch (option) {
      case 'translation':
        this.formState = 'translation'
        break;
      case 'general':
        this.formState = 'general'
        break;
      default:
        this.formState = 'lessons'
        break;
    }
  }
}
