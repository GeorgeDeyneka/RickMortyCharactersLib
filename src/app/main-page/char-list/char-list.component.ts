import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ICharacter } from 'src/app/models/interfaces/character.interface';
import { filterConfig } from 'src/app/models/interfaces/filter-config.interface';
import { BaseFilterService } from 'src/app/shared/services/base-filter.service';
import { BaseHttpService } from 'src/app/shared/services/base-http.service';
import { SearchConfigService } from 'src/app/shared/services/search-config.service';

@Component({
  selector: 'app-char-list',
  templateUrl: './char-list.component.html',
  styleUrls: ['./char-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharListComponent implements OnInit {
  constructor(
    private baseHttpService: BaseHttpService,
    private searchConfigService: SearchConfigService,
    private baseFilterService: BaseFilterService,
    private cdRef: ChangeDetectorRef
  ) {}

  public data: Array<ICharacter> = [];
  public slicedData: Array<ICharacter> = [];
  private filterSubj$: Subscription;
  private dataSubj$: Subscription;

  ngOnInit(): void {
    this.dataSubj$ = this.baseHttpService
      .getList<Array<ICharacter>>()
      .subscribe((data: any) => {
        this.data = this.baseFilterService.setData(data.results);

        if (this.data) {
          this.filterSubj$ = this.searchConfigService.configuration$.subscribe(
            (elem) => this.changeData(elem)
          );
        }
      });
  }


  setDataForCurrent(slicedData: ICharacter[]) {
    this.slicedData = slicedData;
    this.cdRef.detectChanges();
  }

  changeData(elem: filterConfig) {
    this.data = this.baseFilterService.changeData(elem);
    this.cdRef.detectChanges();
  }

  ngOnDestroy() {
    this.filterSubj$.unsubscribe();
    this.dataSubj$.unsubscribe();
    this.searchConfigService.resetConfig();
  }
}
