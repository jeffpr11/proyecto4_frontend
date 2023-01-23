
import { FormControl, ValidationErrors } from '@angular/forms';

import * as moment from 'moment';

export class CustomDateValidator {

    static LessThanToday(control: FormControl): ValidationErrors | null {

        let today: Date = new Date(
            moment(new Date(), moment.HTML5_FMT.DATETIME_LOCAL)
            .format().substring(0, 16));
        
        if (new Date(control.value) < today)
            return { "LessThanToday": true };

        return null;
    }

}
