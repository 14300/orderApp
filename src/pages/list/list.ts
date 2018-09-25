import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { MenuList} from '../../providers/menuInject' ;

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
}) 

export class ListPage {
    selectedItem: any;
    icons: string[];
    //items: Array<{title: string, note: string, icon: string}>;
    items: any;  

    constructor(public navCtrl: NavController, public alertCtrl: AlertController, public menu: MenuList ) {
        this.items = this.menu.list;
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

    itemTapped = function(){
        this.menu.itemTapped()
    }
}

