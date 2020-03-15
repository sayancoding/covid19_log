/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GlobalDataService } from './globalData.service';

describe('Service: GlobalData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalDataService]
    });
  });

  it('should ...', inject([GlobalDataService], (service: GlobalDataService) => {
    expect(service).toBeTruthy();
  }));
});
