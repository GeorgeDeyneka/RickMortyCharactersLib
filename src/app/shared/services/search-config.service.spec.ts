import { TestBed } from '@angular/core/testing';

import { SearchConfigService } from './search-config.service';

describe('SearchConfigService', () => {
  let service: SearchConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
