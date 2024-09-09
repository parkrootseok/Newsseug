# 프로젝트 업데이트 - 9월 6일 ERD, 기능명세서 정의

## 1. ERD 화면

![로그인 화면](../image/로그인화면.png)

## 2. 기능명세서 정의

### 1. 카카오 로그인 (Kakao Login)

- Allows users to log in using their Kakao account.
- [Details](https://www.notion.so/40448605d8b24e59bd5cb8a522bbff0d?pvs=21)

### 2. 닉네임 할당 (Nickname Assignment)

- Assigns a nickname to users upon logging in.
- [Details](https://www.notion.so/e7c709ee7d224ffab9bd490dc9e1fba9?pvs=21)

### 3. 기사 정보 가져오기 (Fetch Article Information)

- Retrieves the basic information of news articles.
- [Details](https://www.notion.so/a36a746def614e9f904a019a28527684?pvs=21)

### 4. 기사 내용 프롬프트 변환 (Convert Article to Prompt)

- Converts article content into a prompt format for further use.
- [Details](https://www.notion.so/fa55d471a53c4b3f9aacdbc2091960f6?pvs=21)

### 5. 프롬프트 결과물을 통해 이미지 생성 (Generate Images from Prompt)

- Generates images based on the processed prompt.
- [Details](https://www.notion.so/4f1646298beb4fa7ac020bbe37f40404?pvs=21)

### 6. 프롬프트 결과물을 통해 음성 대사 생성 (Generate Voice Lines from Prompt)

- Creates voice lines from prompt data.
- [Details](https://www.notion.so/9c7c77f1c5ff4ede8ec77adb835fef9b?pvs=21)

### 7. 이미지와 음성 대사를 통해 숏폼 영상 생성 (Generate Short-Form Video from Image & Voice)

- Combines generated images and voice lines to create short-form videos.
- [Details](https://www.notion.so/7c5c60890d304fb1a26c1b8052741aae?pvs=21)

### 8. 전체 기사 조회 (Fetch All Articles)

- Retrieves a list of all articles available.
- [Details](https://www.notion.so/1b2b0f224a91464a9f46213e3b6d786d?pvs=21)

### 9. 인기 기사 조회 (Fetch Popular Articles)

- Retrieves a list of popular articles.
- [Details](https://www.notion.so/ed98c405a8ec41b4b86e2cb7abb65597?pvs=21)

### 10. 카테고리별 기사 조회 (Fetch Articles by Category)

- Retrieves articles filtered by categories.
- [Details](https://www.notion.so/81ba95358d0e4227aa97829fbcb8d548?pvs=21)

### 11. 세대별 인기 기사 조회 (Fetch Popular Articles by Generation)

- Retrieves popular articles based on the generation of users.
- [Details](https://www.notion.so/cf5424e8dfb64b5da7c53572214c7e6b?pvs=21)

### 12. 성별 인기 기사 조회 (Fetch Popular Articles by Gender)

- Retrieves popular articles based on the gender of users.
- [Details](https://www.notion.so/9a88355a137a4ee2b28bed93ab52cef7?pvs=21)

### 13. 전체 언론사 조회 (Fetch All Media Outlets)

- Retrieves a list of all media outlets available for users.
- [Details](https://www.notion.so/53044621e56e4213813e5a83f16a22bf?pvs=21)

### 14. 언론사 구독 (Subscribe to Media Outlets)

- Allows users to subscribe to specific media outlets.
- [Details](https://www.notion.so/337cd818ea9c4861ba90dd9dab9dc271?pvs=21)

### 15. 언론사 구독 해제 (Unsubscribe from Media Outlets)

- Allows users to unsubscribe from media outlets.
- [Details](https://www.notion.so/00a04418a51f42c5abac5ea4dcd885d8?pvs=21)

### 16. 사용자 구독 언론사 조회 (Fetch User Subscribed Media Outlets)

- Retrieves the list of media outlets the user is subscribed to.
- [Details](https://www.notion.so/b439bad48e6844f2adf0229e1cef4f19?pvs=21)

### 17. 구독 언론사 기사 조회 (Fetch Articles from Subscribed Outlets)

- Retrieves articles from media outlets the user is subscribed to.
- [Details](https://www.notion.so/870d825b740d418080a63e74ab4a4203?pvs=21)

### 18. 사용자가 텍스트로 검색 (Text Search by User)

- Allows users to search for articles by entering text queries.
- [Details](https://www.notion.so/aa331b660c1a4b7f80d3b7ede7ab3a2c?pvs=21)

### 19. 검색 기록 조회 (View Search History)

- Retrieves a history of the user's search queries.
- [Details](https://www.notion.so/a477414e8b7e4b44b24736efe795cf26?pvs=21)

### 20. 검색어 자동 완성 (Search Term Auto-Complete)

- Provides suggestions as users type search terms.
- [Details](https://www.notion.so/4cd98a44b85b4dbbb7d74bb1c0825ea8?pvs=21)

### 21. 시청 기록 조회 (View Watch History)

- Retrieves a history of the articles or videos the user has watched.
- [Details](https://www.notion.so/11d695be6ff840fdb61450028b45894f?pvs=21)

### 22. 폴더 목록 조회 (View Folder List)

- Retrieves a list of folders created by the user.
- [Details](https://www.notion.so/64bc1d48c3d74ac5a6378050a13e789b?pvs=21)

### 23. 폴더 상세 조회 (View Folder Details)

- Retrieves detailed information for a specific folder.
- [Details](https://www.notion.so/e3b96cacfc424d3dbff6c5f7d3ce4f9c?pvs=21)

### 24. 좋아요 (Like Article)

- Allows users to like a specific article.
- [Details](https://www.notion.so/d48689ebfeaf4eafa8dfba8d842ad3ae?pvs=21)

### 25. 싫어요 (Dislike Article)

- Allows users to dislike a specific article.
- [Details](https://www.notion.so/24a4e1e4c8cf467a950534d7f289b5bc?pvs=21)

### 26. 신고 (Report Article)

- Allows users to report inappropriate articles.
- [Details](https://www.notion.so/6bb4a3f43b2f4659937780fcf2d61184?pvs=21)

### 27. 원본 기사로 이동 (Navigate to Original Article)

- Provides a link to the original source of the article.
- [Details](https://www.notion.so/5c42160026784ea08b7e4ed5e7ffa59d?pvs=21)

### 28. 언론사 페이지 이동 (Navigate to Media Outlet Page)

- Allows users to navigate to the homepage of a media outlet.
- [Details](https://www.notion.so/5298b8f78d5a41e3b436e84df16e3ef4?pvs=21)
