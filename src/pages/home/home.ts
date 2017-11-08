import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  grocerylists:any;

  constructor(public navCtrl: NavController, public data: DataProvider) {

  }

  ionViewDidLoad(){
    this.grocerylists = this.data.lists;
  }

}
