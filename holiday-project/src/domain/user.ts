import {UserDTO} from "../services/user";

export class User {
    constructor(private user: UserDTO) {}

    get id(): number {
        return this.user.id ? this.user.id : 0;
    }

    get gender(): string{
        return this.user.gender ? this.user.gender : "";
    }

    get lastName(): string{
        return this.user.lastName ? this.user.lastName : "";
    }

    get firstName(): string{
        return this.user.firstName ? this.user.firstName : "";
    }

    get email(): string{
        return this.user.email ? this.user.email : "";
    }

    get password(): string{
        return this.user.password ? this.user.password : "";
    }
}