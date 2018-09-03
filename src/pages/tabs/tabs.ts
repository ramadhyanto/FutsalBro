import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController } from 'ionic-angular';
import { PropertiesProvider } from '../../providers/properties/properties';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: string;
  tab2Root: string;
  tab3Root: string;
  flagTeam: boolean;
  flagStadion: boolean;

  tab1Title = " ";
  tab2Title = " ";
  tab3Title = " ";

  constructor(public navCtrl: NavController, public translateService: TranslateService, public properties: PropertiesProvider) {
    
    if (this.properties.userType == "USER_TEAM") {
      this.flagTeam = true;
      this.flagStadion = false;
      this.tab1Root = "DashboardPage";
      this.tab2Root = "ListBookingTeamPage";
      this.tab3Root = "ProfilePage";
      translateService.get(['TAB1_TITLE', 'TAB2_TITLE', 'TAB3_TITLE']).subscribe(values => {
        this.tab1Title = values['TAB1_TITLE'];
        this.tab2Title = values['TAB2_TITLE'];
        this.tab3Title = values['TAB3_TITLE'];
      });
    }
    else {
      console.log("oke");
      this.flagTeam = false;
      this.flagStadion = true;
      this.tab1Root = "InputFutsalFieldPage";
      this.tab2Root = "ListBookingStadionPage";
     // this.tab3Root = "ListFutsalFieldPage";
      translateService.get(['TAB4_TITLE','TAB5_TITLE']).subscribe(values => {
        this.tab1Title = values['TAB4_TITLE'];
        this.tab2Title = values['TAB5_TITLE'];
        //this.tab3Title = values['TAB6_TITLE'];
      });
    }
  }
}
