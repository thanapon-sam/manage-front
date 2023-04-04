import { HttpHeaders, HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
const API_ENOPOINT = environment.API_ENOPOINT;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  // Table
  // getAllTable(): Observable<any> {
  //   return this.http.get(API_ENOPOINT.concat('/table'));
  // }

  // Customer
  getUserByUserId(userId: any): Observable<any> {
    return this.http.get<any>(API_ENOPOINT + '/user/userId?userId=' + userId)
  }

  updateUser(updateData: any): Observable<any> {
    return this.http.put<any>(API_ENOPOINT + '/user/update/' + updateData.userId, JSON.stringify(updateData), httpOptions)
  }


}