import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ICharacter } from 'src/app/models/interfaces/character.interface';
import { SessionStorageService } from '../../services/session-storage.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnChanges {
  @Output() OutputEmit = new EventEmitter<ICharacter[]>();

  @Input() public inputData: ICharacter[];
  @Input() public itemsPerPage: number = 8;

  protected currentPage: number = 1;
  protected slicedData: ICharacter[] = [];
  protected collectionLength: number;
  protected maxPage: number;
  private cashMaxPage: number = 0;

  constructor(private sessionStorageService: SessionStorageService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.collectionLength = this.inputData.length;
    this.currentPage = this.sessionStorageService.getData('currentPage') || 1;
    this.updateData();
  }

  protected increment() {
    if (this.currentPage < this.maxPage) {
      this.currentPage++;
      this.sessionStorageService.setData('currentPage', this.currentPage);
      this.updateData();
    }
  }

  protected decrement() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.sessionStorageService.setData('currentPage', this.currentPage);
      this.updateData();
    }
  }

  private updateData() {
    this.maxPage = Math.ceil(this.collectionLength / this.itemsPerPage);

    if (this.cashMaxPage && this.maxPage !== this.cashMaxPage) {
      this.currentPage = 1;
      this.sessionStorageService.removeData('currentPage');
    }

    this.cashMaxPage = this.maxPage;

    const currentIndex = this.currentPage - 1;
    const start = currentIndex * this.itemsPerPage;
    const end = start + this.itemsPerPage;

    this.slicedData = this.inputData.slice(start, end);
    this.OutputEmit.emit(this.slicedData);
  }
}
