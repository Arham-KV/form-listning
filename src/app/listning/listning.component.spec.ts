import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListningComponent } from './listning.component';

describe('ListningComponent', () => {
  let component: ListningComponent;
  let fixture: ComponentFixture<ListningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
