import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapAssetComponent } from './bootstrap-asset.component';

describe('BootstrapAssetComponent', () => {
  let component: BootstrapAssetComponent;
  let fixture: ComponentFixture<BootstrapAssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
