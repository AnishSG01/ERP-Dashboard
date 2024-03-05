import { NgModule } from "@angular/core";
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from "@angular/common/http";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FullCalendarModule } from "@fullcalendar/angular";
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRippleModule} from '@angular/material/core';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatStepperModule} from '@angular/material/stepper';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import {MatTooltipModule} from '@angular/material/tooltip';
import { GalleriaModule } from 'primeng/galleria';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@NgModule({
    exports:[
        MatInputModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatTableModule,
        HttpClientModule,
        MatFormFieldModule,
        MatSortModule,
        MatPaginatorModule,
        FullCalendarModule,
        SlickCarouselModule,
        MatCardModule,
        MatDividerModule,
        NgbModule,
        MatProgressBarModule,
        MatRippleModule,
        MatBadgeModule,
        MatTabsModule,
        MatExpansionModule,
        MatDatepickerModule,
        MatStepperModule,
        ReactiveFormsModule,
        FormsModule,
        CanvasJSAngularChartsModule,
        MatTooltipModule,
        GalleriaModule,
        MatSelectModule,
        MatDialogModule,
        DialogModule,
        ButtonModule
    ]
})

export class MaterialModule{}