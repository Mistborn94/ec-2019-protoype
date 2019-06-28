import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

class DialogData {

}

@Component({
  selector: 'app-end-game-dialog',
  templateUrl: './end-game-dialog.component.html',
  styleUrls: ['./end-game-dialog.component.scss',
    '../game-engine-visualiser/game-engine-visualiser.component.scss'],
})
export class EndGameDialogComponent {

  constructor(private dialogRef: MatDialogRef<EndGameDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData | any) {
  }

}
