import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultTableHeaderCellRendererComponent } from './default-table-header-cell-renderer.component';

describe('DefaultTableHeaderCellRendererComponent', () => {
  let component: DefaultTableHeaderCellRendererComponent;
  let fixture: ComponentFixture<DefaultTableHeaderCellRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultTableHeaderCellRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultTableHeaderCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
