import { TestBed } from '@angular/core/testing';

import { CompanydataService } from './companydata.service';

describe('CompanyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompanydataService = TestBed.get(CompanydataService);
    expect(service).toBeTruthy();
  });
});
