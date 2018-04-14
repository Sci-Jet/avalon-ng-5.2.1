import {Component, Input, OnInit, EventEmitter, ViewChild} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {MenuItem} from 'primeng/primeng';
import {AppComponent} from './app.component';

@Component({
    selector: 'app-menu',
    template: `
        <ul app-submenu [item]="model" root="true" class="layout-menu layout-main-menu clearfix" [reset]="reset" visible="true"></ul>
    `
})
export class AppMenuComponent implements OnInit {

    @Input() reset: boolean;

    model: any[];

    theme = 'blue';

    layout = 'blue';

    version = 'v3';

    constructor(public app: AppComponent) {}

    ngOnInit() {
        this.model = [
            {
                label: 'Bootstrap Version', icon: 'fa fa-fw  fa-tags',
                items: [
                    {label: 'Bootstrap v3', icon: 'fa fa-fw fa-tag',  command: () => this.changeVersion('v3')},
                    {label: 'Bootstrap v4', icon: 'fa fa-fw fa-tag',  command: () => this.changeVersion('v4')}
                ]
            },
            {label: 'Dashboard', icon: 'fa fa-fw fa-home', routerLink: ['/']},
            {
                label: 'Customization', icon: 'fa fa-fw fa-bars' , badge: '8',
                items: [
                    {label: 'Static Menu', icon: 'fa fa-fw fa-bars',  command: () => this.app.changeToStaticMenu()},
                    {label: 'Overlay Menu', icon: 'fa fa-fw fa-bars',  command: () => this.app.changeToOverlayMenu()},
                    {label: 'Slim Menu', icon: 'fa fa-fw fa-bars',  command: () => this.app.changeToSlimMenu()},
                    {label: 'Horizontal Menu', icon: 'fa fa-fw fa-bars',  command: () => this.app.changeToHorizontalMenu()},
                    {label: 'Inline Profile', icon: 'fa fa-sun-o fa-fw',  command: () => this.app.profileMode = 'inline'},
                    {label: 'Top Profile', icon: 'fa fa-moon-o fa-fw',  command: () => this.app.profileMode = 'top'},
                    {label: 'Light Menu', icon: 'fa fa-sun-o fa-fw',  command: () => this.app.darkMenu = false},
                    {label: 'Dark Menu', icon: 'fa fa-moon-o fa-fw',  command: () => this.app.darkMenu = true}
                ]
            },
            {
                label: 'Layout Colors', icon: 'fa fa-fw fa-magic',
                items: [
                    {
                        label: 'Flat',
                        icon: 'fa fa-fw fa-circle',
                        items: [
                            {label: 'Blue', icon: 'fa fa-fw fa-paint-brush', command: (event) => {this.changeLayout('blue'); }},
                            {label: 'Purple', icon: 'fa fa-fw fa-paint-brush', command: (event) => {this.changeLayout('purple'); }},
                            {label: 'Cyan', icon: 'fa fa-fw fa-paint-brush', command: (event) => {this.changeLayout('cyan'); }},
                            {label: 'Indigo', icon: 'fa fa-fw fa-paint-brush', command: (event) => {this.changeLayout('indigo'); }},
                            {label: 'Teal', icon: 'fa fa-fw fa-paint-brush', command: (event) => {this.changeLayout('teal'); }},
                            {label: 'Pink', icon: 'fa fa-fw fa-paint-brush', command: (event) => {this.changeLayout('pink'); }},
                            {label: 'Lime', icon: 'fa fa-fw fa-paint-brush', command: (event) => {this.changeLayout('lime'); }},
                            {label: 'Green', icon: 'fa fa-fw fa-paint-brush', command: (event) => {this.changeLayout('green'); }},
                            {label: 'Amber', icon: 'fa fa-fw fa-paint-brush', command: (event) => {this.changeLayout('amber'); }},
                            {label: 'Brown', icon: 'fa fa-fw fa-paint-brush', command: (event) => {this.changeLayout('brown'); }},
                            {label: 'Orange', icon: 'fa fa-fw fa-paint-brush', command: (event) => {this.changeLayout('orange'); }},
                            {label: 'Deep Purple', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => {this.changeLayout('deeppurple'); }},
                            {label: 'Light Blue', icon: 'fa fa-fw fa-paint-brush', command: (event) => {this.changeLayout('lightblue'); }},
                            {label: 'Light Green', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => {this.changeLayout('lightgreen'); }},
                            {label: 'Dark Grey', icon: 'fa fa-fw fa-paint-brush', command: (event) => {this.changeLayout('darkgrey'); }},
                        ]
                    },
                    {
                        label: 'Special',
                        icon: 'fa fa-fw fa-fire',
                        items: [
                            {label: 'Influenza', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => {this.changeLayout('influenza', true); }},
                            {label: 'Suzy', icon: 'fa fa-fw fa-paint-brush', command: (event) => {this.changeLayout('suzy', true); }},
                            {label: 'Calm', icon: 'fa fa-fw fa-paint-brush', command: (event) => {this.changeLayout('calm', true); }},
                            {label: 'Crimson', icon: 'fa fa-fw fa-paint-brush', command: (event) => {this.changeLayout('crimson', true); }},
                            {label: 'Night', icon: 'fa fa-fw fa-paint-brush', command: (event) => {this.changeLayout('night', true); }},
                            {label: 'Skyling', icon: 'fa fa-fw fa-paint-brush', command: (event) => {this.changeLayout('skyline', true); }},
                            {label: 'Sunkist', icon: 'fa fa-fw fa-paint-brush', command: (event) => {this.changeLayout('sunkist', true); }},
                            {label: 'Little Leaf', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => {this.changeLayout('littleleaf', true); }},
                            {label: 'Joomla', icon: 'fa fa-fw fa-paint-brush', command: (event) => {this.changeLayout('joomla', true); }},
                            {label: 'Firewatch', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => {this.changeLayout('firewatch', true); }}
                        ]
                    }
                ]
            },
            {
                label: 'Themes', icon: 'fa fa-fw fa-paint-brush', badge: '5',
                items: [
                    {label: 'Blue', icon: 'fa fa-fw fa-paint-brush', command: (event) => {this.changeTheme('blue'); }},
                    {label: 'Cyan', icon: 'fa fa-fw fa-paint-brush', command: (event) => {this.changeTheme('cyan'); }},
                    {label: 'Indigo', icon: 'fa fa-fw fa-paint-brush', command: (event) => {this.changeTheme('indigo'); }},
                    {label: 'Purple', icon: 'fa fa-fw fa-paint-brush', command: (event) => {this.changeTheme('purple'); }},
                    {label: 'Teal', icon: 'fa fa-fw fa-paint-brush', command: (event) => {this.changeTheme('teal'); }},
                    {label: 'Orange', icon: 'fa fa-fw fa-paint-brush', command: (event) => {this.changeTheme('orange'); }},
                    {label: 'Deep Purple', icon: 'fa fa-fw fa-paint-brush', command: (event) => {this.changeTheme('deeppurple'); }},
                    {label: 'Light Blue', icon: 'fa fa-fw fa-paint-brush', command: (event) => {this.changeTheme('lightblue'); }},
                    {label: 'Green', icon: 'fa fa-fw fa-paint-brush', command: (event) => {this.changeTheme('green'); }},
                    {label: 'Light Green', icon: 'fa fa-fw fa-paint-brush', command: (event) => {this.changeTheme('lightgreen'); }},
                    {label: 'Lime', icon: 'fa fa-fw fa-paint-brush', command: (event) => {this.changeTheme('lime'); }},
                    {label: 'Amber', icon: 'fa fa-fw fa-paint-brush', command: (event) => {this.changeTheme('amber'); }},
                    {label: 'Brown', icon: 'fa fa-fw fa-paint-brush', command: (event) => {this.changeTheme('brown'); }},
                    {label: 'Dark Grey', icon: 'fa fa-fw fa-paint-brush', command: (event) => {this.changeTheme('darkgrey'); }},
                    {label: 'Pink', icon: 'fa fa-fw fa-paint-brush', command: (event) => {this.changeTheme('pink'); }},
                ]
            },
            {
                label: 'Components', icon: 'fa fa-fw fa-sitemap',
                items: [
                    {label: 'Sample Page', icon: 'fa fa-fw fa-columns', routerLink: ['/sample']},
                    {label: 'Forms', icon: 'fa fa-fw fa-code', routerLink: ['/forms']},
                    {label: 'Data', icon: 'fa fa-fw fa-table', routerLink: ['/data']},
                    {label: 'Panels', icon: 'fa fa-fw fa-list-alt', routerLink: ['/panels']},
                    {label: 'Overlays', icon: 'fa fa-fw fa-square', routerLink: ['/overlays']},
                    {label: 'Menus', icon: 'fa fa-fw fa-minus-square-o', routerLink: ['/menus']},
                    {label: 'Messages', icon: 'fa fa-fw fa-circle-o-notch', routerLink: ['/messages']},
                    {label: 'Charts', icon: 'fa fa-fw fa-area-chart', routerLink: ['/charts']},
                    {label: 'File', icon: 'fa fa-fw fa-arrow-circle-o-up', routerLink: ['/file']},
                    {label: 'Misc', icon: 'fa fa-fw fa-user-secret', routerLink: ['/misc']}
                ]
            },
            {
                label: 'Template Pages', icon: 'fa fa-fw fa-life-saver',
                items: [
                    {label: 'Empty Page', icon: 'fa fa-fw fa-square-o', routerLink: ['/empty']},
                    {label: 'Landing Page', icon: 'fa fa-fw fa-certificate', url: 'assets/pages/landing.html', target: '_blank'},
                    {label: 'Login Page', icon: 'fa fa-fw fa-sign-in', url: 'assets/pages/login.html', target: '_blank'},
                    {label: 'Error Page', icon: 'fa fa-fw fa-exclamation-circle', url: 'assets/pages/error.html', target: '_blank'},
                    {label: 'Not Found Page', icon: 'fa fa-fw fa-times', url: 'assets/pages/notfound.html', target: '_blank'},
                    {label: 'Access Denied Page', icon: 'fa fa-fw fa-exclamation-triangle',
                        url: 'assets/pages/access.html', target: '_blank'}
                ]
            },
            {
                label: 'Menu Hierarchy', icon: 'fa fa-fw fa-gg',
                items: [
                    {
                        label: 'Submenu 1', icon: 'fa fa-fw fa-sign-in',
                        items: [
                            {
                                label: 'Submenu 1.1', icon: 'fa fa-fw fa-sign-in',
                                items: [
                                    {label: 'Submenu 1.1.1', icon: 'fa fa-fw fa-sign-in'},
                                    {label: 'Submenu 1.1.2', icon: 'fa fa-fw fa-sign-in'},
                                    {label: 'Submenu 1.1.3', icon: 'fa fa-fw fa-sign-in'},
                                ]
                            },
                            {
                                label: 'Submenu 1.2', icon: 'fa fa-fw fa-sign-in',
                                items: [
                                    {label: 'Submenu 1.2.1', icon: 'fa fa-fw fa-sign-in'},
                                    {label: 'Submenu 1.2.2', icon: 'fa fa-fw fa-sign-in'}
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Submenu 2', icon: 'fa fa-fw fa-sign-in',
                        items: [
                            {
                                label: 'Submenu 2.1', icon: 'fa fa-fw fa-sign-in',
                                items: [
                                    {label: 'Submenu 2.1.1', icon: 'fa fa-fw fa-sign-in'},
                                    {label: 'Submenu 2.1.2', icon: 'fa fa-fw fa-sign-in'},
                                    {label: 'Submenu 2.1.3', icon: 'fa fa-fw fa-sign-in'},
                                ]
                            },
                            {
                                label: 'Submenu 2.2', icon: 'fa fa-fw fa-sign-in',
                                items: [
                                    {label: 'Submenu 2.2.1', icon: 'fa fa-fw fa-sign-in'},
                                    {label: 'Submenu 2.2.2', icon: 'fa fa-fw fa-sign-in'}
                                ]
                            },
                        ]
                    }
                ]
            },
            {label: 'Utils', icon: 'fa fa-fw fa-wrench', routerLink: ['/utils']},
            {label: 'Documentation', icon: 'fa fa-fw fa-book', routerLink: ['/documentation']}
        ];
    }

    changeTheme(theme: string) {
        const themeLink: HTMLLinkElement = <HTMLLinkElement> document.getElementById('theme-css');

        if (this.version === 'v3') {
            themeLink.href =  'assets/theme/theme-' + theme + '.css';
        } else {
            themeLink.href =  'assets/theme/theme-' + theme + '-v4' + '.css';
        }

        this.theme = theme;

    }

    changeLayout(layout: string, special?: boolean) {
        const layoutLink: HTMLLinkElement = <HTMLLinkElement> document.getElementById('layout-css');

        if (this.version === 'v3') {
            layoutLink.href = 'assets/layout/css/layout-' + layout + '.css';
        } else {
            layoutLink.href = 'assets/layout/css/layout-' + layout + '-v4' + '.css';
        }

        this.layout = layout;

        if (special) {
            this.app.darkMenu = true;
        }
    }

    changeVersion(version: string) {
        const themeLink: HTMLLinkElement = <HTMLLinkElement> document.getElementById('theme-css');
        const layoutLink: HTMLLinkElement = <HTMLLinkElement> document.getElementById('layout-css');

        if (version === 'v3') {
            this.version = 'v3';
            themeLink.href =  'assets/theme/theme-' + this.theme + '.css';
            layoutLink.href = 'assets/layout/css/layout-' + this.layout + '.css';
        } else {
            themeLink.href =  'assets/theme/theme-' + this.theme + '-v4' + '.css';
            layoutLink.href = 'assets/layout/css/layout-' + this.layout + '-v4' + '.css';
            this.version = '-v4';
        }

    }
}

@Component({
  /* tslint:disable:component-selector */
    selector: '[app-submenu]',
  /* tslint:enable:component-selector */
    template: `
        <ng-template ngFor let-child let-i="index" [ngForOf]="(root ? item : item.items)">
            <li [ngClass]="{'active-menuitem': isActive(i)}" [class]="child.badgeStyleClass" *ngIf="child.visible === false ? false : true">
                <a [href]="child.url||'#'" (click)="itemClick($event,child,i)" (mouseenter)="onMouseEnter(i)"
                   class="ripplelink" *ngIf="!child.routerLink"
                    [attr.tabindex]="!visible ? '-1' : null" [attr.target]="child.target">
                    <i [ngClass]="child.icon"></i><span>{{child.label}}</span>
                    <i class="fa fa-fw fa-angle-down menuitem-toggle-icon" *ngIf="child.items"></i>
                    <span class="menuitem-badge" *ngIf="child.badge">{{child.badge}}</span>
                </a>

                <a (click)="itemClick($event,child,i)" (mouseenter)="onMouseEnter(i)" class="ripplelink" *ngIf="child.routerLink"
                    [routerLink]="child.routerLink" routerLinkActive="active-menuitem-routerlink"
                   [routerLinkActiveOptions]="{exact: true}" [attr.tabindex]="!visible ? '-1' : null" [attr.target]="child.target">
                    <i [ngClass]="child.icon"></i><span>{{child.label}}</span>
                    <i class="fa fa-fw fa-angle-down menuitem-toggle-icon" *ngIf="child.items"></i>
                    <span class="menuitem-badge" *ngIf="child.badge">{{child.badge}}</span>
                </a>
                <div class="layout-menu-tooltip">
                    <div class="layout-menu-tooltip-arrow"></div>
                    <div class="layout-menu-tooltip-text">{{child.label}}</div>
                </div>
                <div class="submenu-arrow" *ngIf="child.items"></div>
                <ul app-submenu [item]="child" *ngIf="child.items" [visible]="isActive(i)" [reset]="reset"
                    [@children]="(app.isSlim()||app.isHorizontal())&&root ? isActive(i) ?
                     'visible' : 'hidden' : isActive(i) ? 'visibleAnimated' : 'hiddenAnimated'"></ul>
            </li>
        </ng-template>
    `,
    animations: [
        trigger('children', [
            state('hiddenAnimated', style({
                height: '0px'
            })),
            state('visibleAnimated', style({
                height: '*'
            })),
            state('visible', style({
                display: 'block'
            })),
            state('hidden', style({
                display: 'none'
            })),
            transition('visibleAnimated => hiddenAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('hiddenAnimated => visibleAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ]
})
export class AppSubMenuComponent {

    @Input() item: MenuItem;

    @Input() root: boolean;

    @Input() visible: boolean;

    _reset: boolean;

    activeIndex: number;

    constructor(public app: AppComponent) {}

    itemClick(event: Event, item: MenuItem, index: number) {
        if (this.root) {
            this.app.menuHoverActive = !this.app.menuHoverActive;
        }

        // avoid processing disabled items
        if (item.disabled) {
            event.preventDefault();
            return true;
        }

        // activate current item and deactivate active sibling if any
        this.activeIndex = (this.activeIndex === index) ? null : index;

        // execute command
        if (item.command) {
            item.command({originalEvent: event, item: item});
        }

        // prevent hash change
        if (item.items || (!item.url && !item.routerLink)) {
            setTimeout(() => {
                this.app.layoutMenuScrollerViewChild.moveBar();
            }, 450);
            event.preventDefault();
        }

        // hide menu
        if (!item.items) {
            if (this.app.isHorizontal() || this.app.isSlim()) {
                this.app.resetMenu = true; } else {
                this.app.resetMenu = false; }

            this.app.overlayMenuActive = false;
            this.app.staticMenuMobileActive = false;
            this.app.menuHoverActive = !this.app.menuHoverActive;
        }
    }

    onMouseEnter(index: number) {
        if (this.root && this.app.menuHoverActive && (this.app.isHorizontal() || this.app.isSlim())
            && !this.app.isMobile() && !this.app.isTablet()) {
            this.activeIndex = index;
        }
    }

    isActive(index: number): boolean {
        return this.activeIndex === index;
    }

    @Input() get reset(): boolean {
        return this._reset;
    }

    set reset(val: boolean) {
        this._reset = val;

        if (this._reset && (this.app.isHorizontal() || this.app.isSlim())) {
            this.activeIndex = null;
        }
    }
}
