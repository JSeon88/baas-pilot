/** @type {import("eslint").ESLint.ConfigData} */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['@baas/eslint-config', '@baas/eslint-config/mixins/react', 'plugin:storybook/recommended'],
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
  settings: {
    react: {
      // 현재 React 버전을 명시합니다.
      // 명시하지 않을 경우(기본값 'detect') React 라이브러리 전체를 불러오므로
      // 린트 과정에서 속도가 느려질 수 있습니다.
      version: '18.2',
    },
  },
};
