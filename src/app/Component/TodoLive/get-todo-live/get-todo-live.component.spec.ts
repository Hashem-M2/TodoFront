import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTodoLiveComponent } from './get-todo-live.component';

describe('GetTodoLiveComponent', () => {
  let component: GetTodoLiveComponent;
  let fixture: ComponentFixture<GetTodoLiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetTodoLiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetTodoLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
