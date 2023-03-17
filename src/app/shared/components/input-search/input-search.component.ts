import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { debounceTime, fromEvent, map } from 'rxjs';
import { SearchConfigService } from '../../services/search-config.service';
import { SessionStorageService } from '../../services/session-storage.service';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss'],
})
export class InputSearchComponent implements OnInit, AfterViewInit {
  @ViewChild('searchInput') searchInput: ElementRef;
  protected value: string = this.sessionStorageService.getData('searchValue');

  constructor(
    private searchConfigService: SearchConfigService,
    private sessionStorageService: SessionStorageService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    fromEvent(this.searchInput.nativeElement, 'input')
      .pipe(
        debounceTime(1000),
        map((event: any) => event.target.value)
      )
      .subscribe((data) => {
        this.searchConfigService.setSearch(data);
        this.sessionStorageService.setData('searchValue', data);
      });
  }
}
