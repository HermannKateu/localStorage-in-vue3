import { isTemplateNode } from "@vue/compiler-core";
import { mount } from "@vue/test-utils";
import CreateHolidayForm from "../src/views/CreateHolidayForm.vue";

describe("CreateHolidayForm", () => {
  const wrapper = mount(CreateHolidayForm);

  it("should renders correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("have the text title", () => {
    expect(wrapper.find("h1").text()).toContain("Create holiday");
  });

  it("should contain all the input fields", () => {
    expect(wrapper.find("[data-test='starting-date']").exists()).toBe(true);
    expect(wrapper.find("[data-test='ending-date']").exists()).toBe(true);
    expect(wrapper.find("[data-test='return-date']").exists()).toBe(true);
    expect(wrapper.find("[data-test='numDays']").exists()).toBe(true);
    expect(wrapper.find("[data-test='submit-button']").exists()).toBe(true);
    expect(wrapper.find("[data-test='describe']").exists()).toBe(true);
  });
});
