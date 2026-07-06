# 바이브코딩 스터디 템플릿

> "생각한 것을 바로 코드로!" — AI와 함께하는 바이브코딩 스터디 시작 템플릿입니다.

---

## 시작하는 법

### 1단계. 이 저장소 포크(Fork)하기
오른쪽 상단 **Fork** 버튼 클릭 → 내 GitHub 계정에 복사됩니다.

### 2단계. 내 컴퓨터로 가져오기
Claude Code에서 아래와 같이 요청하세요.
```
내 GitHub에서 template 저장소를 clone 해줘.
내 GitHub 이메일은 [이메일 주소] 야.
```

### 3단계. 패키지 설치
clone 후에는 반드시 아래 명령어를 실행해야 합니다.
```bash
npm install
```

> clone하면 코드만 가져오고 실행에 필요한 패키지는 포함되지 않습니다.
> `npm install`이 이 패키지들을 설치해줍니다. 처음 한 번만 하면 됩니다.

### 4단계. Claude 실행
```bash
claude
```

### 4단계. 배포 세팅
```
@DEPLOY.md 참조해서 Vercel 배포까지 세팅해줘
```

### 5단계. 나만의 서비스 만들기
```
@PRD.md 읽고 템플릿에 맞게 내 PRD 작성 도와줘
```

---

## 파일 안내

| 파일 | 설명 |
|---|---|
| `CLAUDE.md` | Claude가 따르는 스터디 규칙 |
| `DEPLOY.md` | Vercel 배포 단계별 가이드 |
| `PRD.md` | 만들고 싶은 것을 정리하는 방법 + 샘플 |
| `.env.example` | 환경변수 예시 (복사해서 `.env.local` 만들기) |

---

## 기술 스택

- **프레임워크:** Next.js (App Router)
- **스타일:** Tailwind CSS
- **데이터베이스:** Supabase
- **배포:** Vercel

---

## 자주 묻는 질문

**Q. 코딩을 전혀 몰라도 되나요?**
네. Claude에게 원하는 것을 말로 설명하면 됩니다.

**Q. `npm run dev` 했는데 'next'을 찾을 수 없다고 나와요.**
`npm install`을 먼저 실행하세요. clone 후 반드시 한 번 해야 합니다.

**Q. 로컬에서 실행하려면 어떻게 하나요?**
`npm install` 후 `npm run dev` 를 실행하면 브라우저에서 `http://localhost:3000` 으로 접속할 수 있어요.

**Q. 에러가 났어요.**
에러 메시지를 그대로 Claude에게 붙여넣으세요.
