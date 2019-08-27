import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  host:string = "http://localhost:8000/api/login";

  constructor(private http: HttpClient ) { }

  login(data) {
    return this.http.post(this.host, data,{observe: 'response'});
  }

  
}
