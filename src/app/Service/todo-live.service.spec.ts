import { TestBed } from '@angular/core/testing';

import { TodoLiveService } from './todo-live.service';

describe('TodoLiveService', () => {
  let service: TodoLiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoLiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
