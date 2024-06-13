# Baas-Pilot

## 폴더 구조
```
├── apps                              서비스들
│   └── admin
│       └── package.json
├── package.json
├── packages                          패키지들(공통 유틸, configs, components 등등)
│   ├── configs
│   │   ├── eslint-config             공통 eslint config
│   │   │   ├── index.js
│   │   │   ├── mixins
│   │   │   │   └── react.js          react 용 eslint config
│   │   │   └── package.json
│   │   └── prettier-config           공통 prettier config
│   │       ├── index.js
│   │       └── package.json
│   └── utils                         공통 유틸들
│       └── package.json
├── .prettierignore                   공통 prettier ignore 파일
├── pnpm-lock.yaml
└── pnpm-workspace.yaml
```

## 공통 prettier ignore 파일 관리
* 각 프로젝트의 모든 prettier의 ignore 부분은 각자 프로젝트에서 관리하는것이 아닌 공통 파일 하나로 관리.
  * 만약 프로젝트의 이왕이면 프로젝트 경로를 명시적으로 써주는 걸 권장
  ```
  // 공통
  *.md

  // 프로젝트
  apps/admin/블라브라
  ```
* 각 프로젝트의 prettier 실행 스크립트에서는 루트의 ignore 파일 경로 설정 할 것.