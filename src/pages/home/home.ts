import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ConfirmList} from '../../providers/cookingInject' ;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

cooking: Array<Array<{title: string, fee:string}>>

  constructor(public navCtrl: NavController, public confirm: ConfirmList) {
      this.cooking = this.confirm.cookingList
  }

  orderTapped = function(list){
    this.confirm.removeOrder(list)
  }
}
