import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-getslot',
  templateUrl: './getslot.component.html',
  styleUrls: ['./getslot.component.css']
})

export class GetslotComponent implements OnInit {
type:string='';
number:string='';
name:string='';
results: Object[]=[];
delete_response:Object[]=[];
body = {};
data = 0;
list=false;
parking=false;
not_found=false;
isFull=false;
notFull=false;
  constructor(private http: HttpClient) { 
  }

  ngOnInit() {

  }

  onChange()
  {

  }


  getParkingDetails()
  {
      this.not_found=false;
      this.http.get('http://localhost/Parking/edit_company_details.php?name='+this.name)
    .subscribe(data => {
      this.results = data['results'];
      console.log(this.results.length);

     if(this.results.length==0)
     {           
       this.not_found=true;
       this.not_found=true;
     }
     else
     {
       this.list=true;
       this.parking=true;
       this.not_found=false;
     }
    });     
  }

  slotCheck()
  {
        
        if(this.type=="car")
        {
            if(this.results[0]['car_space']>=1)
            {
              this.full = true;
                this.notFull=true;
                this.isFull=false;
            }
            else
            {
                this.notFull=false;
                this.isFull=true;
            }
        }
        else if(this.results[0]['bike_space']>=1)
        {
            
            {
                 this.notFull=true;
                this.isFull=false;
            }
            else
            {
              this.notFull=false;
                this.isFull=true;
            }
        }
      
  }

  park()
  {
    console.log(this.name+this.number+this.type);
    this.data=1;
    setTimeout(() => this.data=2, 2000);
    this.http.post('http://localhost/Parking/test.php', this.body, {
    params: new HttpParams().set('name', this.name).set('type',this.type).set('number',this.number),
    headers : {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  })
  .subscribe((response) => {
           
           console.log("VALUE RECEIVED: "+response["posts"]);
           this.delete_response = response['posts'];
           console.log(this.delete_response);
     },
     (err) => {
            /* this function is executed when there's an ERROR */
            console.log("ERROR: "+err);
            this.data=3;  
     },
     () => {
            /* this function is executed when the observable ends (completes) its stream */
            console.log("COMPLETED");  
     })  

  
}
}



