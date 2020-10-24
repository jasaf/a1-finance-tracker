import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main-content',
    templateUrl: './main-content.component.html',
    styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

    getIndexTitle() {
        return window.location.pathname.split('main/');
    }

}
