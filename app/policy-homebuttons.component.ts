import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'policy-home-buttons',
  templateUrl: '../templates/policy-homebuttons.component.tpl.html',
    styleUrls: ['../css/policy-homebuttons.component.css']
})
export class PolicyHomeButtonComponent {

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