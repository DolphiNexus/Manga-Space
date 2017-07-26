import { Injectable } from '@angular/core';

const CONFIG = {
	apiUrl: 'https://projectmanga.herokuapp.com/'
};
@Injectable()
export class AppSettingsProvider {

  constructor() {}

  public getApiURL() {
  	return CONFIG.apiUrl;
  }
}
