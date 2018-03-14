import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-slotdetails',
  templateUrl: './slotdetails.component.html',
  styleUrls: ['./slotdetails.component.css']
})

export class SlotdetailsComponent implements OnInit {
  
  results: Object[]=[];
  c_name:String='';
  data = false;

  constructor(private http: HttpClient) { }

  ngOnInit(){
    
  }

  getData()
  {
  	this.http.get('http://localhost/Parking/parking_details.php?name='+this.c_name)
    .subscribe(data => {
      this.results = data['results'];
      this.data = true;
      //console.log(this.results);
    });
  }

}
