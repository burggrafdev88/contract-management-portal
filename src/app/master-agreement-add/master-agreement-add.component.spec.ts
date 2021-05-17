import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterAgreementAddComponent } from './master-agreement-add.component';

describe('MasterAgreementComponent', () => {
  let component: MasterAgreementAddComponent;
  let fixture: ComponentFixture<MasterAgreementAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterAgreementAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterAgreementAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
