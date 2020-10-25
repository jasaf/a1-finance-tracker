import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
    selector: 'app-image-modal',
    templateUrl: './image-modal.page.html',
    styleUrls: ['./image-modal.page.scss'],
})
export class ImageModalPage implements OnInit {

    img: any;

    sliderOpts = {
        zoom: {
            maxRatio: 2
        }
    }

    constructor(private navParams: NavParams, private modalController: ModalController) { }

    ngOnInit() {
        this.img = this.navParams.get('img');

    }

    close() {
        this.modalController.dismiss();
    }
}
