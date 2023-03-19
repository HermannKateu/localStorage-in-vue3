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
        id: string,
    }): CancelablePromise<HolidayDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{id}',
            path: {
                'id': id,
            },
        });
    }

}
