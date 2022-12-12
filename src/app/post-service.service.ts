import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { promises } from 'fs';


@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  url = 'https://adamix.net/defensa_civil/';
  constructor(private http: HttpClient) { }

  getData_byGET() {

    const header = new HttpHeaders().set('Access-Control-Allow-Origin', '*')

      .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT')

      .set('Accept', 'application/json')

      .set('Content-Type', 'application/json; charset=utf-8')
      ;

    return this.http.get(this.url + 'post');

  }
}
