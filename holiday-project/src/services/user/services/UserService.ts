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
    public static getUser(): CancelablePromise<UserDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user',
        });
    }

    /**
     * Update an existing User
     * Update an existing User
     * @returns void
     * @throws ApiError
     */
    public static updateUser({
        id,
        requestBody,
    }: {
        /**
         * the user's id to update
         */
        id: number,
        /**
         * User object that need to be edit
         */
        requestBody: UserDTO,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
