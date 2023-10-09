import { TestBed } from '@angular/core/testing';

import { CreateNoteService } from './create-note.service';

describe('CreateNoteService', () => {
  let service: CreateNoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateNoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
