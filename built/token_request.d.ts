import { StringMap } from './types';
export declare const GRANT_TYPE_AUTHORIZATION_CODE = "authorization_code";
export declare const GRANT_TYPE_REFRESH_TOKEN = "refresh_token";
export declare const GRANT_TYPE_CLIENT_CREDENTIALS = "client_credentials";
/**
 * Represents the Token Request as JSON.
 */
export interface TokenRequestJson {
    grant_type: string;
    code?: string;
    refresh_token?: string;
    redirect_uri?: string;
    client_id: string;
    client_secret?: string;
    extras?: StringMap;
    scope?: string;
}
/**
 * Represents an Access Token request.
 * For more information look at:
 * https://tools.ietf.org/html/rfc6749#section-4.1.3
 */
export declare class TokenRequest {
    clientId: string;
    clientSecret: string | undefined;
    redirectUri: string | undefined;
    grantType: string;
    code: string | undefined;
    refreshToken: string | undefined;
    extras: StringMap | undefined;
    scope: string | undefined;
    constructor(request: TokenRequestJson);
    /**
     * Serializes a TokenRequest to a JavaScript object.
     */
    toJson(): TokenRequestJson;
    toStringMap(): StringMap;
}
