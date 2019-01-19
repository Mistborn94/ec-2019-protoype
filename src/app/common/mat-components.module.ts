import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule, MatInputModule,
  MatListModule, MatMenuModule,
  MatProgressBarModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatButtonToggleModule,
  MatProgressSpinnerModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { TutorialDialogComponent } from './tutorial-dialog/tutorial-dialog.component';
import { WebsiteInfoDialogComponent } from './website-info-dialog/website-info-dialog.component';
import { WebsiteInfoComponent } from './website-info/website-info.component';
import { FeedbackDialogComponent } from 'src/app/common/feedback-dialog/feedback-dialog.component';
import { EndGameDialogComponent } from 'src/app/compression-crash-course/compression-showcase/page-data-and-information/end-game-dialog/end-game-dialog.component';

@NgModule({
            imports: [
              CommonModule,
              BrowserModule,
              BrowserAnimationsModule,
              MatTabsModule,
              MatToolbarModule,
              MatCardModule,
              MatGridListModule,
              MatSnackBarModule,
              MatButtonModule,
              MatStepperModule,
              MatTabsModule,
              MatDividerModule,
              MatListModule,
              MatTableModule,
              MatExpansionModule,
              MatProgressBarModule,
              MatTooltipModule,
              MatIconModule,
              MatDialogModule,
              MatSlideToggleModule,
              MatInputModule,
              MatMenuModule,
              MatButtonToggleModule,
              MatProgressSpinnerModule,
            ],
            exports: [
              CommonModule,
              BrowserModule,
              BrowserAnimationsModule,
              MatTabsModule,
              MatToolbarModule,
              MatCardModule,
              MatGridListModule,
              MatSnackBarModule,
              MatButtonModule,
              MatStepperModule,
              MatTabsModule,
              MatDividerModule,
              MatListModule,
              MatTableModule,
              MatExpansionModule,
              MatProgressBarModule,
              MatTooltipModule,
              MatIconModule,
              MatDialogModule,
              MatSlideToggleModule,
              ProgressBarComponent,
              WebsiteInfoComponent,
              MatInputModule,
              MatMenuModule,
              MatButtonToggleModule,
              MatProgressSpinnerModule,
            ],
            entryComponents: [
              TutorialDialogComponent,
              WebsiteInfoDialogComponent,
              FeedbackDialogComponent,
              EndGameDialogComponent,
            ],
            declarations: [
              ProgressBarComponent,
              TutorialDialogComponent,
              WebsiteInfoDialogComponent,
              WebsiteInfoComponent,
              FeedbackDialogComponent,
              EndGameDialogComponent,
            ]
          })
export class MatComponentsModule {
}
