import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  message = '';
  user = {
    contactName : '',
    contactNumber : '',
    contactEmail : '',
    contactMessage : ''
  }
  constructor(private dataService : DataService) { }

  ngOnInit() {
  }

  contact(){
    let userData = this.user;
    this.dataService.contact(userData).subscribe(
      data => {
        if(data.send){
            this.message = data.Message;
        }
        console.log(data)
      },
      err => {
        console.log(err)
      }
    )
  }

}
