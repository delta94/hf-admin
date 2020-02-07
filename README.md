# HealthFriend-front

헬스 친구 admin page(front)

헬스 친구의 회원 정보를 조회하는 웹 페이지 입니다.

# Install & Start

**1. 코드 복사**

```
https://github.com/sbin0819/hf-admin.git
```

**2. package 설치**

```
yarn
```

**3. getStream API KEY 등록**

- /src/config/config_sample.tsx -> config.tsx 수정 후
- FIX_ME를 getStream API_KEY 등록 후 사용

**4. 실행**

```
yarn start
```

**5. master login**

- https://github.com/codestates/healthFriend-server 주소로 들어가 READ_ME 안내에 따라 서버 실행
- lgoin input에 admin 계정 입력
- id: admin@hf.club password: abc123

# 주요 폴더 구조

```
|-- src/
|    |-- components/
|    |       |-------- Header/      - layout header 담당
|    |       |-------- SideBar/     - layout sidebar 담당
|    |       |-------- Menu/        - layout menu 담당
|    |       |-------- Login/       - 로그인 담당 파일
|    |       |-------- Message/     - Dashboard에서 message 담당
|    |
|    |-- graphql/
|    |       |-------- apollo.tsx   - grapql 정의
|    |       |-------- queries.tsx  - query 데이터 담당 파일
|    |
|    |
|    |--- pages/
|    |       |-------- Dashboard/   - 각종 차트를 담당하는 페이지
|    |       |-------- Users/       - user 정보 담당 페이지
|    |       |-------- Messages/    - message 관련 페이지
|    |
|    |--- utils/       - user 가입날짜 정보
|    |
|    |--- App.tsx       -  메인 타입스크립트
|    |--- index.tsx     -  어플리케이션 엔트리 포인트
|
|-- README.md
```

# 알려진 버그

messages 페이지에서 Rerender시 읽은 메시지 처리가 되지 않음.
message 방 이름이 정해지면 방 이름이 고정 됨

# 회고

# tech stack

- React
- TypeScript
- GraphQL(Apollo)
- Ant-design
- Styled-components
- getStream

# 배포자 정보

하수빈
sbinha123@gmail.com
