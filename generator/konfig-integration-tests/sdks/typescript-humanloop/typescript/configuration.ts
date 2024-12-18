/* tslint:disable */
/* eslint-disable */
/*
Humanloop API

The Humanloop API allows you to interact with Humanloop from your product or service.

You can do this through HTTP requests from any language or via our official Python or TypeScript SDK.

To install the official [Python SDK](https://pypi.org/project/humanloop/), run the following command:

```bash
pip install humanloop
```

To install the official [TypeScript SDK](https://www.npmjs.com/package/humanloop), run the following command:

```bash
npm i humanloop
```

---

Guides and further details about key concepts can be found in [our docs](https://docs.humanloop.com/).

The version of the OpenAPI document: 4.0.1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import fetchAdapter from "konfig-axios-fetch-adapter"

type ApiKey =
  | string
  | ((keyParamName: string) => string)
  | ((keyParamName: string) => Promise<string>)
  | { [apiKeyName: string]: string | undefined };

export interface ConfigurationParameters {
    openaiApiKey?: string;
    openaiAzureApiKey?: string;
    openaiAzureEndpointApiKey?: string;
    cohereApiKey?: string;
    ai21ApiKey?: string;
    mockApiKey?: string;
    anthropicApiKey?: string;

    /**
     * parameter for apiKey security
     * @param name security name
     * @memberof Configuration
     */
    apiKey: ApiKey;
    username?: string;
    password?: string;
    accessToken?: string | Promise<string> | ((name?: string, scopes?: string[]) => string) | ((name?: string, scopes?: string[]) => Promise<string>);
    basePath?: string;
    baseOptions?: any;
    useFetch?: boolean;
    userAgent?: string;
    formDataCtor?: new () => any;
}

export class Configuration {
    /**
    * Client state
    */
    openaiApiKey?: string;
    /**
    * Client state
    */
    openaiAzureApiKey?: string;
    /**
    * Client state
    */
    openaiAzureEndpointApiKey?: string;
    /**
    * Client state
    */
    cohereApiKey?: string;
    /**
    * Client state
    */
    ai21ApiKey?: string;
    /**
    * Client state
    */
    mockApiKey?: string;
    /**
    * Client state
    */
    anthropicApiKey?: string;
    /**
     * parameter for apiKey security
     * @param name security name
     * @memberof Configuration
     */
    apiKey: ApiKey;
    /**
     * parameter for basic security
     *
     * @type {string}
     * @memberof Configuration
     */
    username?: string;
    /**
     * parameter for basic security
     *
     * @type {string}
     * @memberof Configuration
     */
    password?: string;
    /**
     * parameter for oauth2 security
     * @param name security name
     * @param scopes oauth2 scope
     * @memberof Configuration
     */
    accessToken?: string | Promise<string> | ((name?: string, scopes?: string[]) => string) | ((name?: string, scopes?: string[]) => Promise<string>);
    /**
     * When the access token expires, measured in Unix time in seconds
     */
    accessTokenExpiresIn?: number;
    /**
     * override base path
     *
     * @type {string}
     * @memberof Configuration
     */
    basePath?: string;
    /**
     * base options for axios calls
     *
     * @type {any}
     * @memberof Configuration
     */
    baseOptions?: any;
    /**
     * The FormData constructor that will be used to create multipart form data
     * requests. You can inject this here so that execution environments that
     * do not support the FormData class can still run the generated client.
     *
     * @type {new () => FormData}
     */
    formDataCtor?: new () => any;
    /**
     * Default User-Agent header
     */
    userAgent: string;

    constructor(param: ConfigurationParameters) {
        this.openaiApiKey = param.openaiApiKey
        this.openaiAzureApiKey = param.openaiAzureApiKey
        this.openaiAzureEndpointApiKey = param.openaiAzureEndpointApiKey
        this.cohereApiKey = param.cohereApiKey
        this.ai21ApiKey = param.ai21ApiKey
        this.mockApiKey = param.mockApiKey
        this.anthropicApiKey = param.anthropicApiKey

        this.apiKey = param.apiKey
        if (this.apiKey === undefined) {
            this.apiKey = {}
        }
        this.username = param.username;
        this.password = param.password;
        this.accessToken = param.accessToken;
        this.basePath = param.basePath;
        this.baseOptions = param.baseOptions ?? {};
        if (param.useFetch ?? true) {
            this.baseOptions["adapter"] = fetchAdapter
        }
        this.userAgent = param.userAgent === undefined ? "Konfig/0.5.0-alpha.41/typescript" : param.userAgent;
        this.formDataCtor = param.formDataCtor;
    }

    /**
     * Check if the given MIME is a JSON MIME.
     * JSON MIME examples:
     *   application/json
     *   application/json; charset=UTF8
     *   APPLICATION/JSON
     *   application/vnd.company+json
     * @param mime - MIME (Multipurpose Internet Mail Extensions)
     * @return True if the given MIME is JSON, false otherwise.
     */
    public isJsonMime(mime: string): boolean {
        const jsonMime: RegExp = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    }
}
