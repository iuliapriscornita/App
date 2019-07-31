import { TestBed } from '@angular/core/testing';

import { ParticipareServiceService } from './participare-service.service';

describe('ParticipareServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParticipareServiceService = TestBed.get(ParticipareServiceService);
    expect(service).toBeTruthy();
  });
});
