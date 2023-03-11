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
            url: '/auth/signup',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `P2002 | P2005`,
            },
        });
    }

}
