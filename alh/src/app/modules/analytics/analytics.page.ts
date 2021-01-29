import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.page.html',
  styleUrls: ['./analytics.page.scss'],
})
export class AnalyticsPage implements OnInit {
  paneEnabled = false;
  constructor(
    private menuController: MenuController,
  ) { }

  ngOnInit() {}

  ionViewWillEnter() {
    this.paneEnabled = true;
    this.menuController.enable(true, 'analytics-menu');
  }

  ionViewWillLeave() {
    this.paneEnabled = false;
  }
}
