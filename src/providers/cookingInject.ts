//Requires and Imports
import { Injectable } from '@angular/core'
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Injectable()
//exporting class
export class ConfirmList {

    //defining current orders 
    cookingList: Array<Array<{ title: string, fee:string}>>

    //defining libraries
    constructor(public alertCtrl: AlertController) {
        //make current orders an empty table
        this.cookingList = [];
    }

    //Function for adding the selected items to the order
    addOrder(list){
        this.cookingList.push(list); //pushes item info to current orders/cookingList
    }

    //Function for removing the order when finished 
    removeOrder(list){
        
        let index = this.cookingList.indexOf(list);
  
        if(index > -1){
            this.cookingList.splice(index, 1); //deletes order 
    
        }   
    }

}