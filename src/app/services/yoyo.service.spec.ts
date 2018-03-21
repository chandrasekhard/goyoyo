import { TestBed, inject } from '@angular/core/testing';

import { YoyoService } from './yoyo.service';

describe('YoyoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YoyoService]
    });
  });

  it('should be created', inject([YoyoService], (service: YoyoService) => {
    expect(service).toBeTruthy();
  }));
});
