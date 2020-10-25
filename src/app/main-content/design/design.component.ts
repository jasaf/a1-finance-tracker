import { Component, OnInit } from '@angular/core';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@Component({
    selector: 'app-design',
    templateUrl: './design.component.html',
    styleUrls: ['./design.component.scss'],
})
export class DesignComponent implements OnInit {

    constructor(private photoViewer: PhotoViewer) { }

    ngOnInit() { }

    enlarge(asset: string): void {
        this.photoViewer.show(asset);
    }
}
