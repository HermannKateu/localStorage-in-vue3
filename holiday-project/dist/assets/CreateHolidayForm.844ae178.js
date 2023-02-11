import {
  m as i,
  o as n,
  c as r,
  d as e,
  x as c,
  t as m,
  a as p,
  e as s,
  k as _,
} from "./index.61f7007d.js";
const y = {},
  g = { class: "flex flex-col gap-y-1 font-WorkSans" },
  x = e(
    "label",
    { for: "description", class: "text-gray-300 text-base" },
    " Description ",
    -1
  ),
  b = e(
    "textarea",
    {
      name: "descripton",
      id: "descripton",
      placeholder: "Veuillez saisir votre description...",
      class:
        "outline-none w-full text-lg border border-gray-200 h-28 px-3 pt-3 my-1 rounded-md placeholder:text-gray",
    },
    null,
    -1
  ),
  f = [x, b];
function v(l, t) {
  return n(), r("div", g, f);
}
var h = i(y, [["render", v]]);
const V = {},
  w = { class: "w-full flex flex-col gap-y-1 font-WorkSans text-base" },
  $ = c(
    '<label for="select" class="text-gray-300" data-v-2505d62e> Type </label><select name="select" id="select" class="outline-none w-full my-1 h-12 px-3 text-gray-500 border border-gray-200 bg-gray-100 rounded-md" placeholder="Choose your holiday\u2019s type..." data-test="select-holiday" data-v-2505d62e><option value="" data-v-2505d62e>Choose your holiday&#39;s type..</option><option value="Annual" class="option" data-v-2505d62e>Annual</option><option value="Martenite" data-v-2505d62e>Martenite</option><option value="Absence" data-v-2505d62e>Absence</option><option value="Absence" data-v-2505d62e>Absence</option></select>',
    2
  ),
  S = [$];
function D(l, t) {
  return n(), r("div", w, S);
}
var k = i(V, [
  ["render", D],
  ["__scopeId", "data-v-2505d62e"],
]);
const I = { class: "flex flex-col gap-y-1 text-base font-WorkSans" },
  A = { for: "date", class: "text-gray-800" },
  N = ["value"],
  U = {
    name: "DateInput",
    props: {
      labelValues: { type: String, require: !0 },
      modelValue: { type: String, require: !1 },
    },
    setup(l) {
      return (t, d) => (
        n(),
        r("div", I, [
          e("label", A, m(l.labelValues), 1),
          e("div", null, [
            e(
              "input",
              {
                type: "date",
                name: "date",
                id: "date",
                class:
                  "outline-none my-1 h-12 px-3 border border-gray-200 bg-gray-100 rounded-md w-full",
                placeholder: "Date",
                value: l.modelValue,
                onInput:
                  d[0] ||
                  (d[0] = (a) => t.$emit("update:modelValue", a.target.value)),
                required: "",
              },
              null,
              40,
              N
            ),
          ]),
        ])
      );
    },
  };
var u = i(U, [["__scopeId", "data-v-d9b00374"]]);
const W = { class: "flex flex-col gap-y-1 font-WorkSans text-base" },
  q = e(
    "label",
    { for: "number", class: "text-gray-800" },
    " Number of days ",
    -1
  ),
  B = ["value"],
  C = {
    name: "NumberInput",
    props: { modelValue: { type: String, require: !0 } },
    setup(l) {
      return (t, d) => (
        n(),
        r("div", W, [
          q,
          e(
            "input",
            {
              type: "number",
              class:
                "outline-none my-1 h-12 pl-4 text-black-400 border border-gray-200 bg-gray-100 rounded-md",
              min: "1",
              placeholder: "18",
              value: l.modelValue,
              onInput:
                d[0] ||
                (d[0] = (a) => t.$emit("update:modelValue", a.target.value)),
              readonly: "",
            },
            null,
            40,
            B
          ),
        ])
      );
    },
  },
  H = { class: "bg-gray-100 h-screen flex md:bg-gray-900" },
  M = {
    class:
      "px-4 pt-4 max-w-[900px] md:m-auto md:bg-white md:rounded-lg md:px-16",
  },
  O = e(
    "div",
    { class: "font-WorkSans flex flex-col items-center md:pt-10 md:pb-4" },
    [
      e(
        "h1",
        { class: "text-gray-800 font-semibold text-3xl md:text-5xl" },
        " Create holiday "
      ),
      e(
        "span",
        { class: "text-gray text-base md:text-lg" },
        " Lorem ipsum dolor sit amet, consectetur . "
      ),
    ],
    -1
  ),
  E = { class: "flex flex-wrap gap-x-10 gap-y-3" },
  T = { class: "w-5/12 grow md:w-3/12" },
  z = { class: "w-5/12 grow md:w-3/12" },
  F = { class: "w-5/12 grow md:w-3/12" },
  L = { class: "w-5/12 grow md:w-3/12" },
  j = {
    name: "CreateHolidayForm",
    setup(l) {
      const t = p({ starting: "", ending: "", numberOfDays: null, return: "" });
      return (d, a) => (
        n(),
        r("div", H, [
          e("form", M, [
            O,
            e("div", E, [
              s(k, { class: "md:w-8/12" }),
              e("div", T, [
                s(
                  u,
                  {
                    labelValues: "Starting date",
                    modelValue: t.starting,
                    "onUpdate:modelValue":
                      a[0] || (a[0] = (o) => (t.starting = o)),
                    "data-test": "starting-date",
                  },
                  null,
                  8,
                  ["modelValue"]
                ),
              ]),
              e("div", z, [
                s(
                  u,
                  {
                    labelValues: "Ending date",
                    modelValue: t.ending,
                    "onUpdate:modelValue":
                      a[1] || (a[1] = (o) => (t.ending = o)),
                    "data-test": "ending-date",
                  },
                  null,
                  8,
                  ["modelValue"]
                ),
              ]),
              e("div", F, [
                s(
                  C,
                  {
                    class: "w-full",
                    modelValue: t.numberOfDays,
                    "onUpdate:modelValue":
                      a[2] || (a[2] = (o) => (t.numberOfDays = o)),
                    "data-test": "numDays",
                  },
                  null,
                  8,
                  ["modelValue"]
                ),
              ]),
              e("div", L, [
                s(
                  u,
                  {
                    labelValues: "Return date",
                    modelValue: t.return,
                    "onUpdate:modelValue":
                      a[3] || (a[3] = (o) => (t.return = o)),
                    "data-test": "return-date",
                  },
                  null,
                  8,
                  ["modelValue"]
                ),
              ]),
            ]),
            s(h, { class: "my-6 md:my-10", "data-test": "describe" }),
            s(_, {
              label: "SUBMIT",
              class:
                "bg-blue-100 my-6 h-14 mx-auto text-white font-bold rounded-md flex text-lg md:text-xl md:my-14",
              "data-test": "submit-button",
            }),
          ]),
        ])
      );
    },
  };
export { j as default };
