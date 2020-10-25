import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
    selectedIndex = 0;
    appPages = [
        {
            title: 'Introduction',
            url: '/main/Introduction',
            icon: 'document'
        },
        {
            title: 'Goals',
            url: '/main/Goals',
            icon: 'star'
        },
        {
            title: 'Personas',
            url: '/main/Personas',
            icon: 'people'
        },
        {
            title: 'Design',
            url: '/main/Design',
            icon: 'brush'
        },
        {
            title: 'App Critique',
            url: '/main/Critique',
            icon: 'flame'
        },
        {
            title: 'Technologies',
            url: '/main/Technologies',
            icon: 'construct'
        }
    ];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    ngOnInit() {
    }

    getIndexTitle() {
        return this.appPages[this.selectedIndex].title;
    }
}
