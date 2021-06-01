import { TestBed } from '@angular/core/testing';

import { ContractorListService } from './contractor-list.service';

describe('ContractorListService', () => {
  let service: ContractorListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContractorListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
