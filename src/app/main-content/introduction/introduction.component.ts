import { Component, OnInit } from '@angular/core';
import { DocumentViewerOptions } from '@ionic-native/document-viewer';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx/';


@Component({
    selector: 'app-introduction',
    templateUrl: './introduction.component.html',
    styleUrls: ['./introduction.component.scss'],
})
export class IntroductionComponent implements OnInit {

    options: DocumentViewerOptions = {
        title: 'Commit Log'
    }

    constructor(private document: DocumentViewer) { }

    ngOnInit() { }

    commitLog() {
        this.document.viewDocument('assets/commit-log.pdf', 'application/pdf', this.options);
    }
}
