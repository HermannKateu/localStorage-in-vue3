import {OpenAPI as userOpenApi} from "../services/user";
import {OpenAPI as authenticationOpenApi} from "../services/authentication";
import {OpenAPI as holidayOpenApi} from "../services/holiday";

export const prepareApis = (): void => {
    userOpenApi.BASE =
        import.meta.env.VITE_REST_API_BASE_URL + "/users";
    authenticationOpenApi.BASE = import.meta.env.VITE_REST_API_BASE_URL + "/auth";
    holidayOpenApi.BASE = import.meta.env.VITE_REST_API_BASE_URL + "/holidays";


    userOpenApi.HEADERS = customHeaders;
    authenticationOpenApi.HEADERS = customHeaders;
    holidayOpenApi.HEADERS = customHeaders;

};

type Token = {
    access_token: string;
};

const customHeaders = async (): Promise<Record<string, string>> => {
    const token:Token = JSON.parse(localStorage.getItem("token") as string)

    return {
        Authorization : token ? `Bearer ${token.access_token}` : "",
    };
};