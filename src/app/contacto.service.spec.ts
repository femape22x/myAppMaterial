/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContactoService } from './contacto.service';

describe('ContactoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactoService]
    });
  });

  it('should ...', inject([ContactoService], (service: ContactoService) => {
    expect(service).toBeTruthy();
  }));
});
