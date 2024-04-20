import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunosViewComponent } from './alunos-view.component';

describe('AlunosViewComponent', () => {
  let component: AlunosViewComponent;
  let fixture: ComponentFixture<AlunosViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlunosViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlunosViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
