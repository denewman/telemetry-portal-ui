import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sub-home-buttons',
  templateUrl: '../templates/sub-homebuttons.component.tpl.html',
    styleUrls: ['../css/sub-homebuttons.component.css']
})
export class SubHomeButtonComponent {

    constructor(
        private router: Router
    ) { }

    goToManage() {
        this.router.navigate(['/manage-subscriptions'])
    }

    goToApply() {
        this.router.navigate(['/apply-subscriptions'])
    }
}