/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DailyUpdateService } from './dailyUpdate.service';

describe('Service: DailyUpdate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DailyUpdateService]
    });
  });

  it('should ...', inject([DailyUpdateService], (service: DailyUpdateService) => {
    expect(service).toBeTruthy();
  }));
});
