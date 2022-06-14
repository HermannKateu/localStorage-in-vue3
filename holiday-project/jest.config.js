module.exports = {
  "verbose": true,
   "moduleFileExtensions": ["js", "json", "vue", "ts","tsx"],
   "transform": {
      "^.+\\.js$": "babel-jest",
      "\\.[jt]sx?$": "babel-jest",
      "^.+\\.vue$": "@vue/vue3-jest",
      "^.+\\.tsx?$": "ts-jest" ,
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/fileTransformer.js",
    },
   "testEnvironment": "jsdom",
   "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$"
};
