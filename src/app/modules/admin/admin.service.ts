import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_ENOPOINT = environment.API_ENOPOINT;

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getbooking(): Observable<any> {
    return this.http.get(API_ENOPOINT.concat('/booking'))
  }

}
