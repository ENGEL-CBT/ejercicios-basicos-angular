import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejer8',
  templateUrl: './ejer8.component.html'
})
export class Ejer8Component {  

  articles: any
  productos: any[] = []

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>("https://dummyjson.com/products")
      .subscribe(
        result => {
          this.articles = result;
          this.productos =  this.articles.products
          console.log(this.articles.products);          
        }
      );
  }
  
}
