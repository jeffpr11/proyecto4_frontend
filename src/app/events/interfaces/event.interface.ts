
import { GeneralFields } from "src/app/core/interfaces/general.fields.interface";

export enum GroupEventType {
    Adminision = 0,
    Meeting = 1,
    Conference = 2
}

export interface GroupEvent extends GeneralFields {
 
    "name": string,
    "description": string,
    "type": GroupEventType,
    "date_start": string,
    "date_end": string,
    "capacity": number
    
}
