## SSR & CSR

SSR (Server Side Rendering)은 처음 클라이언트가 접속했을 때 브라우저에서 자바스크립트 코드를 다운로드 받아 해석할 때까지 기다리지 않고 서버에서 보여질 html을 미리 준비해서 응답해주는 방식.

CSR (Client Side Rendering)은 자바스크립트 파일을 브라우저에서 해석해 렌더링 하는 방식.

## Next.js

리액트에서 SSR을 쉽게 적용할 수 있게 해 주는 프레임워크.

사용자가 처음 접속 요청을 했을 때 Next.js 서버는 사용자에게 렌더링 될 Html를 응답 값으로 보내준다. (SSR 방식)

그 후 브라우저는 추가적인 자바스크립트 번들을 다운로드 받아 실행하고

사용자가 해당 페이지에서 다른 페이지로 이동할 때는 Next.js에 서버가 아닌 브라우저에서 처리하여 이동. (CSR 방식)

### 특징

1. 직관적인 라우팅 시스템
2. 페이지를 자동으로 최적화
3. 데이터가 필요한 페이지를 SSR 할 수 있게 지원
4. 빠른 페이지 로드를 위한 자동 코드 스플라이팅
5. HMR을 지원
6. 쉬운 커스터마이징

## 주요 기능

### pages 폴더의 역할

라우터 기능을 한다.

http://localhost:3000/ -> pages/index.js
http://localhost:3000/home -> pages/home.js
http://localhost:3000/menu -> pages/menu/index.js
http://localhost:3000/menu/profile -> pages/menu/profile.js

index.js는 각 폴더 명이 주소가 되고 나머지 이름을 지정한 파일이 라우터 경로가 된다.

### Server rendering

CSR과 다르게 한 페이지의 페이지 소스 보기를 클릭하면 내부에 소스가 있다.

### code splitting

내가 원하는 페이지에 원하는 자바스크립트와 라이브러리를 렌더링 하는 것.

### \_document.js

meta 태그를 정의하거나 전체 페이지에 관려하는 컴포넌트.
사이트를 만들 때 가장 루트 경로가 되는 파일은 index.html 파일 이지만 next.js에서는 이 역할을 \_document.js가 하게 된다.

초기 작업 head에 기입, 스타일시트 링크, 폰트 임포딩 등 초기값 설정.
