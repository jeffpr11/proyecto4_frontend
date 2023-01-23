
export enum Estate {
    Active = 0,
    Inactive = 1,
    Canceled = 2
}

export enum LastAction {
    Create = 0,
    Update = 1,
    Delete = 2
}

export interface GeneralFields {
    state?: Estate,
    date_created?: string,
    date_modified?: string,
    user_creator?: string,
    user_modifier?: string,
    last_action?: LastAction,
}
