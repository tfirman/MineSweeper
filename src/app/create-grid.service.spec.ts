import { TestBed, inject } from '@angular/core/testing';

import { CreateGridService } from './create-grid.service';

describe('CreateGridService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateGridService]
    });
  });

  it('should be created', inject([CreateGridService], (service: CreateGridService) => {
    expect(service).toBeTruthy();
  }));
});
