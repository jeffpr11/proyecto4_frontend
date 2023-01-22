import { GeneralFields } from "src/app/core/interfaces/general.fields.interface";
import { Group } from "../../groups/interfaces/group.interface";

export interface Resource extends GeneralFields {
    id?: number,
    groups_details: Group[],
    name: string,
    route: string,
    groups: number[]
}
