import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { MenuList} from '../../providers/menuInject' ;
import { ConfirmList} from '../../providers/cookingInject' ;

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
}) 

export class ListPage {
    selectedItem: any;
    //items: Array<{title: string, note: string, icon: string}>;
    items: any;  
    orders: any;

    constructor(public navCtrl: NavController, public alertCtrl: AlertController, public menu: MenuList, public confirm: ConfirmList)  {
        this.items = this.menu.list;
        this.orders = this.menu.orders
    }
  
    addItem = function(){
        this.menu.addItem();
    }

    editItem = function(item){
        this.menu.editItem(item, item.tag, item.cost)
    }

    deleteItem = function(item){
        this.menu.deleteItem(item)
    }

    itemTapped = function(item){
        this.menu.itemTapped(item.title,item.fee)
    }

    removeItem = function(item){
        this.menu.removeItem(item)
    }

    confrimOrder = function(item){
        let list = this.orders;
        this.confirm.cooking(list)
    }
}

