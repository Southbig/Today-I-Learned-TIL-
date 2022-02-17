# API(Application Programming Interface)

API는 응용 프로그램(애플리케이션)에서 운영 체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스를 뜻한다
주로 파일 제어, 창 제어, 화상 처리, 문자 제어 등을 위한 인터페이스를 제공한다

API는 중간에서 연결시켜주는 다리 역할을 하며,
애플리케이션과 운영체제 그리고 애플리케이션과 프로그래밍 언어가 제공하는 기능 사이의 '상호 작용'을 도와준다

# 웹 API

웹은 기본적으로 요청(request)과 응답(response)으로 작동하며,
클라이언트쪽에서 요청을 하면 서버에서 응답을 하는것이며,
웹 API는 웹 애플리케이션 개발을 할때 클라이언트와 서버, 애플리케이션과 애플리케이션등 서로 요청과 응답을 주고 받기 위해서 정의한 API다

## 웹 API의 역할

- 서버와 데이터베이스안의 리소스에 접근할 수 있게 해준다
- 데이터베이스의 정보는 필요에 의해서만 열람되어야 하며, API는 접근 권한이 인가된 사람에게만 서버와 데이터베이스에 접근할 수 있게 한다
- 모든 요청과 응답을 표준화 한다

# REST API

REST API(REpresentational State Transfer)는 웹상에서 사용되는 여러 리소스를 HTTP URI로 표현하고, 해당 리소스에 대한 행위를 HTTP Method로 정의하는 방식을 말한다

### URI (Uniform Resource Identifier)

URI이란, 웹 서버가 리소스를 고유하게 식별할 수 있도록 하는 것으로써, URL과 URN 두 가지가 있는데 일반적으로 URL을 사용한다

**URL (Uniform Resource Locator)**은 특정 서버의 한 리소스에 대해 구체적인 위치를 서술한다
**URN (Uniform Resource Name)**은 리소스가 어디에 위치해 있든 찾을 수 있는 방식을 말한다

## REST API의 설계 가이드

- 리소스에 대한 행위는 **HTTP Method(POST, GET, PUT, DELETE)**로 표현해야 한다
- **/(슬래시)**는 계층 관계를 나타낼때 사용한다
- URI 마지막 문자에 /(슬래시)를 사용하지 않는다
- URI에 \_(underscore)는 사용하지 않도록 한다, 또한 영어 대문자보다는 소문자를 쓴다
  그리고 가독성을 위해서 긴 단어는 잘 사용하지 않는다
- URI에 동사는 GET, POST와 같은 HTTP Method를 표현하기 때문에 동사가 아니라 명사를 사용한다
- URI에 파일의 확장자(예를들어 .json , .JPGE)를 포함 시키지 않는다

# RESTful API

RESTful API는 REST API 설계 가이드를 따라 API를 만드는것
REST API 설계 가이드에 따라 API를 만들어서 웹 서비스를 제공하면 해당 웹 서비스는 RESTful하다고 한다
