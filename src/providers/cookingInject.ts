import { Injectable } from '@angular/core'
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Injectable()
export class ConfirmList {

    list: Array<{ title: string, fee:string}>

    constructor(public alertCtrl: AlertController) {
        this.list = [];
    }

    cooking(list){

    }

}