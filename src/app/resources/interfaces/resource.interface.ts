import { GeneralFields } from "src/app/core/interfaces/general.fields.interface";
import { Group } from "../../groups/interfaces/group.interface";

export interface Resource extends GeneralFields {
    id?: number,
    groups_details: Group[],
    state: number,
    date_created: string,
    date_modified: string,
    user_creator: string,
    user_modifier: string,
    last_action: number,
    name: string,
    route: string,
    groups: number[]
}
