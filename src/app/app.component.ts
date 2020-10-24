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
            url: '/main/Goal',
            icon: 'star'
        },
        {
            title: 'Personas',
            url: '/main/personas',
            icon: 'people'
        },
        {
            title: 'Design',
            url: '/main/design',
            icon: 'brush'
        },
        {
            title: 'App Critique',
            url: '/main/critique',
            icon: 'flame'
        },
        {
            title: 'Technologies',
            url: '/main/technologies',
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
        this.selectedIndex = this.appPages.findIndex(page => page.url === window.location.pathname);
    }

    getIndexTitle() {
        return this.appPages[this.selectedIndex].title;
    }
}
