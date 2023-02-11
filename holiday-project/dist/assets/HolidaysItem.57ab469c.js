import {
  m as i,
  o as d,
  c as n,
  d as t,
  y as x,
  e as c,
  t as e,
  u as o,
} from "./index.61f7007d.js";
import { h as r } from "./holidayInfo.2050920c.js";
const m = {},
  h = { viewBox: "0 0 21 23", xmlns: "http://www.w3.org/2000/svg" },
  f = t(
    "path",
    {
      d: `M18.4053 2.69385H17.4053V0.693848H15.4053V2.69385H5.40527V0.693848H3.40527V2.69385H2.40527C1.30527 2.69385 0.405273 3.59385 0.405273 4.69385V20.6938C0.405273 21.7938 1.30527 22.6938 2.40527 22.6938H18.4053C19.5053 22.6938 20.4053 21.7938 20.4053
     20.6938V4.69385C20.4053 3.59385 19.5053 2.69385 18.4053 2.69385ZM18.4053 20.6938H2.40527V7.69385H18.4053V20.6938Z`,
    },
    null,
    -1
  ),
  p = [f];
function g(l, a) {
  return d(), n("svg", h, p);
}
var _ = i(m, [["render", g]]);
const w = {},
  y = { viewBox: "0 0 14 18", xmlns: "http://www.w3.org/2000/svg" },
  u = t(
    "path",
    {
      d: "M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z",
    },
    null,
    -1
  ),
  v = [u];
function b(l, a) {
  return d(), n("svg", y, v);
}
var H = i(w, [["render", b]]);
const V = { class: "px-4 py-16 font-WorkSans md:px-28 md:py-32" },
  $ = { class: "flex justify-between" },
  k = t(
    "h1",
    { class: "text-gray-800 text-3xl font-semibold md:text-5xl" },
    " Details ",
    -1
  ),
  C = {
    class:
      "text-gray-800 text-lg font-bold text-center my-6 md:text-2xl md:text-justify",
  },
  I = {
    class: "flex flex-col gap-y-6 grow md:flex-row md:flex-wrap md:gap-y-20",
  },
  B = { class: "font-medium md:w-6/12" },
  j = t("span", { class: "text-gray md:text-lg" }, "Type", -1),
  M = { class: "text-black text-base md:text-xl" },
  Z = { class: "font-medium grow flex flex-col gap-y-2 md:w-6/12" },
  D = t("span", { class: "text-gray md:text-lg" }, "Starts", -1),
  S = { class: "flex justify-between md:w-6/12" },
  E = { class: "text-black text-base md:text-xl" },
  L = { class: "font-medium grow flex flex-col md:w-6/12" },
  N = t("span", { class: "text-gray md:text-lg" }, "Ends", -1),
  R = { class: "flex justify-between md:w-6/12" },
  F = { class: "text-black text-base md:text-xl" },
  T = { class: "md:w-6/12 grow" },
  W = t("span", { class: "text-gray md:text-lg" }, "Description", -1),
  q = { class: "text-black text-base md:text-xl" },
  z = t(
    "div",
    { class: "md:w-6/12" },
    [
      t("span", { class: "text-gray md:text-lg" }, "Return"),
      t(
        "h3",
        { class: "text-black text-base md:text-xl" },
        "Friday, 12 febuary 2022"
      ),
    ],
    -1
  ),
  O = {
    name: "HolidaysItem",
    setup(l) {
      const a = x();
      let s;
      return (
        (s = parseInt(a.params.id)),
        (s = r[s]),
        (A, G) => (
          d(),
          n("div", V, [
            t("div", $, [
              k,
              c(H, { class: "h-6 w-7 md:hidden", fill: "gray" }),
            ]),
            t("h2", C, e(o(s).date), 1),
            t("div", I, [
              t("div", B, [j, t("h3", M, e(o(s).state), 1)]),
              t("div", Z, [
                D,
                t("div", S, [
                  t("h3", E, e(o(s).start), 1),
                  c(_, { class: "h-6 w-7", fill: "gray" }),
                ]),
              ]),
              t("div", L, [
                N,
                t("div", R, [
                  t("h3", F, e(o(s).end), 1),
                  c(_, { class: "h-6 w-7", fill: "gray" }),
                ]),
              ]),
              t("div", T, [W, t("h3", q, e(o(s).description), 1)]),
              z,
            ]),
          ])
        )
      );
    },
  };
export { O as default };
