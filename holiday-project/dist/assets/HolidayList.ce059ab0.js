import {
  n as h,
  o,
  c as i,
  d as t,
  t as a,
  b as x,
  e as s,
  f as l,
  p as y,
  q as f,
  u,
  k as _,
  s as p,
} from "./index.61f7007d.js";
import { h as g } from "./holidayInfo.2050920c.js";
const b = {
    class:
      "bg-gray-400 p-5 border border-gray-200 rounded-lg font-WorkSans w-full flex flex-col gap-y-4 shadow-[#D1E4FA] shadow-lg",
  },
  w = { class: "flex flex-row justify-between text-gray text-sm font-medium" },
  k = { "data-test": "starting-date" },
  v = { "data-test": "time" },
  $ = { class: "text-blue-100 font-bold text-xl", "data-test": "date" },
  C = { class: "text-gray-700 text-sm", "data-test": "description" },
  B = {
    class:
      "text-blue-100 text-sm font-semibold bg-gray-600 rounded-xl py-1 w-20",
    type: "submit",
    "data-test": "state",
  },
  j = h({
    name: "HolidaysCard",
    props: { holiday: { type: Object } },
    setup(e) {
      return (r, c) => (
        o(),
        i("div", b, [
          t("div", w, [
            t("span", k, a(e.holiday.starting), 1),
            t("span", v, a(e.holiday.time), 1),
          ]),
          t("div", $, a(e.holiday.date), 1),
          t("span", C, a(e.holiday.description), 1),
          t("button", B, a(e.holiday.state), 1),
        ])
      );
    },
  }),
  H = {
    class:
      "bg-white px-4 flex flex-col font-WorkSans py-20 gap-y-12 py-20 md:max-w-[768px] md:bg-white md:mx-auto lg:max-w-[1649px]",
  },
  S = { class: "flex justify-between relative" },
  D = t(
    "h1",
    { class: "text-gray-800 font-semibold text-3xl" },
    "Holidays",
    -1
  ),
  E = t(
    "span",
    {
      class:
        "text-gray-50 font-medium text-5xl block md:hidden absolute right-0 -top-2",
      "data-test": "holiday-form",
    },
    "+",
    -1
  ),
  F = {
    class:
      "flex gap-y-12 flex-col md:flex-row md:flex-wrap md:gap-x-16 md:w-full md:mx-auto",
  },
  V = {
    name: "HolidayList",
    setup(e) {
      return (r, c) => {
        const d = x("router-link");
        return (
          o(),
          i("div", H, [
            t("div", S, [
              D,
              s(d, { to: "/create-holiday" }, { default: l(() => [E]), _: 1 }),
              s(
                d,
                { to: "/create-holiday" },
                {
                  default: l(() => [
                    s(_, {
                      label: "Create holiday",
                      class:
                        "bg-blue-100 hidden h-14 text-lg w-60 text-white rounded-md py-4 md:block",
                      "data-test": "holiday-form",
                    }),
                  ]),
                  _: 1,
                }
              ),
            ]),
            t("div", F, [
              (o(!0),
              i(
                y,
                null,
                f(
                  u(g),
                  (m, n) => (
                    o(),
                    p(
                      d,
                      { to: `/holiday-item/${n}`, class: "grow", key: n },
                      {
                        default: l(() => [
                          s(
                            j,
                            { holiday: m, "data-test": "holiday-card" },
                            null,
                            8,
                            ["holiday"]
                          ),
                        ]),
                        _: 2,
                      },
                      1032,
                      ["to"]
                    )
                  )
                ),
                128
              )),
            ]),
          ])
        );
      };
    },
  };
export { V as default };
