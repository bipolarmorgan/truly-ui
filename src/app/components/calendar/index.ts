import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TlCalendar } from './calendar';
import { TabIndexService } from '../form/tabIndex.service';
import { IdGeneratorService } from '../core/helper/idgenerator.service';
import { NameGeneratorService } from '../core/helper/namegenerator.service';
import { DirectiveModule } from '../core/directives/index';
import { NavigatorModule } from '../navigator/index';
import { TlCalendarDays } from './parts/calendar-days';
import { TlCalendarMonths } from './parts/calendar-months';
import { TlCalendarYears } from './parts/calendar-years';

export * from './calendar';

@NgModule({
    imports: [
        CommonModule,
        DirectiveModule,
        NavigatorModule
    ],
    declarations: [
        TlCalendar,
        TlCalendarDays,
        TlCalendarMonths,
        TlCalendarYears
    ],
    exports: [
        TlCalendar,
        TlCalendarDays,
        TlCalendarMonths,
        TlCalendarYears
    ],
    providers: [
        TabIndexService,
        IdGeneratorService,
        NameGeneratorService,
    ],
    entryComponents: [
        TlCalendarDays,
        TlCalendarMonths,
        TlCalendarYears
    ]
})
export class CalendarModule {}