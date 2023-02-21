import { mount } from "@vue/test-utils";
import HolidaysCard from "../src/components/HolidaysCard.vue";
import { holidayInfo } from "../src/data/holidayInfo";

describe("HolidaysCard", () => {
  const wrapper = mount(HolidaysCard, {
    props: {
      holiday: holidayInfo[0],
    },
  });

  it("should renders correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should have the correct props passed to it", () => {
    expect(wrapper.find("[data-test='starting-date']").text()).toContain(
      "Il y’a un jour"
    );
    expect(wrapper.find("[data-test='time']").text()).toContain("11h45");
    expect(wrapper.find("[data-test='description']").text()).toContain(
      "Lorem ipsum dolor sit amet, consectetur adipiscing"
    );
    expect(wrapper.find("[data-test='state']").text()).toContain("Annual");
    expect(wrapper.find("[data-test='date']").text()).toContain(
      "January, 12 - Febuary, 12"
    );
  });
});
