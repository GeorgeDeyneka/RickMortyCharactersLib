import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filterConfig } from 'src/app/models/interfaces/filter-config.interface';

const DEFAULT_CONFIGURATION: filterConfig = {
  search: '',
  sort: 'name',
};

@Injectable({
  providedIn: 'root',
})
export class SearchConfigService {
  public configuration$: BehaviorSubject<filterConfig> = new BehaviorSubject(
    DEFAULT_CONFIGURATION
  );

  constructor() {}

  get defaultConfig() {
    return this.configuration$.getValue();
  }

  resetConfig() {
    this.configuration$.next(this.defaultConfig);
  }

  setSearch(search: string) {
    this.configuration$.next({
      ...this.defaultConfig,
      search,
    });
  }

  setSort(sort: string) {
    this.configuration$.next({
      ...this.defaultConfig,
      sort,
    });
  }
}
