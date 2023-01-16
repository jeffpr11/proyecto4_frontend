
import { environment } from "src/environments/environment";
import { AppConfig } from "../core/interfaces/appconfig.interface";
import { GeneralFields, LastAction } from "../core/interfaces/general.fields.interface";

export class Utils {
    
    public static setGeneralFields(registry: GeneralFields) {

        registry.date_created = (new Date()).toISOString().slice(0, 10);
        registry.date_modified = (new Date()).toISOString().slice(0, 10);
        registry.user_creator = localStorage.getItem("username");
        registry.user_modifier = localStorage.getItem("username");
        registry.last_action = LastAction.Create;

    }
    
    public static updateGeneralFields(registry: GeneralFields) {

        registry.date_modified = (new Date()).toISOString().slice(0, 10);
        registry.user_modifier = localStorage.getItem("username");
        registry.last_action = LastAction.Update;

    }

    public static getFormErrors(errors: any) {
      
      const result: any = [];
      Object.keys(errors).forEach(key => {
    
          errors[key].forEach((error: string) => {
            result.push(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${error}`);
          });

      });
      
      return result;
      
    }

    public static getAppConfig(): AppConfig {

      let mainGroupName = environment.app_config.main_group_name,
        subGroupName = environment.app_config.sub_group_name;
      
      mainGroupName = mainGroupName.charAt(0).toUpperCase() + mainGroupName.slice(1);
      subGroupName = subGroupName.charAt(0).toUpperCase() + subGroupName.slice(1);

      return {
        mainGroupName,
        subGroupName
      }

    }
    
}
