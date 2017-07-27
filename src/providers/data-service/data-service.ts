import { AppSettingsProvider } from '../app-settings/app-settings';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DataServiceProvider {
	apiURL = this.appSettings.getApiURL();

  constructor(public http: Http, public appSettings: AppSettingsProvider) {
  }

  public getData() {
  	return this.http.get(this.apiURL + 'pullEvents')
  	.map(response => response.json());
  }
  public pushRentDetails() {
  	return this.http.post(this.apiURL + 'pushRentDetails', {'text': "test data fam"})
  	.map(response => response.json());
  }
    public deleteTodos() {
  	//return this.http.delete(this.apiURL + 'todos/' + todoId)
  	//.map(response => response.json());
  }
}
