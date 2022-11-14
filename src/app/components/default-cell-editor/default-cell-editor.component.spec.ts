import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultCellEditorComponent } from './default-cell-editor.component';

describe('DefaultCellEditorComponent', () => {
  let component: DefaultCellEditorComponent;
  let fixture: ComponentFixture<DefaultCellEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultCellEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultCellEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
