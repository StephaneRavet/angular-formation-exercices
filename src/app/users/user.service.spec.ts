import {async, TestBed} from '@angular/core/testing';

import {UserService} from './user.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {SharedModule} from '../shared/shared.module';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 10 users', async(async () => {
    const result = await service.get();
    expect(result.length).toEqual(10);
  }));
});
