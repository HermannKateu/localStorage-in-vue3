import {
  r as f,
  a as g,
  b as c,
  o as h,
  c as w,
  w as l,
  v as b,
  d as s,
  e as d,
  f as y,
  _,
  P as v,
  g as S,
  h as i,
  i as V,
  j as r,
  k as U,
  F as m,
  l as k,
} from "./index.61f7007d.js";
const M = {
    class:
      "bg-gray-100 h-screen md:bg-white flex flex-col md:justify-center font-WorkSans py-8",
  },
  D = {
    class:
      "text-base md:text-xl font-bold flex justify-center border border-gray-100 my-8 py-3 text-center rounded-md mx-auto px-2 shadow-lg shadow-gray w-11/12 px-4 bg-white md:w-5/12",
    "data-test": "sign-up-error",
  },
  F = r(
    " It seems as if user already have such an emai. If you are the one please "
  ),
  I = r("Login"),
  N = s(
    "h1",
    { class: "text-center text-2xl font-semibold md:text-4xl" },
    " SignUp ",
    -1
  ),
  A = s(
    "label",
    { for: "age", class: "text-gray-300 text-lg font-WorkSans" },
    " Age ",
    -1
  ),
  B = { class: "flex gap-x-12" },
  T = { for: "sex", class: "text-base text-gray-500" },
  j = r("Male "),
  C = { for: "sex", class: "text-base text-gray-500" },
  E = r("Female "),
  J = {
    name: "SignUpPage",
    setup(O) {
      const n = f(!1),
        e = g({ email: "", age: null, password: "", sex: "" }),
        u = () => {
          if (e.email === "" || e.password === "")
            alert("Fill in all the form fields please");
          else return x();
        },
        x = () => {
          const o = JSON.parse(localStorage.getItem(m));
          if (localStorage.length === 0)
            localStorage.setItem(m, JSON.stringify(e)), k.push("/home");
          else if (e.email === o.email) return (n.value = !0);
        };
      return (o, t) => {
        const p = c("router-link");
        return (
          h(),
          w("div", M, [
            l(
              s(
                "div",
                D,
                [
                  F,
                  d(
                    p,
                    {
                      to: "/",
                      class:
                        "pl-2 text-blue-200 underline text-base md:text-xl",
                    },
                    { default: y(() => [I]), _: 1 }
                  ),
                ],
                512
              ),
              [[b, n.value]]
            ),
            s(
              "form",
              {
                class:
                  "px-4 gap-y-3 w-full flex flex-col md:w-[750px] mx-auto md:px-8 md:border md:border-white-200 md:shadow-2xl md:shadow-gray-500 md:rounded-md md:py-16",
                onSubmit:
                  t[5] ||
                  (t[5] = V(
                    (...a) => o.signUpData && o.signUpData(...a),
                    ["prevent"]
                  )),
              },
              [
                N,
                d(
                  _,
                  {
                    modelValue: e.email,
                    "onUpdate:modelValue":
                      t[0] || (t[0] = (a) => (e.email = a)),
                    modelModifiers: { trim: !0 },
                    class: "w-full",
                    "data-test": "email-unput",
                  },
                  null,
                  8,
                  ["modelValue"]
                ),
                d(
                  v,
                  {
                    modelValue: e.password,
                    "onUpdate:modelValue":
                      t[1] || (t[1] = (a) => (e.password = a)),
                    modelModifiers: { trim: !0 },
                    class: "w-full",
                    "data-test-id": "input-password",
                    "data-test": "password-input",
                  },
                  null,
                  8,
                  ["modelValue"]
                ),
                A,
                l(
                  s(
                    "input",
                    {
                      type: "number",
                      class:
                        "h-[55px] outline-none text-base border my-2 border-gray-500 pl-5 rounded-md focus:border-gray-700 ease-in-out duration-500 bg-gray-100 shadow-sm shadow-gray-200 hover:shadow-gray-600 hover:shadow-xl md:h-16 border border-gray md:text-xl",
                      placeholder: "Enter age",
                      "onUpdate:modelValue":
                        t[2] || (t[2] = (a) => (e.age = a)),
                      min: "1",
                      max: "100",
                      "data-test": "age-input",
                    },
                    null,
                    512
                  ),
                  [[S, e.age, void 0, { trim: !0 }]]
                ),
                s("div", B, [
                  s("label", T, [
                    j,
                    l(
                      s(
                        "input",
                        {
                          type: "radio",
                          name: "sex",
                          id: "male",
                          class: "w-4 h-4 focus:animate-spin",
                          value: "Male",
                          "onUpdate:modelValue":
                            t[3] || (t[3] = (a) => (e.sex = a)),
                        },
                        null,
                        512
                      ),
                      [[i, e.sex]]
                    ),
                  ]),
                  s("label", C, [
                    E,
                    l(
                      s(
                        "input",
                        {
                          type: "radio",
                          name: "sex",
                          id: "female",
                          value: "Female",
                          class: "w-4 h-4",
                          "onUpdate:modelValue":
                            t[4] || (t[4] = (a) => (e.sex = a)),
                        },
                        null,
                        512
                      ),
                      [[i, e.sex]]
                    ),
                  ]),
                ]),
                d(U, {
                  label: "SUBMIT",
                  class:
                    "text-base text-white bg-blue-800 w-full h-12 font-bold rounded-md shadow-lg shadow-blue-400 flex hover:shadow-2xl ease-in-out duration-1000 mx-auto my-6 md:h-14 md:text-xl",
                  onClick: u,
                  "data-test": "submit-button",
                }),
              ],
              32
            ),
          ])
        );
      };
    },
  };
export { J as default };
