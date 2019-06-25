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
export class EndGameDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<EndGameDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData | any) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.data.players.sort((a, b) => b.score - a.score);
  }

}
