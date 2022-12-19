
import { GeneralFields, LastAction } from "../core/interfaces/general.fields.interface";

export class Utils {

    public static setGeneralFields(registry: GeneralFields) {

        registry.date_created = (new Date()).toISOString().slice(0, 10);
        registry.date_modified = (new Date()).toISOString().slice(0, 10);
        registry.user_creator = localStorage.getItem("username");
        registry.user_modifier = localStorage.getItem("username");
        registry.last_action = LastAction.Create;

    }

}
