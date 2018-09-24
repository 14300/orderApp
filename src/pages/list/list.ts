import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
}) 

export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.items = [];
  }

  addItem(){

      let prompt = this.alertCtrl.create({
          title: 'Add Item',
          subTitle:'Enter Name and Price',
          inputs: [{
              name: 'title',
          }],
          buttons: [
              {
                  text: 'Cancel'
              },
              {
                  text: 'Add',
                  handler: data => {
                      this.items.push(data);
                  }
              }
          ]
      });

      prompt.present();
  }

  editItem(item){

      let prompt = this.alertCtrl.create({
          title: 'Edit Item',
          
          inputs: [{
              name: 'title',
          }],
          buttons: [
              {
                  text: 'Cancel'
              },
              {
                  text: 'Save',
                  handler: data => {
                      let index = this.items.indexOf(item);

                      if(index > -1){
                        this.items[index] = data;
                      }
                  }
              }
          ]
      });

      prompt.present();      

  }

  deleteItem(item){

      let index = this.items.indexOf(item);

      if(index > -1){
          this.items.splice(index, 1);
      }
  }


}
 