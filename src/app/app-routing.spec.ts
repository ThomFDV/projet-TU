import {Location} from '@angular/common';
import {TestBed, fakeAsync, tick} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';
import {routes} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {HomeComponent} from './core/components/home/home.component';

describe('Router: App', () => {
    let location: Location;
    let router: Router;
    let fixture;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes(routes), HttpClientModule],
            declarations: [AppComponent],
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
