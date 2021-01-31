## 웹 브라우저의 자바스크립트 

### screen 객체 
 웹 브라우저 화면이 아니라 운영체제 화면의 속성을 가지므로 웹 브라우저마다 속성이 다르다. 모든 웹 브라우저에서 공통으로 활용할 수 있는 속성은 아래와 같다. 
 

- screen 객체의 속성

| 속성 | 설명 |
|---|:---:|
| width | 화면의 너비 |
| height | 화면의 높이 |
| availWidth | 실제 화면에서 사용 가능한 너비 |
| availHeight | 실제 화면에서 사용 가능한 높이 |
| colorDepth | 사용 가능한 색상 수 |
| pixelDepth | 한 픽셀당 비트 수 |





### location 객체와 histroy 객체
 location 객체는 웹 브라우저의 주소창과 관련. 프로토콜의 종류, 호스트 이름, 문서 위치 등 정보가 있다. 이 객체의 속성과 메소드도 웹 브라우저마다 다르다. 

- locstion 객체의 속성

| 속성 | 설명 | 주소 |
|---|:---|:---:|
| href | 문서의 URL 주소 |  |
| host | 호스트 이름과 포트 번호 | localhost:52273 |
| hostname | 호스트 이름 | localhost |
| port | 포트 번호 | 52273 |
| pathname | 디렉터리 경로 | /folder/HTMLPage.html
| hash | 앵커 이름(#~) | #test |
| search | 요청 매개 변수 | ?param=10 |
| protocol | 프로토콜 종류 | http: |


- location 객체의 메소드

| 메소드 | 설명 |
|---|:---:|
| assign(<링크>) | 매개 변수로 전달한 위치로 이동. |
| reload() | 새로고침 |
| replace() | 매개 변수로 전달한 위치로 이동.(뒤로가기 불가능) |

 location 객체는 페이지를 이동할 때 많이 사용. 






 ### navigator 객체 
  웹 페이지를 실행하는 웹 브라우저 정보가 들어 있다. 

- navigator 객체의 속성

| 속성 | 설명 |
|---|:---:|
| appCodeName | 웹 브라우저의 코드 이름 |
| appName | 웹 브라우저의 이름 |
| appVersion | 웹 브라우저의 버전 |
| platform | 사용 중인 운영체제의 시스템 환경 |
| userAgent | 웹 브라우저의 전체적인 정보 |
