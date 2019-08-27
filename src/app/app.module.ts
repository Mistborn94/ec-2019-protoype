import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatSliderModule } from '@angular/material';
import { GameEngineVisualiserComponent } from './nested/game-engine-visualiser/game-engine-visualiser.component';
import { EndGameDialogComponent } from './nested/game-engine-visualiser/end-game-dialog/end-game-dialog.component';
import { MatComponentsModule } from './common/mat-components.module';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    GameEngineVisualiserComponent,
    EndGameDialogComponent,
  ],
  entryComponents: [EndGameDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatComponentsModule,
    MatSliderModule,
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
