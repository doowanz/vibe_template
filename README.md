# 바이브코딩 스터디 템플릿

> "생각한 것을 바로 코드로!" — AI와 함께하는 바이브코딩 스터디 시작 템플릿입니다.

---

## 시작하는 법

### 1단계. 이 저장소 포크(Fork)하기
오른쪽 상단 **Fork** 버튼 클릭 → 내 GitHub 계정에 복사됩니다.

### 2단계. 내 컴퓨터로 가져오기
포크한 저장소 페이지에서 **Code → HTTPS 주소 복사** 후 터미널에서 실행하세요.
```bash
git clone https://github.com/[내계정]/template.git
cd template
```

### 3단계. 패키지 설치
```bash
npm install
```

> clone하면 코드만 가져오고 실행에 필요한 패키지는 포함되지 않습니다.
> `npm install`이 이 패키지들을 설치해줍니다. 처음 한 번만 하면 됩니다.

### 4단계. Claude 실행
```bash
claude
```

### 5단계. Vercel 배포
Claude에게 아래와 같이 요청하세요.
```
GitHub 연결하고 Vercel에 배포해줘.
```

배포 흐름
```
내 컴퓨터 (코드 작성)
    ↓ git push
GitHub (코드 저장소)
    ↓ 자동 감지
Vercel (인터넷에 공개)
    ↓
누구나 접속 가능한 URL 생성
```

Vercel 환경 변수 설정 (Supabase 연동 시 필요)
1. `.env.example`을 복사해서 `.env.local` 파일 생성 후 실제 값 입력
2. Vercel 대시보드 → 프로젝트 → **Settings → Environment Variables** 에 동일하게 등록
3. 등록 후 **Redeploy** 필수

> `.env.local`은 절대 GitHub에 올리면 안 됩니다. `.gitignore`에 이미 포함되어 있습니다.

### 6단계. 나만의 서비스 만들기
```
@PRD_TEMPLATE.md 참조해서 내 PRD 작성해줘
```

---

## 파일 안내

| 파일 | 설명 |
|---|---|
| `CLAUDE.md` | Claude가 따르는 스터디 규칙 |
| `PRD_TEMPLATE.md` | PRD 개념 설명 + 샘플 (내 PRD 작성 전 참고용) |
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
`npm install` 후 `npm run dev` 실행 → 브라우저에서 `http://localhost:3000` 접속

**Q. 배포 후 화면이 이상하거나 에러가 나요.**
Vercel 환경 변수가 등록되어 있는지 확인하세요. 등록 후 Redeploy가 필요합니다.

**Q. 에러가 났어요.**
에러 메시지를 그대로 Claude에게 붙여넣으세요.
