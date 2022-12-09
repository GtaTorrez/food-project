import { Component, OnInit } from '@angular/core';
import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  foods: food[] = [];
  enviroment: string = "";

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get<food[]>(`${environment.API_URL}/foods`).subscribe(
      (response: any) => {
        console.log('response received');
        this.foods = response.food;
        this.enviroment = response.enviroment;
        console.log(this.foods);
      },
      (error) => {
        console.error('Request failed with error');
      },
      () => {
        console.log('Request completed');
      }
    );
  }
}
interface food {
  name: string;
  image: string;
}
