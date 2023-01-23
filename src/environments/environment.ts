// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_main_url: 'http://localhost:8000/api',
  resources: {
    main_resource: '/organizations/resource',
    main_group: '/organizations/group',
    profile: '/user/profile',
    event: '/events/event',
    comment: '/events/comment',
  },
  app_config: {
    main_group_name: 'Ministerio',
    sub_group_name: 'Subgrupo'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
