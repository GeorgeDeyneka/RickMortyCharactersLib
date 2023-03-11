import { Component, Input, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/models/interfaces/character.interface';

@Component({
  selector: 'app-char-item',
  templateUrl: './char-item.component.html',
  styleUrls: ['./char-item.component.scss'],
})
export class CharItemComponent implements OnInit {
  @Input() charItem: ICharacter;

  constructor() {}

  ngOnInit(): void {}
}
