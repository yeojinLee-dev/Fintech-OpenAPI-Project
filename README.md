### 핀테크 아카데미 개발 과정 (한국인터넷진흥원, 핀테크기술지원센터 주관)


## 프로젝트 소개
> 은행 공동 인프라를 구축하여 이용기관이 한 번의 오픈뱅킹 가입만으로도 시중 은행의 공통된 서비스를 오픈 API 형태로 사용할 수 있는 플랫폼 서비스

## 주요 기능
1. 회원 인증
2. 계좌 목록 / 계좌 상세 내역 조회
3. QR 코드 생성 및 리딩
4. 결제 금액 입력 팝업
5. 간단한 입/출금 기능
   
## 기술 스택
 > Node.js, react

## 4. 설명
<aside>
	
- 주요 기능
  
	- 사용자의 인증을 통해 AccessToken 발급
	- 사용자의 전체 계좌 목록 / 계좌 상세 내역 조회
    	- 각각의 계좌에 대한 핀테크 번호를 나타내는 QR 코드 생성 및 리딩 가능
    	- 결제 금액을 입력하면 연결된 계좌로 입/출금 가능

       
- 상세 내용
  
	- 금융결제원 API 명세서를 참고하여 테스트 OpenAPI 이용
	- React Axios로 http 통신
    	- 사용자 인증을 통해 AccessToken 발급
        	- Access Token을 통해 OAuth 2.0 인증 (2-legged, 3-legged 방식 이용)
	- AccessToken을 통해 사용자의 모든 계좌 정보 접근 (오픈 뱅킹)
    	- 계좌 마다의 핀테크 번호를 이용하여 잔액 조회
    	- 각각의 계좌에 해당하는 QR 코드를 통해 간편 결제
</aside>


## 5. UI 
![image](https://user-images.githubusercontent.com/80297591/170485781-fcb00778-a9f6-4917-9797-910603701248.png)
![image](https://user-images.githubusercontent.com/80297591/170485855-c8696aad-8e7c-4aa6-b07a-512320bbe130.png)
![image](https://user-images.githubusercontent.com/80297591/170485753-753a41f2-2b64-446f-ae04-50c3ec9b54bf.png)
![image](https://user-images.githubusercontent.com/80297591/170485794-26ae08ec-91c9-49bc-a7e1-2ba561f69c10.png)
![image](https://user-images.githubusercontent.com/80297591/170485910-96e2485c-a689-4843-99b2-e520a83959d7.png)
![image](https://user-images.githubusercontent.com/80297591/170485931-0d51b647-6f2b-47a2-a815-d2172aad5997.png)
![image](https://user-images.githubusercontent.com/80297591/170486154-38e03fe2-56da-4b63-8f69-3a13176d9d7d.png)
![image](https://user-images.githubusercontent.com/80297591/170486238-b6520beb-7658-4933-b39c-2b14fd829437.png)
	
#### 강의 : 유관우 대표님
