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
            title: 'Goal',
            url: '/goal',
            icon: 'star'
        },
        {
            title: 'Personas',
            url: '/personas',
            icon: 'people'
        },
        {
            title: 'Design',
            url: '/design',
            icon: 'brush'
        },
        {
            title: 'App Critique',
            url: '/critique',
            icon: 'flame'
        },
        {
            title: 'Technologies',
            url: '/technologies',
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
        const path = window.location.pathname.split('folder/')[1];
        if (path !== undefined) {
            this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
        }
    }
}
