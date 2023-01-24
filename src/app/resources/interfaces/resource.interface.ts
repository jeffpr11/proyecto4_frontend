import { GeneralFields } from "src/app/core/interfaces/general.fields.interface";
import { Group } from "../../groups/interfaces/group.interface";

export interface Resource extends GeneralFields {
    id?: number,
    groups_details: {
        name: string,
        user_last_name: string,
        user_first_name: string
    },
    resource_file?: File,
    name: string,
    route: string,
    groups: number[]
}
