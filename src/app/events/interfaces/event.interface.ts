
import { GeneralFields } from "src/app/core/interfaces/general.fields.interface";
import { GroupComment } from "./comment.interface";

export enum GroupEventType {
    Adminision = 0,
    Meeting = 1,
    Conference = 2
}

export interface GroupEvent extends GeneralFields {

    id?: number,
    name: string,
    date_end: string,
    capacity: number,
    date_start: string,
    description: string,
    event_image?: string,
    type?: GroupEventType,
    user_profile: number,
    event_image_file?: File,
    total_comments: number,
    user_profile_details?: {
        user_details: {
            first_name: string,
            last_name: string
        },
        profile_image: string
    }
    group_details?: {
        name: string
    },
    comments: GroupComment[]
    
}
