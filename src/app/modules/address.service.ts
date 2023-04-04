import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
const endpoint = environment.API_ENOPOINT;

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  getProvincesAll(): Observable<any> {
    return this.http.get<any>(endpoint + '/provinces')
  }

  getDistrictsAll(): Observable<any> {
    return this.http.get<any>(endpoint + '/districts')
  }

  getSubdistrictAll(): Observable<any> {
    return this.http.get<any>(endpoint + '/subdistrict')
  }

  getsubdistrictsByZipCode(zipCode: any): Observable<any> {
    return this.http.get<any>(endpoint + '/subdistrict/by_zip_code?zipCode=' + zipCode)
  }

  getsubdistrictsByZipCode1(zipCode: any): Observable<any> {
    return this.http.get<any>(endpoint + '/subdistrict/zipCode?zipCode=' + zipCode)
  }

  getsubdistrictsBySdtId(subdistricts: any): Observable<any> {
    return this.http.get<any>(endpoint + '/subdistrict/sdtId?sdtId=' + subdistricts)
  }

}
