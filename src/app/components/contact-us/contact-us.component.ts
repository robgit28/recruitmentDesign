import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../app/services/contact.service';
import { Contact } from '../../../app/models/contact.model';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  public contactForm: any;
  contact: Contact = new Contact();
  loading = true;
  messageSuccessMessage: boolean = false; 
  messageFailureMessage: boolean = false; 

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService, 
    //private toastr: ToastrService
  ) 
    { }

  ngOnInit() { 
    this.loading = false;

    this.contactForm = this.formBuilder.group({
      firstName: ['', { validators: [Validators.required, Validators.minLength(2), Validators.maxLength(30)], updateOn: 'blur' }],
      lastName: ['', { validators: [Validators.required, Validators.minLength(2), Validators.maxLength(30)], updateOn: 'blur' }],
      email: ['', { validators: [Validators.required, Validators.email], updateOn: 'blur' }],
      phone: ['', { validators: [Validators.required, Validators.minLength(10)], updateOn: 'blur' }],
      subject: ['', { validators: [Validators.required, Validators.minLength(2)], updateOn: 'blur' }],
      message: ['', { validators: [Validators.required, Validators.minLength(2), Validators.maxLength(500)], updateOn: 'blur' }],
    });
    console.log(this.firstName.value); 
  }

  get firstName() {
    return this.contactForm.get('firstName');
  }

  get lastName() {
    return this.contactForm.get('lastName');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get phone() {
    return this.contactForm.get('phone');
  }

  get subject() {
    return this.contactForm.get('subject');
  }

  get message() {
    return this.contactForm.get('message');
  }

  onSubmit() {
    this.contactForm.markAllAsTouched(true);
    console.log(this.contactForm.value);

    this.loading = true;
    this.contactService.sendContact(this.contactForm.value).subscribe(
      () => {
        // success 
        this.loading = false;
        this.contact = new Contact()
        this.contactForm.reset();
        window.scrollTo(0, 0);
        this.messageSuccessMessage = true; 
        setTimeout(() => this.messageSuccessMessage = false, 3000);
      }, 
      () => {
        // error
        console.log("error"); 
        this.loading = false;
        this.messageFailureMessage = true; 
      }
    ); 
  }

  dismissMessage() {
    this.messageSuccessMessage = false;
    this.messageFailureMessage = false;
  }

}
