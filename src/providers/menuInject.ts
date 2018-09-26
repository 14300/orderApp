import { Injectable } from '@angular/core'
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Injectable()
export class MenuList {

    list: Array<{ title: string, fee:string}>
    orders: Array<{title: string, fee:string}>

    constructor(public alertCtrl: AlertController) {
        this.list = [ 
            { title: "Chicken Noodle Soup", fee: "$10.00"},
            { title: "BBQ Pork Noodle", fee: "$10.00"},
            { title: "Beef Noodle Stir Fry", fee: "$10.00"},
            { title: "Mixed Salad Noodles", fee: "$8.00"},
            { title: "Dumplings", fee: "$6.00"},
            { title: "Fried Dim Sums", fee: "$6.00"},
            { title: "Wontons", fee: "$6.00"}
        ];
        this.orders = [];
    
    }

    addItem(){

        let prompt = this.alertCtrl.create({
            title: 'Add Item',
            subTitle:'Enter Item Name and Price',
            inputs: [
                {name: 'title', placeholder: 'Name'},
                {name: 'fee', placeholder: 'Price' }
            ],

            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Add',
                    handler: data => {
                        this.list.push(data);
                    }
                }
            ]
        });
  
        prompt.present();
    }
  
    editItem(item){
  
        let prompt = this.alertCtrl.create({
            title: 'Edit Item',
            
            inputs: [
                {name: 'title', placeholder: 'Name'},
                {name: 'fee', placeholder: 'Price' }
            ],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Save',
                    handler: data => {
                        let index = this.list.indexOf(item);
  
                        if(index > -1){
                          this.list[index] = data;
                        }
                    }
                }
            ]
        });
  
        prompt.present();      
  
    }
  
    deleteItem(item){
  
        let index = this.list.indexOf(item);
  
        if(index > -1){
            this.list.splice(index, 1);
        }
    }

    itemTapped(title, fee) {  
        this.orders.push({title, fee})
    }

    removeItem(item){
        let index = this.orders.indexOf(item);
  
        if(index > -1){
            this.orders.splice(index, 1);
        }
    }
}