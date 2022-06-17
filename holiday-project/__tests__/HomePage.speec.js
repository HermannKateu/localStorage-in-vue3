import { mount } from "@vue/test-utils";
import HomePage from "../src/views/HomePage.vue";
import MainButton from "../src/components/MainButton.vue";

describe("HomePage", () => {
    const wrapper = mount(HomePage);

    it("should renders correctly", () => {
        expect(wrapper.exists()).toBe(true);
    });

    it("should have the correct title and the 'list holiday' and 'create holiday' button", () => {
        expect(wrapper.find("h1").text()).toContain("Hello, welcome");
        expect(wrapper.find("[data-test='create-holiday']").exists()).toBe(true);
        expect(wrapper.find("[data-test='list-holiday']").exists()).toBe(true);
    });
});