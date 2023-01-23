
import { GeneralFields } from "./general.fields.interface";
import { UserCredentials } from "./user.credentials.interface";

export interface Profile extends GeneralFields {

    id: number,
    work: string,
    user: number,
    tel_1: string,
    tel_2: string,
    born_date: Date,
    card_id: string,
    address: string,
    work_tel: string,
    role: 0 | 1 | 2,
    genre: 'F' | 'M',
    card_image: string,
    profile_image: string,
    total_events?: number,
    total_groups?: number,
    total_comments?: number,
    work_address: string,
    work_activity: string,
    civil_status: 'C' | 'S',
    card_id_resource?: number,
    user_details: UserCredentials

}
