import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ConfigService} from '../../share/config.service';

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
  currentMenu = '';
  @ViewChild('trigger') customTrigger: TemplateRef<void>;
  constructor(private configService: ConfigService) { }

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
    });
  }
  changeMenu(state) {
    this.secondLevelMenu = this.menuData[state];
    this.currentMenu = state;
  }

}
