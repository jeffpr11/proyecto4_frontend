
import { GeneralFields } from "src/app/core/interfaces/general.fields.interface";

export interface GroupComment extends GeneralFields {

    id?: number,
    content: string,
    level: number,
    event: number,
    user: string,
    principal_comment?: number,
    user_profile_details?: {
        user_details: {
            first_name: string,
            last_name: string
        },
        profile_image: string
    }

}
