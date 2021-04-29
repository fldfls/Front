## getInitialProps란?

웹 페이지는 페이지 별로 사전에 불러와야 할 데이터가 존재한다. Data Fectching이라고 하는 로직은 CSR에서 React 로직에 따라 componentDidMount or useEffet로 컴포넌트가 마운트 되고 나서 하는 경우가 많다. 이 과정을 서버에서 미리 처리하도록 도와주는 것이 <b>getInitialProps</b>

<br>

> next 9.3 버전에서는 getInitialProps를 세분화 하여 getStaticProps, getStaticPaths, getServerSideProps를 사용하게 됨

페이지 진입 전에 호출되며 내부 로직은 서버에서 실행된다. (클라이언트에서만 가능한 로직은 X, ex: Window, Document 등)

<br>

기본적으로 받는 props인 context(ctx).

- pathname : 현재 pathname. /user?type=normal page 접속 시에는 /user

- query : 현재 query를 object 형태로 출력 /user?type=normal page 접속 시에는 {type: 'normal'}

- asPath : 전체 path /user?type=normal page 접속 시에는 /user?type=normal

* req : HTTP request object (server only)

* res : HTTP response object (server only)

* err : Error object

## getStaticProps

빌드 타임 때 정적인 페이지를 생성한다. pages에서만 사용할 수 있으며, buil 할 때 리턴한 Props를 기반으로 페이지를 미리 렌더링 해놓는다. (매우 빠르게 페이지를 띄워줌)

> 빌드 타임에서만 실행된다.

<br>

**_언제 사용해야 할까?_**

- 데이터가 빌드 타임에 페이지에 사용되어야 할 때 (user 요청 x)
- SEO 등의 이슈로 인해 빠르게 미리 렌더링 해야 하는 페이지. (HTML과 JSON 파일을 모두 생성해 두기 때문에)
- 유저에 구애받지 않고 퍼블릭하게 캐시할 수 있는 데이터

<br>

```JS
function Blog({ posts }) {
    return (
        {posts.map((post) => (
            <li>{post.title}</li>
        ))}
    )
} //buil time에 채워짐


//서버 사이드 빌드 타임에 실행
export async function getStaticProps(context) {
    const res = await fetch('...../posts');

    const posts = await res.json();

// {props: {...}} 형태로 반환해야 하며 posts로 받을 수 있다.
    return {
        props: {
            posts,
        },
    }
}

export default Blog
```

**context 매개 변수는 다음의 키를 포함한다.**

- params : 동적 경로를 사용하는 페이지에 대한 경로 정보를 담는다.

- preview :

- previewData :

getStaticProps는 빌드 타임에 한번만 실행된다. 또한 정적 HTML을 만들어 내기 때문에 쿼리 매개 변수나 HTTP 헤더 등 요청 시간에만 사용할 수 있는 데이터는 받지 않는다.

<br>

## getStaticPaths

다이나믹 라우트에서만 쓰이는 메소드.

> 다이나미 라우팅이란? 파일명을 [id]와 같이 대괄호로 묶어서 생성하면 다이나믹 라우팅 기능을 이용할 수 있다. (router 객체나 context 객체의 query 파라미터로 조회할 수 있음.)

페이지의 url에서 외부 데이터를 사용할 경우
getStaticPaths를 export 해줘야 한다.
(동적 라우팅 시에 많이 사용)

```JS

export async function getStaticPaths(){
     {
    return {
        paths: [
            { params: {...}}
        ],
        fallback: true or false
    };
}
}

```

**pahts**
getStaticPaths의 필수 값이며 paths에서 반환되는 params 값으로 동적 라우팅 경로의 이름이 된다.

```JS
export const getStaticPaths = async () => {
    return {
        paths: [
            { params: { id: "1" }},
            { params: { id: "2" }}
        ]
    }
} //url이 post/1과 post/2로 생성된다
//또한 params는 페이지 이름과같아야 한다

```

<br>

**fallBack**

필수 값으로 Boolean 타입. fallBack이 false라면 getStaticPaths에서 반환되지 않는 모든 경로는 404 페이지가 된다.

<br>

## getServerSideProps

SSR시 활용하는 메소드. 런타임 환경에서 페이지에 접근 시 서버 측에서 실행된다.

pre-render or sever-side Rendering 빌드와 상관없이 매 요청마다 데이터를 가져온다.

```JS
function Page ({ data }){
    console.log(this.props.data) //res.json() 출력
}

export async function getServerSideProps() {
    const res = await fetch(`https://.../data`)
    const data = await res.json()

    return { props: { data: data }}
}
export default Page
```

<br>
<br>

- getStaticProps: static data를 위해 data fetching
- getServerSideProps : ssr을 위해 data fetching
- getStaticProps와 getServerSideProps의 차이는 빌드 이후에 data 변경이 가능한지?

<br>
<br>

- Static Generation을 Client-side Rendering과 함께 사용 : 페이지의 일부분을 pre-rendering 하지 않고 그 부분을 CSR에서 JS 코드를 동작 시켜 구성할 수 있다

- SSR 사용 : 각각의 요청마다 페이지를 pre-render하게 할 수 있다.
