import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
@NgModule({
    imports: [
        MatDialogModule,
        MatButtonModule,
        MatPaginatorModule,
        MatMenuModule,
        MatIconModule,
        MatBadgeModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatInputModule,
        MatTooltipModule,
        MatToolbarModule,
        MatMenuModule,
        MatButtonModule,
        MatListModule,
        MatIconModule,
        RouterModule,
        MatButtonModule,
        CommonModule,
        MatSelectModule,
        FormsModule,
        MatSidenavModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatBadgeModule,
        MatExpansionModule,
        MatTooltipModule,
        MatTableModule,
        MatTabsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRippleModule,
        MatCardModule       
    ],
    exports: [
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatBadgeModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatInputModule,
        MatTooltipModule,
        MatToolbarModule,
        MatMenuModule,
        MatButtonModule,
        MatListModule,
        MatIconModule,
        RouterModule,
        MatButtonModule,
        CommonModule,
        MatSelectModule,
        FormsModule,
        MatSidenavModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatBadgeModule,
        MatExpansionModule,
        MatTooltipModule,
        MatMenuModule,
        MatTableModule,
        MatPaginator,
        MatPaginatorModule,
        MatTabsModule,
        MatProgressBarModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRippleModule,
        MatCardModule
    ]
})
export class MaterialModule { }
