import { HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
const API_ENOPOINT = environment.API_ENOPOINT;

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  //user
  getAllUser(): Observable<any> {
    return this.http.get(API_ENOPOINT.concat('/user'));
  }
  updateUser(updateData: any): Observable<any> {
    return this.http.put<any>(API_ENOPOINT + '/user/update/' + updateData.userId, JSON.stringify(updateData), httpOptions)
  }
  deleteUserByUserId(userId: any): Observable<any> {
    return this.http.delete(API_ENOPOINT + '/user/'.concat(userId),
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        responseType: 'text'
      }
    );
  }


  // Booking
  // getBooking(): Observable<any> {
  //   return this.http.get(API_ENOPOINT.concat('/booking'));
  // }

  // getBookingBybookStatus(bookStatus: any): Observable<any> {
  //   return this.http.get<any>(API_ENOPOINT + '/bookings/by-status?bookStatus=' + bookStatus)
  // }

  // getBookingByFoods(billId: any): Observable<any> {
  //   return this.http.get<any>(API_ENOPOINT + '/bill-detail/by-bill?billId=' + billId)
  // }

  // deleteBooking(bookId: any): Observable<any> {
  //   return this.http.delete(API_ENOPOINT.concat('/booking/' + bookId))
  // }

  // updateBookingStatusByBookId(bookId: any, bookStatus: any): Observable<any> {
  //   return this.http.put<any>(API_ENOPOINT + '/booking/update-book-status/' + bookId + '?bookStatus=' + bookStatus, httpOptions)
  // }
  // updateBookingNewStatus(bookId: any, bookSlip: any, bookStatus: any): Observable<any> {
  //   return this.http.put<any>(API_ENOPOINT + '/booking/update-new-book-status/' + bookId + '?bookSlip=' + bookSlip + '&bookStatus=' + bookStatus, httpOptions)
  // }

  // updateBookingStatus(updateBooking: any): Observable<any> {
  //   return this.http.put<any>(API_ENOPOINT + '/booking/updatesSlip', JSON.stringify(updateBooking), httpOptions)
  // }




  getProvincesAll(): Observable<any> {
    return this.http.get<any>(API_ENOPOINT + '/provinces')
  }

  getDistrictsAll(): Observable<any> {
    return this.http.get<any>(API_ENOPOINT + '/districts')
  }

  getSubdistrictAll(): Observable<any> {
    return this.http.get<any>(API_ENOPOINT + '/subdistrict')
  }

  getsubdistrictsByZipCode(zipCode: any): Observable<any> {
    return this.http.get<any>(API_ENOPOINT + '/subdistrict/by_zip_code?zipCode=' + zipCode)
  }

  getsubdistrictsByZipCode1(zipCode: any): Observable<any> {
    return this.http.get<any>(API_ENOPOINT + '/subdistrict/zipCode?zipCode=' + zipCode)
  }

  getsubdistrictsBySdtId(subdistricts: any): Observable<any> {
    return this.http.get<any>(API_ENOPOINT + '/subdistrict/sdtId?sdtId=' + subdistricts)
  }

  // ******** upload ************
  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${API_ENOPOINT}/uploads`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${API_ENOPOINT}/files`);
  }


}

