import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '@prisma/client'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private API_URL: string = "http://localhost:3333/api"

  constructor(public http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.API_URL}/products`);
  }
}
