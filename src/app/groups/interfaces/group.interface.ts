
import { GeneralFields } from "src/app/core/interfaces/general.fields.interface";
import { Profile } from "src/app/core/interfaces/profile.interface";

export interface Group extends GeneralFields {
    id?: number,
    name: string,
    level: number,
    members: Profile[],
    description: string,
    group_leader: number,
    principal_group: number,
    leader_details?: Profile,
}
