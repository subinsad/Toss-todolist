# 📌 TOSS의 할 일(Todo) 관리 페이지
배포 링크 : https://toss-todolist.vercel.app/#/

기간 : 2023-12-22 ~ 2024-01-08

### ❗ 필수

-   [x] 원하는 특정 기업을 하나 선정하거나 새로운 가상의 기업을 만드세요!
-   [x] 해당 기업의 할 일 목록(List)이 출력되는 페이지가 있어야 합니다! (예시)`example.com/`)
-   [x] 해당 기업 혹은 담당 개발자에 대한 간단한 소개 페이지가 포함돼야 합니다! (예시) `example.com/about`)
-   [x] 할 일 항목(Item)을 새롭게 추가할 수 있어야 합니다!
-   [x] 실제 서비스로 배포하고 외부에서 접근 가능한 링크를 추가해야 합니다! (Vercel, Netlify, AWS, GCP 등)
-   [x] 각 페이지를 데스크탑과 모바일 등 다양한 디바이스 크기에 대응하는 반응형 레이아웃으로 만들어야 합니다!

### ❔ 선택

-   [x] 할 일 항목을 수정할 수 있도록 만들어보세요.
-   [x] 할 일 항목을 삭제할 수 있도록 만들어보세요.
-   [ ] 할 일 항목의 순서를 바꿀 수 있도록 만들어보세요. (추천 라이브러리 - [SortableJS](http://sortablejs.github.io/Sortable/))
-   [ ] 할 일을 완료하지 않은 항목과 완료한 항목을 분류해서 출력해보세요.
-   [ ] 할 일을 완료한 항목을 한 번에 삭제할 수 있도록 만들어보세요.
-   [ ] 할 일 항목의 최신 수정일을 표시해보세요.
-   [x] 할 일 목록이 출력되기 전에 로딩 애니메이션이 보이도록 만들어보세요.
-   [x] 기타 동작이 완료되기 전에 로딩 애니메이션이 보이도록 만들어보세요.
-   [x] 차별화가 가능하도록 프로젝트를 최대한 예쁘게 만들어보세요.
-   [x] 할 일과 관련된 기타 기능도 고려해보세요.


## 구현사항

- 할일 추가, 수정, 삭제 

  
![REC-20240108233233-ezgif com-webp-to-gif-converter](https://github.com/subinsad/Toss-todolist/assets/92204014/033775e1-4073-44a8-8b54-46ad02ff03fe)

- 캘린더

  
![image](https://github.com/subinsad/Toss-todolist/assets/92204014/24ffee3f-480e-4f76-852c-1942152e2cc2)



- 차트js / 스켈레톤

![REC-20240108234014-ezgif com-video-to-gif-converter](https://github.com/subinsad/Toss-todolist/assets/92204014/a8ae5a3b-ae27-4e4f-bd7b-6c7bc6f1ab13)



- 로딩 애니메이션


![REC-20240108234314-ezgif com-video-to-gif-converter](https://github.com/subinsad/Toss-todolist/assets/92204014/7bac8c22-7f81-4ce7-84ee-78eba06dc170)

- 랜덤함수

![REC-20240109000004-ezgif com-video-to-gif-converter](https://github.com/subinsad/Toss-todolist/assets/92204014/823a413b-3c04-4b9a-bb0f-1ef12f18adad)

- 반응형

  
![REC-20240109000332-ezgif com-video-to-gif-converter](https://github.com/subinsad/Toss-todolist/assets/92204014/44fa4b77-503c-4338-85ea-03442e32ac30)

  



## 에러핸들링


-  버튼을 누르고 새로고침을 해야 투두리스트가 나오는 이슈
```js
constructor() {
        super();
        this.state = {}; // 상태 초기화

        this.renderComponent(); // 화면 그리기
    }
```
상위 컴포넌트에서 컴포넌트 업데이트 로직과 페이지 이동 로직 추가를 하니 해결
```
update() {
        // 컴포넌트 업데이트
        this.renderComponent();
    }

    navigateTo(href) {
        // 페이지 이동 로직 추가
        window.location.hash = href; // 경로를 hash로 변경
        window.location.reload(); // 새로고침 추가
    }
```

- 컴포넌트 div 렌더링 에러
```
this.el.classList.add('classname');
```
컴포넌트 안에 컴포넌트를 연결시켜 div가 생성되는걸 확인 후 생성되는 div를 this로 넣어주니 해결


- 배포 오류
```
import PortFolio from './AboutPortfolio';
```
파일이름과 import할때 파일이름 대소문자 구분을 해야 배포오류가 안나온다.

- 배포 후 이미지 깨짐 (해결중)


## 아쉬운 점
- API를 처음 사용해보았는데, 파일구조를 깔끔하게 못한점이 아쉽고, 다른 기능들을 구현해보려 했지만 오류가 많이 나와 추가, 삭제, 수정만 구현 한 점이 아쉽다.
- 반응형 디자인을 많이 고려하지 못해 모바일화면이 깔끔한 UI는 아닌거 같아 아쉽다.


  
