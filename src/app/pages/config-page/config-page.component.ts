import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { TranslateService } from '@ngx-translate/core';
import { UserServiceService } from 'src/app/user-service.service';


@Component({
  selector: 'app-config-page',
  templateUrl: './config-page.component.html',
  styleUrls: ['./config-page.component.css']
})
export class ConfigPageComponent implements OnInit {

  Lang;

  constructor(private location: Location,
    private translate: TranslateService,
    private userService: UserServiceService
    ) { }

  ngOnInit(): void {
    if (this.userService.user.Lang === 'cat') this.Lang = '1';
    if (this.userService.user.Lang === 'esp') this.Lang = '2';
    if (this.userService.user.Lang === 'en') this.Lang = '3';
  }

  goBack() {
    this.location.back()
  }

  useLanguage(language: string): void {
    this.translate.use(language);

    let fd = new FormData();
    fd.append('Lang', language);
    this.userService.editUserLang(fd, this.userService.user.id);
  }

  logout(){
    this.userService.LogOut();
  }

}
