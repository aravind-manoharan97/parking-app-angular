import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
	selector: 'app-alloted-list',
	templateUrl: './alloted-list.component.html',
	styleUrls: ['./alloted-list.component.css']
})
export class AllotedListComponent implements OnInit {
	results: Object[] = [];	delete_results: Object[] = [];
	constructor(private http: HttpClient) { }
	ngOnInit() {
		this.getData();
	}	getData() {	this.http.get('http://localhost/Parking/alloted_list.php')
			.subscribe(data => {this.results = data['results'];
			}); console.log("Done downloading!");	}
deleteData(id: any) {
		this.http.post('http://localhost/Parking/edit_alloted_list.php', '', {
			params: new HttpParams()
				.set('id', id), headers: {
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
				}		})			.subscribe((response) => {
				this.delete_results = response['results'];
	console.log(this.delete_results);				this.getData();
			}, (err) => {		console.log("Errorrrrrrrr" + err);
			}, () => {		console.log("Done uploading!");
			});
	}}
