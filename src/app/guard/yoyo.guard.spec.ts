import { TestBed, async, inject } from '@angular/core/testing';

import { YoyoGuard } from './yoyo.guard';

describe('YoyoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YoyoGuard]
    });
  });

  it('should ...', inject([YoyoGuard], (guard: YoyoGuard) => {
    expect(guard).toBeTruthy();
  }));
});
