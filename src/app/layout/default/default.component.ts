import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ConfigService} from '../../share/config.service';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  isCollapsed = false;
  triggerTemplate = null;
  menuList = [];
  menuData = {};
  secondLevelMenu = [];
  currentMenu = 'monitor';
  routeData = [];
  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  constructor(private configService: ConfigService, router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log(event);
        this.routeData = event.urlAfterRedirects.split('/');
        console.log(this.routeData);
        this.currentMenu = this.routeData[2];
        this.getMenu();
      }
    });
  }

  ngOnInit() {
    this.getMenu();
  }

  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

  getMenu() {
    this.configService.getMenu().subscribe((data) => {
      console.log(data);
      this.menuData = data;
      this.menuList = data['dashboard'];
      this.secondLevelMenu = this.menuData[this.currentMenu];
    });
  }

  changeMenu(state) {
    this.currentMenu = state;
    this.secondLevelMenu = this.menuData[this.currentMenu];

  }


}
