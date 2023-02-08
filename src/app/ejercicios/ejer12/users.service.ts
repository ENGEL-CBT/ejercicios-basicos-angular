import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private http: HttpClient) { }

  retornar() {
    return this.http.get<any>("https://dummyjson.com/users")
  } 
  
}
