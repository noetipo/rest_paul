/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const urls: any = {
  dev: 'http://192.168.1.103:8000/',
};

const urlsReniecSunat: any = {
  dev: 'https://tecactus.com/',
};

export const environment = {
  production: false,
  urls: urls.dev,
};


export const environmentReniecSunat = {
  production: false,
  urls: urlsReniecSunat.dev,
};
