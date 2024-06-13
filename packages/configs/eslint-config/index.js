// 공통 eslint 설정
module.exports = {
  // 필요한 플러그인을 여기에 정의합니다.
  plugins: ["simple-import-sort"],
  extends: [],
  rules: {
    // 필요한 커스텀 규칙을 여기에 정의합니다.
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
  settings: {
    // 공통으로 넣고 싶은 설정이 있으면 추가합니다.
  },
};
