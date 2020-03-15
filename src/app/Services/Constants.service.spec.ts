/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConstantsService } from './Constants.service';

describe('Service: Constants', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConstantsService]
    });
  });

  it('should ...', inject([ConstantsService], (service: ConstantsService) => {
    expect(service).toBeTruthy();
  }));
});
