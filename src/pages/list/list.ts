import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['restaurant'];

    this.items = [];
    
      this.items.push({
        title:"Noodle Soup",
        note:"$10.00",
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });

      this.items.push({
        title:"Noodle Salad",
        note:"$10.00",
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });

      this.items.push({
        title: "Spring Rolls",
        note: "$6.00",
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
      
      this.items.push({
        title:"Dumplings",
        note:"$6.00",
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });

      this.items.push({
        title:"Wontons",
        note:"$6.00",
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });

      this.items.push({
        title:"Salad Bowl",
        note:"$6.00",
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
 