import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAccountModule } from '../user.account.module';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  constructor(
      private router: Router,
      private account: UserAccountModule
  ) { }

  async ngOnInit() {
    await this.account.init();
    if (this.account.email) {
      return this.router.navigateByUrl('/contracts');
    }
  }

}
