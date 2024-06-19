import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true })],
  build: {
    // 빌드가 나올 위치 지정
    outDir: './dist',
    // 라이브러리 파일 형태
    lib: {
      // 라이브러리 파일 생성 기준 파일
      entry: ['/src/index.ts'],
      name: 'ui-kit',
      fileName: 'index',
    },
    rollupOptions: {
      // 리액트로 된 외부 프로젝트에서 갖다 쓸 거기 때문에 설정
      external: ['react', 'react-dom'],
      // umd 형태도 지원하기 위해 설정
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') {
            return 'index.css';
          }

          return assetInfo.name || 'index.css';
        },
      },
    },
  },
});
