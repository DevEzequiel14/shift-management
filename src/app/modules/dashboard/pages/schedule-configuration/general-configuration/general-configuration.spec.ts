import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralConfiguration } from './general-configuration';

describe('GeneralConfiguration', () => {
  let component: GeneralConfiguration;
  let fixture: ComponentFixture<GeneralConfiguration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralConfiguration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralConfiguration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
