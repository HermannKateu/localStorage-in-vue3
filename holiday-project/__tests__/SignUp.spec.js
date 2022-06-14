import { mount } from "@vue/test-utils";
import SignUpPage from "../src/views/SignUpPage.vue";
import { FORM_DATA } from "../src/store/loginStore"

describe("SignUpPage", () => {
    let wrapper;
    let storage; 
    beforeEach(() => {
        storage = jest.spyOn(Storage.prototype, "getItem");
        wrapper = mount(SignUpPage); 
    });

    it("should renders correctly", () => {
        expect(wrapper.exists()).toBe(true);
    });

    it("checks if 'EmailInput,PasswordInput, MainButton and AgeInput' exists", () => {
        expect(wrapper.find("[data-test='email-input']").exists()).toBe(true);
        expect(wrapper.find("[data-test='password-input']").exists()).toBe(true);
        expect(wrapper.find("[data-test='submit-button']").exists()).toBe(true);
        expect(wrapper.find("[data-test='age-input']").exists()).toBe(true);
    });

    it("should fill thesame email and password fields then login the user", async () => {
        const email = wrapper.find("[data-test='email-input']").get("input");
        const password = wrapper.find("[data-test='password-input']").get("input");
        const button = wrapper.find("[data-test='submit-button']");
    
        await email.setValue("sontiahermann3@gmail.com");
        expect(email.element.value).toBe("sontiahermann3@gmail.com");

        await password.setValue("12345");
        expect(password.element.value).toBe("12345");

        await button.get("button").trigger("click");
        expect(storage).toHaveBeenCalled();
        expect(storage).toHaveBeenCalledWith(FORM_DATA);
    });
});