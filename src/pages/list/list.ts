//Requires and Imports
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { MenuList} from '../../providers/menuInject' ;
import { ConfirmList} from '../../providers/cookingInject' ;

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
}) 

export class ListPage {
    
    //defining selectedItem, items, and orders
    selectedItem: any;
    items: any;  
    orders: any;
 
    //defining libraries and injectables
    constructor(public navCtrl: NavController, public alertCtrl: AlertController, public menu: MenuList, public confirm: ConfirmList)  {
        this.items = this.menu.list; //leting items variable equal to the menu list from injectable
        this.orders = this.menu.orders //leting orders variable equal the orders from injectable
    }
    
    //Function which calls the addItem function from the Injectable 
    addItem = function(){
        this.menu.addItem(); //calling function
    }

    //Function which calls the editItem function from the Injectable 
    editItem = function(item){
        this.menu.editItem(item, item.tag, item.cost) //calling function
    }

    //Function which calls the deleteItem function from the Injectable 
    deleteItem = function(item){
        this.menu.deleteItem(item) //calling function
    }

    //Function which calls the itemTapped function from the Injectable 
    itemTapped = function(item){
        this.menu.itemTapped(item.title,item.fee) //calling function
    }

    //Function which calls the removeItem function from the Injectable 
    removeItem = function(item){
        this.menu.removeItem(item) //calling function
    }

    //Clearing the ordering list when order is passed through 
    removeRemaining = function ():void{
        this.menu.orders = []; //makes orders a blank table again 
    }

    //Calls the add order function from cooking injectable to pass through order to cooking
    confirmOrder = function(item){
        let list = [];
        this.menu.orders.forEach(item => {list.push(item)}); //pushes each item 

        this.removeRemaining(); //calls remove function above
        this.orders = this.menu.orders //sets orders to orders from injectable

        this.confirm.addOrder(list) //calls add order function
        
    }
}

