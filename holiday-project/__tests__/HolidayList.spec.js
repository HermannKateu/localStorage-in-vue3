import { mount } from "@vue/test-utils";
import HolidayList from "../src/views/HolidayList.vue";
import HolidaysCard from "../src/components/HolidaysCard.vue";
import { holidayInfo } from "../src/data/holidayInfo"

describe("HolidayList", () => {
    const wrapper = mount(HolidayList);

    it("should renders correctly", () => {
        expect(wrapper.exists()).toBe(true);
    });

    it("should have all the holidays list", () => {
        const holidays = wrapper.findAllComponents(HolidaysCard);
        expect(holidays.length).toBe(6);
        holidays.forEach((holiday,index) => {
            expect(holiday.props("holiday")).toBe(holidayInfo[index]);
        });
    });
});