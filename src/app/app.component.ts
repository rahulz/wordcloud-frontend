import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  input = "";
  image = "";

  constructor(private http: HttpClient) {
  }

  gen() {
    this.http.post("http://localhost:5000/get_cloud/png", {text: this.input})
      .subscribe(res => {
        this.image = res.img;

        }
      );

  }
}


