import { Injectable } from '@angular/core';
import { ICharacter } from 'src/app/models/interfaces/character.interface';
import { filterConfig } from 'src/app/models/interfaces/filter-config.interface';

@Injectable({
  providedIn: 'root',
})
export class BaseFilterService {
  public data: ICharacter[] = [];
  public copyArr: ICharacter[] = [];
  private baseData: ICharacter[] = [];

  constructor() {}

  setData(data: ICharacter[]) {
    this.data = data;
    this.baseData = [...data];

    return this.data;
  }

  changeData(elem: filterConfig) {
    // if (elem.sort) {
    //   this.setSort(elem);
    // }

    if (elem.search) {
      this.setSearch(elem, 'name');
    }

    if (!elem.search) {
      this.resetFilterData();
    }

    return this.data;
  }

  setSearch(elem: filterConfig, searchBy: string) {
    const regExp = new RegExp(elem.search, 'i');

    this.data = this.baseData.filter(
      (prod: any) => prod[searchBy].search(regExp) >= 0
    );
  }

  // setSort(elem: filterConfig) {
  //   this.data = [...(elem.search ? this.data : this.baseData)];

  //   console.log(elem);
  //   this.data.sort(this.byField(elem.sort));
  // }

  byField(field: string) {
    return (a: any, b: any) =>
      a[field].toLowerCase() < b[field].toLowerCase() ? 1 : -1;
  }

  resetFilterData() {
    this.data = this.baseData;
  }
}
