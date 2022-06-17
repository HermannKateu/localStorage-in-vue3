import { mount } from "@vue/test-utils";
import LoginPage from "../src/views/LoginPage.vue"

describe("LoginPage", ()  => {
    const wrapper = mount(LoginPage);
    it("should renders correctly", () => {
        expect(wrapper.exists()).toBe(true);
    });
});