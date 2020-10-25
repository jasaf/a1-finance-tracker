import { Component, OnInit } from '@angular/core';
import { ImageModalPage } from 'src/app/image-modal/image-modal.page';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-critique',
    templateUrl: './critique.component.html',
    styleUrls: ['./critique.component.scss'],
})
export class CritiqueComponent implements OnInit {

    constructor(private modalController: ModalController) { }

    ngOnInit() { }

    openPreview(img): void {
        this.modalController.create({
            component: ImageModalPage,
            componentProps: {
               img: img 
            }
        }).then(modal => modal.present());
    }
}
