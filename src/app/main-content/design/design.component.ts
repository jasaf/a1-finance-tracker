import { Component, OnInit } from '@angular/core';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@Component({
    selector: 'app-design',
    templateUrl: './design.component.html',
    styleUrls: ['./design.component.scss'],
})
export class DesignComponent implements OnInit {

    constructor(private photoViewer: PhotoViewer) { }
    // constructor() { }

    ngOnInit() { }

    enlarge() {
        this.photoViewer.show('https://tinyurl.com/yxd3wgkk');
    }

}
