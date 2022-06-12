import { shallowMount } from '@vue/test-utils';
import LoginPage from "../views/LoginPage.vue";

describe("LoginPage", () => {
    const wrapper = shallowMount(LoginPage);

    it("should renders correctly", () => {
        expect(wrapper.find("h1")).toContain("Login")
    });
});