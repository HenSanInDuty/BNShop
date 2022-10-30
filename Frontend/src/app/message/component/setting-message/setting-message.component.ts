import { Component, OnInit } from '@angular/core';
import { en_US, TDSI18nService, vi_VN } from 'tds-ui/i18n';

@Component({
  selector: 'app-setting-message',
  templateUrl: './setting-message.component.html',
  styleUrls: ['./setting-message.component.scss'],
  host: { class: 'h-full flex flex-col overflow-hidden ' },
})
export class SettingMessageComponent implements OnInit {
  show: boolean = false;
  time: Date | null = null;
  defaultOpenValue = new Date(0, 0, 0, 0, 0, 0);

  isEnglish = false;
  clickEvent() {
    this.show = !this.show;
  }
  showadd = true;
  constructor(private i18n: TDSI18nService) { }
  changeLanguage(): void {
    this.i18n.setLocale(this.isEnglish ? vi_VN : en_US);
    this.isEnglish = !this.isEnglish;
  }
  ngOnInit(): void {
  }

}
