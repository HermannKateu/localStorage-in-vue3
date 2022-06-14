import { mount } from "@vue/test-utils";
import HeaderSection from "../src/components/HeaderSection.vue";
import { isLogin } from "../src/store/loginStore";

describe("HeaderSection", () => {
    const store = isLogin;
    const wrapper = mount(HeaderSection, {
        global: {
            plugins: [store]
        }
    });

    it("should renders correctly", () => {
        expect(wrapper.exists()).toBe(true);
    });

    it("it desactivate the close on login prevent", () => {
        
    });
});