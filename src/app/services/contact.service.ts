import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { Contact } from '../models/contact.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http: HttpClient
  ) { }

  sendContact(contact: Contact): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json'); 
    const body = JSON.stringify(contact);
    console.log("headers: ", headers); 
    console.log("contact: ", contact);
    console.log("body: ", body);
    //return this.http.post(environment.apiUrl + '/contact', contact)
    return this.http.post(environment.apiUrl + '/contact/contactdetails', body, { 'headers': headers })
      .pipe(
        
        retry(1)
      ); 
  }

}
