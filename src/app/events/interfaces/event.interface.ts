
import { GeneralFields } from "src/app/core/interfaces/general.fields.interface";

export enum GroupEventType {
    Adminision = 0,
    Meeting = 1,
    Conference = 2
}

export interface GroupEvent extends GeneralFields {
 
    name: string,
    date_end: string,
    capacity: number,
    date_start: string,
    description: string,
    event_image: string,
    type: GroupEventType,
    user_profile: number,
    user_profile_details: {
        first_name: string,
        last_name: string
    }
    group_details: {
        name: string
    }
    
}
