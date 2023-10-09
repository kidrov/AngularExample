import { TestBed } from '@angular/core/testing';

import { ErrorcatchingInterceptor } from './errorcatching.interceptor';

describe('ErrorcatchingInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ErrorcatchingInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ErrorcatchingInterceptor = TestBed.inject(ErrorcatchingInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
