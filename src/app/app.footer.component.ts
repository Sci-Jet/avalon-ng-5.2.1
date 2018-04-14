import {Component, Inject, forwardRef} from '@angular/core';
import {AppComponent} from './app.component';

@Component({
    selector: 'app-footer',
    template: `
        <div class="layout-footer">
            <span class="footer-text-left">
                <img src="assets/layout/images/logo-dark.png" />
            </span>
            <span class="footer-text-right">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-github"></i></a>
            </span>
        </div>
    `
})
export class AppFooterComponent {

}
