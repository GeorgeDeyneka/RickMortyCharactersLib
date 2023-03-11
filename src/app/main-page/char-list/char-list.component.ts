import { Component, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/models/interfaces/character.interface';
import { BaseHttpService } from 'src/app/shared/services/base-http.service';

@Component({
  selector: 'app-char-list',
  templateUrl: './char-list.component.html',
  styleUrls: ['./char-list.component.scss'],
})
export class CharListComponent implements OnInit {
  constructor(private baseHttpService: BaseHttpService) {}

  public data: Array<ICharacter> = [];

  ngOnInit(): void {
    this.baseHttpService.getList().subscribe((data: any) => {
      this.data = data.results;
    });

  }
}
