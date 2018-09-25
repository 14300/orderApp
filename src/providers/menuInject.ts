import { Injectable } from '@angular/core'
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Injectable()
export class MenuList {

    list: Array<{ title: string, fee:string}>

    constructor(public alertCtrl: AlertController) {
        this.list = [ 
            { title: "Chicken Noodle Soup", fee: "$10"},
            { title: "Dumplings", fee: "$6"},
            { title: "Mixed Salad Noodles", fee: "$8"}
        ];
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

    itemTapped(event, item) {

    }

}