import {Component} from '@angular/core';
import {AppComponent} from './app.component';

@Component({
    selector: 'app-topbar',
    template: `
        <div class="topbar clearfix">
            <div class="topbar-left">
                <img src="assets/layout/images/logo.png" class="topbar-logo" />
            </div>

            <div class="topbar-right">
                <a id="menu-button" href="#" (click)="app.onMenuButtonClick($event)"
                   [ngClass]="{'menu-button-rotate': app.rotateMenuButton}">
                    <i class="fa fa-angle-left"></i>
               </a>

                <a id="topbar-menu-button" href="#" (click)="app.onTopbarMenuButtonClick($event)">
                    <i class="fa fa-bars"></i>
                </a>

                <ul class="topbar-items fadeInDown" [ngClass]="{'topbar-items-visible': app.topbarMenuActive}">
                    <li #profile class="profile-item" *ngIf="app.profileMode==='top'||app.isHorizontal()"
                        [ngClass]="{'active-top-menu':app.activeTopbarItem === profile}">

                        <a href="#" (click)="app.onTopbarItemClick($event,profile)">
                            <img class="profile-image" src="assets/layout/images/avatar.png" />
                            <span class="topbar-item-name">Isabel Lopez</span>
                            <span class="topbar-item-role">Marketing</span>
                        </a>

                        <ul class="layout-menu fadeInDown">
                            <li role="menuitem">
                                <a href="#">
                                    <i class="fa fa-fw fa-user"></i>
                                    <span>Profile</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#">
                                    <i class="fa fa-fw fa-user-secret"></i>
                                    <span>Privacy</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#">
                                    <i class="fa fa-fw fa-cog"></i>
                                    <span>Settings</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#">
                                    <i class="fa fa-fw fa-sign-out"></i>
                                    <span>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li #settings [ngClass]="{'active-top-menu':app.activeTopbarItem === settings}">
                        <a href="#" (click)="app.onTopbarItemClick($event,settings)">
                            <i class="topbar-icon fa fa-fw fa-cog"></i>
                            <span class="topbar-item-name">Settings</span>
                        </a>
                        <ul class="layout-menu fadeInDown">
                            <li role="menuitem">
                                <a href="#">
                                    <i class="fa fa-fw fa-paint-brush"></i>
                                    <span>Change Theme</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#">
                                    <i class="fa fa-fw fa-star-o"></i>
                                    <span>Favorites</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#">
                                    <i class="fa fa-fw fa-lock"></i>
                                    <span>Lock Screen</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#">
                                    <i class="fa fa-fw fa-picture-o"></i>
                                    <span>Wallpaper</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li #messages [ngClass]="{'active-top-menu':app.activeTopbarItem === messages}">
                        <a href="#" (click)="app.onTopbarItemClick($event,messages)">
                            <i class="topbar-icon animated swing fa fa-fw fa-envelope-o"></i>
                            <span class="topbar-badge animated rubberBand">5</span>
                            <span class="topbar-item-name">Messages</span>
                        </a>
                        <ul class="layout-menu fadeInDown">
                            <li role="menuitem">
                                <a href="#" class="topbar-message">
                                    <img src="assets/layout/images/avatar1.png" width="35"/>
                                    <span>Give me a call</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#" class="topbar-message">
                                    <img src="assets/layout/images/avatar2.png" width="35"/>
                                    <span>Sales reports attached</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#" class="topbar-message">
                                    <img src="assets/layout/images/avatar3.png" width="35"/>
                                    <span>About your invoice</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#" class="topbar-message">
                                    <img src="assets/layout/images/avatar2.png" width="35"/>
                                    <span>Meeting today at 10pm</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#" class="topbar-message">
                                    <img src="assets/layout/images/avatar4.png" width="35"/>
                                    <span>Out of office</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li #notifications [ngClass]="{'active-top-menu':app.activeTopbarItem === notifications}">
                        <a href="#" (click)="app.onTopbarItemClick($event,notifications)">
                            <i class="topbar-icon fa fa-fw fa-bell-o"></i>
                            <span class="topbar-badge animated rubberBand">4</span>
                            <span class="topbar-item-name">Notifications</span>
                        </a>
                        <ul class="layout-menu fadeInDown">
                            <li role="menuitem">
                                <a href="#">
                                    <i class="fa fa-fw fa-tasks"></i>
                                    <span>Pending tasks</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#">
                                    <i class="fa fa-fw fa-calendar-check-o"></i>
                                    <span>Meeting today at 3pm</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#">
                                    <i class="fa fa-fw fa-download"></i>
                                    <span>Download documents</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#">
                                    <i class="fa fa-fw fa-plane"></i>
                                    <span>Book flight</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li #search class="search-item" [ngClass]="{'active-top-menu':app.activeTopbarItem === search}"
                        (click)="app.onTopbarItemClick($event,search)">
                        <div class="topbar-search">
                            <input type="text" placeholder="Search" />
                            <i class="fa fa-search"></i>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    `
})
export class AppTopBarComponent {

    constructor(public app: AppComponent) {}

}
