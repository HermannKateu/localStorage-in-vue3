/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthDTO } from '../models/AuthDTO';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthService {

    /**
     * Create a new user
     * Create a new user
     * @returns string successful operation
     * @throws ApiError
     */
    public static createUser({
        requestBody,
    }: {
        /**
         * User object that need to be created
         */
        requestBody: AuthDTO,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/signup',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `P2002`,
            },
        });
    }

    /**
     * Connect a user
     * Connect a user
     * @returns string successful operation
     * @throws ApiError
     */
    public static connectUser({
        requestBody,
    }: {
        /**
         * User object that need to connected
         */
        requestBody: AuthDTO,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/signin',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `P2005 | P2006`,
            },
        });
    }

}
