//Requires and Imports
import { Injectable } from '@angular/core'
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Injectable()
//exporing class
export class MenuList {

    //defining list and orders
    list: Array<{ title: string, fee:string}>
    orders: Array<{title: string, fee:string}>

    //defining libraries 
    constructor(public alertCtrl: AlertController) {
        //creating a base menu
        this.list = [ 
            { title: "Chicken Noodle Soup", fee: "$10.00"},
            { title: "BBQ Pork Noodle", fee: "$10.00"},
            { title: "Beef Noodle Stir Fry", fee: "$10.00"},
            { title: "Mixed Salad Noodles", fee: "$8.00"},
            { title: "Dumplings", fee: "$6.00"},
            { title: "Fried Dim Sums", fee: "$6.00"},
            { title: "Wontons", fee: "$6.00"}
        ];
        //creating an empty orders table for holding order info
        this.orders = [];
    
    }

    empty(){
        let blank = this.alertCtrl.create({
            title:"No Information Entered",
            subTitle:"Please enter a value",
        buttons:[{text:"Confirm"}]
        })
        blank.present()
    }

    //Function for adding an item in the menu
    addItem(){ 

        //creating pop up
        let prompt = this.alertCtrl.create({
            title: 'Add Item',
            subTitle:'Enter Item Name and Price',
            inputs: [
                {name: 'title', placeholder: 'Name'}, //enter name
                {name: 'fee', placeholder: 'Price', type:'number' }  //enter price
            ],

            //buttons for confirming or cancelling
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Add',
                    handler: data => {
                        if(data.title.length && data.fee.length> 0){
                        this.list.push(data); }//pushes inputed data into the list 
                        else{this.empty()}
                    }
                }
            ]
        });
  
        prompt.present();
    }
  
    //Function for editing information on the menu item
        //Parameters: item info
    editItem(item){
  
        //creating pop up for edit
        let prompt = this.alertCtrl.create({
            title: 'Edit Item',
            
            inputs: [
                {name: 'title', placeholder: 'Name'}, //enter name 
                {name: 'fee', placeholder: 'Price', type:'number' } //enter price
            ],

            //buttons for saving or cancelling
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Save',
                    handler: data => {
                        if(data.title.length && data.fee.length> 0){
                            let index = this.list.indexOf(item);
  
                            if(index > -1){
                            this.list[index] = data; //pushes new inputed data into the list 
                            }
                        }else{this.empty()}
                    }
                }
            ]
        });
  
        prompt.present();      
  
    }
    
    //Function for deleting items off the menu
        //Parameters: item info
    deleteItem(item){
  
        let index = this.list.indexOf(item);
  
        if(index > -1){
            this.list.splice(index, 1); //deletes item
        }
    }

    //Function for adding the item to an order when clicked.
    itemTapped(title, fee) {  
        this.orders.push({title, fee}) //passes through item info to orders table 
    }

    //Function for removing item from an order 
    removeItem(item){
        let index = this.orders.indexOf(item);
  
        if(index > -1){
            this.orders.splice(index, 1); //deletes item
        }
    }
}