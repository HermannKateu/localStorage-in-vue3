/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserDTO } from '../models/UserDTO';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserService {

    /**
     * Fetch a User by email
     * Fetch a User by email
     * @returns UserDTO successful operation
     * @throws ApiError
     */
    public static getUserByEmail({
        email,
        fieldsToExtractCode,
    }: {
        /**
         * the user's id to get
         */
        email: string,
        /**
         * specify the fields that will be present the response
         */
        fieldsToExtractCode: string,
    }): CancelablePromise<UserDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/{id}',
            path: {
                'email': email,
            },
            query: {
                'fieldsToExtractCode': fieldsToExtractCode,
            },
        });
    }

    /**
     * Update an existing User
     * Update an existing User
     * @returns void
     * @throws ApiError
     */
    public static updateUser({
        email,
        requestBody,
    }: {
        /**
         * the user's email to update
         */
        email: string,
        /**
         * User object that need to be edit
         */
        requestBody: UserDTO,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/user/{id}',
            path: {
                'email': email,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
