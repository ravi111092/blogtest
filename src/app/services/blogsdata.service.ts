import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BlogsdataService {

  constructor(private http:HttpClient) { }

  getBlog(){
    return this.http.get('https://docully.com/blog/api/blogs')
  }
}
