import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NavController } from 'ionic-angular';

import { DataServiceProvider } from "../../providers/data-service/data-service";
import { AboutPage } from '../about/about';
/**
 * Generated class for the RentPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */
@Component({
  selector: 'page-rent',
  templateUrl: 'rent.html'
})
export class RentPage {
	list : Observable<any>;
	orderObj = {
		Name: "",
		Description: "",
		Price: "",
	}

  constructor(public navCtrl: NavController, public dataService: DataServiceProvider) {

  	this.loadTodos();
  }

	loadTodos() {
	this.list = this.dataService.getData();
	}

	addTodos() {

	}

	removeTodo(id) {

	}

	private showToast (message: string) {

	}
	sendOrder() {
		// get order object containing data
		console.log("lol will send data here")
		console.log(this.orderObj);
		
		//push object to the server
		this.dataService.sendOrderToDB(this.orderObj);	

		//push to next page
		this.navCtrl.push(AboutPage, {});
 
	
	}

}

  
