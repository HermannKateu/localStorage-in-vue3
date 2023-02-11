import { mount } from "@vue/test-utils";
import UncreatedHolidayPage from "../src/views/UncreatedHolidayPage.vue";

describe("UncreatedHolidayPage", () => {
  const wrapper = mount(UncreatedHolidayPage);

  it("should renders correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should have the correct svg NoHoliday", () => {
    expect(wrapper.find("[data-test='no-holiday-image']").exists()).toBe(true);
  });

  it("should contains the MainButton and have the text 'no holiday created'", () => {
    expect(wrapper.find("[data-test='create-holiday-button']").exists()).toBe(
      true
    );
    expect(wrapper.find("h2").text()).toContain("No holiday has been created");
  });
});
