// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// export const environment = {
//   firebase: {
//     projectId: 'ingreso-egreso-app-49be8',
//     appId: '1:83628230001:web:72e5c2d0af13a788d522d0',
//     storageBucket: 'ingreso-egreso-app-49be8.appspot.com',
//     locationId: 'us-central',
//     apiKey: 'AIzaSyBvaKBRWUA85OUwxdMsDl9HILVFwLdPE6U',
//     authDomain: 'ingreso-egreso-app-49be8.firebaseapp.com',
//     messagingSenderId: '83628230001',
//     measurementId: 'G-92L6Z0GETQ',
//   },
//   production: false
// };

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBvaKBRWUA85OUwxdMsDl9HILVFwLdPE6U',
    authDomain: 'ingreso-egreso-app-49be8.firebaseapp.com',
    projectId: 'ingreso-egreso-app-49be8',
    storageBucket: 'ingreso-egreso-app-49be8.appspot.com',
    messagingSenderId: '83628230001',
    appId: '1:83628230001:web:72e5c2d0af13a788d522d0',
    measurementId: 'G-92L6Z0GETQ',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
