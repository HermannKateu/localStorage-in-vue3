module.exports = async () => {
  return {  
   "moduleFileExtensions": ["js", "json", "vue", "ts","tsx"],
   "transform": {
     "^.+\\.js$": "babel-jest",
     "^.+\\.vue$": "@vue/vue3-jest",
     "^.+\\.tsx?$": "ts-jest",
     "testEnvironment": "jsdom"
    },
   "moduleNameMapper": {
     "assets/(.*)": [
       "<rootDir>/src/assets/holidays-foto/$1"
      ]
    },
   "modulePathIgnorePatterns": ["<rootDir>/src/assets/holidays-foto"],
   "testEnvironment": "jsdom",
   "testURL": "http://localhost/",
   "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$"
  }
};
