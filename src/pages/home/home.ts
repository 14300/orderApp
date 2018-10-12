//Requires and Imports
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ConfirmList} from '../../providers/cookingInject' ;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  //defining cooking/orders 
  cooking: Array<Array<{title: string, fee:string}>>

    //defining libraries and injectables
    constructor(public navCtrl: NavController, public confirm: ConfirmList) {
      this.cooking = this.confirm.cookingList //make variable cooking into what is ordered 
    }

    //calls the remove order function when order is tapped
    orderTapped = function(list){
      this.confirm.removeOrder(list)
    }
}
