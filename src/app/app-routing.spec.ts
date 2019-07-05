import {Location} from '@angular/common';
import {TestBed, fakeAsync, tick} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';
import {routes} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {HomeComponent} from './core/components/home/home.component';
import {LoginComponent} from './core/components/login/login.component';
import {FooterComponent} from './core/components/footer/footer.component';
import {HeaderComponent} from './core/components/header/header.component';
import {NotFoundComponent} from './core/components/not-found/not-found.component';
import {SearchSomethingComponent} from './core/components/search-something/search-something.component';

describe('Router: App', () => {
    let location: Location;
    let router: Router;
    let fixture;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes(routes), HttpClientModule],
            declarations: [
                AppComponent,
                HomeComponent,
                LoginComponent,
                FooterComponent,
                HeaderComponent,
                NotFoundComponent,
                SearchSomethingComponent
            ],
        });

        router = TestBed.get(Router);
        location = TestBed.get(Location);

        fixture = TestBed.createComponent(AppComponent);
        router.initialNavigation();
    });

    it('fakeAsync works', fakeAsync(() => {
        const promise = new Promise(resolve => {
            setTimeout(resolve, 10);
        });
        let done = false;
        promise.then(() => (done = true));
        tick(50);
        expect(done).toBeTruthy();
    }));

    it('navigate to "" should create HomeComponent', fakeAsync(() => {
        router.navigate(['']).then(() => {
            const routing = TestBed.createComponent(HomeComponent);
            const app = routing.debugElement.componentInstance;
            expect(app).toBeTruthy();
        });
    }));
});
