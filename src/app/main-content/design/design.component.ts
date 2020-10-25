import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageModalPage } from 'src/app/image-modal/image-modal.page';


@Component({
    selector: 'app-design',
    templateUrl: './design.component.html',
    styleUrls: ['./design.component.scss'],
})
export class DesignComponent implements OnInit {

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
