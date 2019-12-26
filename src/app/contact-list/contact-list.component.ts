import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: any[] = [];

  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit() {
    this.contactService.getContacts().subscribe((data: any[]) => {
      console.log(data);
      this.contacts = data;
    })
  }

  gotoDetails(contactId: any) {
    this.router.navigate(['/contact/', contactId]);
  }

}
