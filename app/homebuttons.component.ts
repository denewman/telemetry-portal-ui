import { Component } from '@angular/core';
import { Router } from '@angular/router';


export class ButtonContent {
    name: string;
}

@Component({
  selector: 'home-buttons',
  template: `
            <div id="content1">
                    <button (click)="goToManage()" class="home-button">Manage Subscriptions</button>
                    <div class="divider"></div>
                    <button (click)="goToApply()" class="home-button">Apply Subscriptions</button>
                </div>
            `
})
export class HomeButtonComponent {
    public buttons = BUTTONS;

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

const BUTTONS: ButtonContent[] = [
    {
        name: "Policy"
    },
    {
        name: "Visualization"
    }
];