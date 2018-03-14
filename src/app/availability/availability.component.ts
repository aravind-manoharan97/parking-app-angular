import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})
export class AvailabilityComponent implements OnInit {
results: Object[]=[];

  constructor(private http: HttpClient) {

   }

  ngOnInit(): void {
    this.http.get('http://localhost/Parking/company_details.php')
    .subscribe(data => {
      this.results = data['results'];
    });
  }
}
