import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
const API_ENOPOINT = environment.API_ENOPOINT;

@Injectable({
  providedIn: 'root'
})
export class AdminBookingService {

  constructor(private http: HttpClient) { }

  updateBooking(updateBooking: any): Observable<any> {
    console.log(updateBooking);
    let bookId = updateBooking.bookId
    console.log(bookId)
    return this.http.put<any>(API_ENOPOINT + '/booking/update' ,JSON.stringify(updateBooking),httpOptions)
    // return this.http.put<any>(API_ENOPOINT + '..' ,JSON.stringify(updateBooking),httpOptions)

  }
}
