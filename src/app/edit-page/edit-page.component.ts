import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {

  results:Object[]=[];
  post_results:Object[]=[];
  company_name:string;
  tower_name:string;
  car_space:string;
  bike_space:string;
  temp_c_name:string='';
  constructor(private http:HttpClient) { }

  ngOnInit() {
	  this.getData();  	
  }
  getData()
  {
  	this.http.get('http://localhost/Parking/company_details.php')
  	.subscribe( data => {
  		this.results = data['results'];
  	});
  		console.log("Done downloading!");
  }
  addCompanyDetails(id:any,type:any,c_name:string,t_name:string,c_space:string,b_space:string)
  {
  	console.log(id);
  	console.log(this.temp_c_name);

  	if(type=="add")
  	{
  		c_name = this.company_name;
  		t_name = this.tower_name;
  		c_space = this.car_space;
  		b_space = this.bike_space;
  	}
  	console.log(c_name+','+t_name+','+c_space+','+b_space);
  	this.http.post('http://localhost/Parking/add_company_details.php','',{
  	params: new HttpParams()
  				.set('id',id)
  				.set('type',type)
  				.set('company_name',c_name)
  				.set('tower_name',t_name)
  				.set('car_space',c_space)
  				.set('bike_space',b_space),
  		headers : {
  			'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
  		}
  	})
  	.subscribe((response)=> {
  		this.post_results = response['posts'];
  		console.log(this.post_results);
  		this.getData();
  	},(err)=>{
  		console.log("Errorrrrrrrr"+err);
  	},()=>{
  		console.log("Done uploading!");
  		
  	});
  }


}
