/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HolidayDTO } from '../models/HolidayDTO';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class HolidayService {

    /**
     * Fetch Holidays
     * Fetch Holidays
     * @returns HolidayDTO successful operation
     * @throws ApiError
     */
    public static getAllHolidays(): CancelablePromise<Array<HolidayDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/',
        });
    }

    /**
     * Fetch a Holiday by id
     * Fetch a Holiday by id
     * @returns HolidayDTO successful operation
     * @throws ApiError
     */
    public static getHolidayById({
        id,
    }: {
        /**
         * the holiday's id to get
         */
        id: number,
    }): CancelablePromise<HolidayDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * delete an existing User
     * delete an existing User
     * @returns void
     * @throws ApiError
     */
    public static deleteHoliday({
        id,
    }: {
        /**
         * the holiday's id to delete
         */
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * create an a holiday
     * create an existing User
     * @returns void
     * @throws ApiError
     */
    public static createHoliday({
        requestBody,
    }: {
        /**
         * Holiday object that need to be edit
         */
        requestBody: HolidayDTO,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/holiday',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
