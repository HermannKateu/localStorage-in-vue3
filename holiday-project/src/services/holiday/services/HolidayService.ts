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
    public static getAllHolidays({
        fieldsToExtractCode,
    }: {
        /**
         * specify the fields that will be present on the response
         */
        fieldsToExtractCode: string,
    }): CancelablePromise<Array<HolidayDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/holidays',
            query: {
                'fieldsToExtractCode': fieldsToExtractCode,
            },
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
        fieldsToExtractCode,
    }: {
        /**
         * the holiday's id to get
         */
        id: string,
        /**
         * specify the fields that will be present the response
         */
        fieldsToExtractCode: string,
    }): CancelablePromise<HolidayDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/holidays/{id}',
            path: {
                'id': id,
            },
            query: {
                'fieldsToExtractCode': fieldsToExtractCode,
            },
        });
    }

}
