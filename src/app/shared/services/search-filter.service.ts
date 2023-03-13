import { Injectable } from '@angular/core';
import { ICharacter } from 'src/app/models/interfaces/character.interface';
import { filterConfig } from 'src/app/models/interfaces/filter-config.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchFilterService {
  public data: ICharacter[] = [];
  public copyArr: ICharacter[] = [];
  private baseData: ICharacter[] = [];

  constructor() {}

  setData(data: ICharacter[]) {
    this.data = data;
    this.baseData = [...data];

    return this.data;
  }

  setSearch(elem: filterConfig, searchBy: string) {
    const regExp = new RegExp(elem.search, 'i');

    this.data = this.baseData.filter(
      (prod: any) => prod[searchBy].search(regExp) >= 0
    );
  }

  changeData(elem: filterConfig) {
    if (elem.search) {
      this.setSearch(elem, 'name');
    } else {
      this.resetFilterData();
    }

    return this.data;
  }

  resetFilterData() {
    this.data = this.baseData;
  }
}
