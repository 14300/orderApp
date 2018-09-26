import { Injectable } from '@angular/core'
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Injectable()
export class ConfirmList {

    cookingList: Array<Array<{ title: string, fee:string}>>

    constructor(public alertCtrl: AlertController) {
        this.cookingList = [];
    }

    addOrder(list){
        this.cookingList.push(list);
    }

    removeOrder(list){
        
        let index = this.cookingList.indexOf(list);
  
        if(index > -1){
            this.cookingList.splice(index, 1);
    
        }   
    }

}