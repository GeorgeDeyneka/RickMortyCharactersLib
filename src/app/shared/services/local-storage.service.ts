import { Injectable } from '@angular/core';
import { StorageService } from '../classes/storage';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService extends StorageService {
  constructor() {
    super(localStorage);
  }
}
