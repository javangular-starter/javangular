import { LayoutModule } from '@angular/cdk/layout';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation.component';
import { MaterialModule } from '../material.module';
import { Component } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  template: '<p>Mock dashbooard</p>'
})
class MockDashboardComponent { }

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationComponent, MockDashboardComponent],
      imports: [
        NoopAnimationsModule,
        LayoutModule,
        MaterialModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    component.toggleSidebar();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
