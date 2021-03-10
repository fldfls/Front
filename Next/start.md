## Next.js 설치

1. npx create-next-app

2. 수동

- yarn add next react react-dom

- package.json에 script 추가

```Json
{
    "scripts": {
        "dev": "next",
        "build": "next build",
        "start": "next start"
    }
}
```

- pages/index.js 생성

```JS
function Home() {
    return <div>Hello world<div>
}

export default Home
```

- yarn dev
