# Entrypoint

It's possible to customise some service on start-up if they have enable an entrypoint (configuration, rebuild, ...).

Here is a list of services that's support entrypoint.

## linto-platform-admin
Entrypoint customisable for linto-platform-admin :
  - `--rebuild-vue-app` -> Update environement variable then rebuild frontend for "production"
  - `--rebuild-vue-app-dev` ->  Update environement variable then rebuild frontend for "development"
  - `--reinstall-vue-app` ->  Reinstall frontend
  - `--reinstall-webserver` -> Reinstall webserver

## linto-platform-bls
Entrypoint customisable for linto-platform-bls :
 - `--default-registry-npmrc` -> Use default npmrc registry for BLS and install linto-skill
 - `--set-custom-registry-npmrc` -> Set npm BLS registry to LINTO_STACK_NPM_CUSTOM_REGISTRY env variable
 - `--custom-registry-npmrc` -> Set npm BLS registry to LINTO_STACK_NPM_CUSTOM_REGISTRY env variable and install linto-skill
 - `--reinstall` -> Reinstall linto-skill