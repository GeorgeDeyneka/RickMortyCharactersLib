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

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnChanges {
  @ViewChild('prevBtn') prevBtn: ElementRef;
  @ViewChild('nextBtn') nextBtn: ElementRef;

  @Output() OutputEmit = new EventEmitter<ICharacter[]>();

  @Input() public inputData: ICharacter[];
  @Input() public itemsPerPage: number = 8;
  @Input() public currentPage: number = 1;

  public slicedData: ICharacter[] = [];
  public collectionLength: number;
  public maxPage: number;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.currentPage = 1;
    this.collectionLength = this.inputData.length;
    this.updateData();
  }

  increment() {
    if (this.currentPage < this.maxPage) {
      this.currentPage++;
      this.updateData();
    }
  }

  decrement() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateData();
    }
  }

  updateData() {
    this.maxPage = Math.ceil(this.collectionLength / this.itemsPerPage);

    const currentIndex = this.currentPage - 1;
    const start = currentIndex * this.itemsPerPage;
    const end = start + this.itemsPerPage;

    this.slicedData = this.inputData.slice(start, end);
    this.OutputEmit.emit(this.slicedData);
  }
}
