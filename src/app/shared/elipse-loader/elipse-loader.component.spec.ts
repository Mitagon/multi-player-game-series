import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElipseLoaderComponent } from './elipse-loader.component';

describe('ElipseLoaderComponent', () => {
  let component: ElipseLoaderComponent;
  let fixture: ComponentFixture<ElipseLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElipseLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElipseLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
