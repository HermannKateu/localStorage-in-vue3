import {OpenAPI as userOpenApi} from "../services/user";
import {OpenAPI as authenticationOpenApi} from "../services/authentication";
import {OpenAPI as holidayOpenApi} from "../services/holiday";

export const prepareApis = (): void => {

    userOpenApi.BASE =
        `${import.meta.env.VITE_REST_API_BASE_URL}"/users`;
    authenticationOpenApi.BASE = `${import.meta.env.VITE_REST_API_BASE_URL}/auth`;
    holidayOpenApi.BASE = `${import.meta.env.VITE_REST_API_BASE_URL}/holidays`;

    userOpenApi.TOKEN = getPublicAccessToken;
    authenticationOpenApi.TOKEN = getPublicAccessToken;
    holidayOpenApi.TOKEN = getPublicAccessToken;

    userOpenApi.HEADERS = customHeaders;
    authenticationOpenApi.HEADERS = customHeaders;
    holidayOpenApi.HEADERS = customHeaders;
}

const getPublicAccessToken = async (): Promise<string> => {
    const publicAccessToken: string = localStorage.getItem(
        "access-token"
    ) as string;
    return publicAccessToken === null ? "" : publicAccessToken;
};

const customHeaders = async (): Promise<Record<string, string>> => {
    const publicAccessToken: string = localStorage.getItem(
        "access-token"
    ) as string;
    return {
        Authorization: `Bearer ${
            publicAccessToken === null ? "" : publicAccessToken
        }`,
    };
};