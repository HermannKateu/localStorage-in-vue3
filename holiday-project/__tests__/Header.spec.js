import { mount } from "@vue/test-utils";
import HeaderSection from "../src/components/HeaderSection.vue";
import { isLogin } from "../src/store/loginStore";

describe("HeaderSection", () => {
  const wrapper = mount(HeaderSection);

  it("should renders correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should desactivate the style-header class on login prevent", () => {
    expect(wrapper.classes()).not.toContain("style-header");
  });

  // it("should activate the style-header class when login succed", () => {
  //     expect(wrapper.classes()).toContain("style-header");
  // });
});
