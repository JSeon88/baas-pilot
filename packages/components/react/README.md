# components
> 공통 UI

## 스펙
* node : v21.1.0
* pnpm : 8.15.6
* typescript : 5.2.2
* react 
  * react : 18.2.0
  * styled-components : 6.1.11

## 폴더 구성
```
├── components
│   │   └── react               // react 용 컴포넌트, 향후 vue 등 다른 프레임 워크 추가 시 폴더 추가
│   │       ├── dist            // 빌드 파일
│   │       ├── index.html
│   │       ├── package.json
│   │       ├── public
│   │       │   └── vite.svg
│   │       ├── src
│   │       │   ├── App.tsx
│   │       │   ├── assets
│   │       │   │   └── styles
│   │       │   │       └── global.css     // css
│   │       │   ├── components            // 공유될 컴포넌트들
│   │       │   │   └── Button.tsx
│   │       │   ├── index.ts              // 빌드될 export root 파일
│   │       │   ├── main.tsx
│   │       │   └── vite-env.d.ts
│   │       ├── tsconfig.json
│   │       ├── tsconfig.node.json
│   │       └── vite.config.ts
```

## 빌드
```
pnpm -F @baas/components-react build
```

## 실행
```
pnpm -F @baas/components-react dev
```