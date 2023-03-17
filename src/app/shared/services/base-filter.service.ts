import { Injectable } from '@angular/core';
import { ICharacter } from 'src/app/models/interfaces/character.interface';
import { filterConfig } from 'src/app/models/interfaces/filter-config.interface';

@Injectable({
  providedIn: 'root',
})
export class BaseFilterService {
  public data: ICharacter[] = [];
  private baseData: ICharacter[] = [];
  public pageIndex: number;

  constructor() {}

  public setData(data: ICharacter[]) {
    this.data = data;
    this.baseData = [...data];

    return this.data;
  }

  public changeData(elem: filterConfig) {
    if (elem.search) {
      this.setSearch(elem, 'name');
    }

    if (elem.sort) {
      this.setSort(elem);
    }

    return this.data;
  }

  private setSearch(elem: filterConfig, searchBy: string) {
    const regExp = new RegExp(elem.search, 'i');

    this.data = this.baseData.filter(
      (prod: any) => prod[searchBy].search(regExp) >= 0
    );
  }

  private setSort(elem: filterConfig) {
    this.data = [...(elem.search ? this.data : this.baseData)];
    this.data.sort(this.byField(elem.sort));
  }

  private byField(field: string) {
    return (a: any, b: any) =>
      a[field].toLowerCase() > b[field].toLowerCase() ? 1 : -1;
  }
}
