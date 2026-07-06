# DEPLOY.md

> Claude가 이 파일을 참조해서 배포 세팅을 도와줍니다.
> 사용자는 아래 순서대로 진행하면 됩니다.

---

## 이 프로젝트의 배포 방식

```
내 컴퓨터 (코드 작성)
    ↓ git push
GitHub (코드 저장소)
    ↓ 자동 감지
Vercel (인터넷에 공개)
    ↓
누구나 접속 가능한 URL 생성
```

**핵심:** GitHub에 코드를 올리면 Vercel이 자동으로 배포합니다. 이후에는 코드를 수정하고 GitHub에 올리기만 하면 됩니다.

---

## Step 1. GitHub 리포지토리 준비

이미 포크(Fork)한 상태라면 이 단계는 건너뛰세요.

처음이라면 Claude에게 아래와 같이 요청하세요.
```
GitHub에 새 리포지토리를 만들고 현재 코드를 올려줘.
내 GitHub 이메일은 [이메일 주소] 야.
```

---

## Step 2. Vercel 계정 생성

1. [https://vercel.com](https://vercel.com) 접속
2. **Continue with GitHub** 클릭 (GitHub 계정으로 로그인 권장)
3. 이메일 인증 완료

---

## Step 3. Vercel에 프로젝트 연결

1. Vercel 대시보드에서 **Add New → Project** 클릭
2. **Import Git Repository** 에서 내 GitHub 리포지토리 선택
3. Framework Preset이 **Next.js** 로 자동 감지되는지 확인
4. **Deploy** 버튼 클릭

> 첫 배포는 1~2분 정도 걸립니다. 완료되면 `.vercel.app` 주소가 생성됩니다.

---

## Step 4. 환경 변수 등록

`.env.local`에 있는 값들은 Vercel에도 별도로 등록해야 합니다.
코드에 포함되지 않기 때문에 직접 입력해야 합니다.

1. Vercel 대시보드 → 내 프로젝트 선택
2. **Settings → Environment Variables** 이동
3. `.env.example` 파일에 있는 항목들을 하나씩 추가

| 항목 | 값 확인 위치 |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase → Settings → API → Project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase → Settings → API → anon public |

4. 추가 완료 후 **Deployments → 최신 항목 → Redeploy** 클릭

> 환경 변수를 추가한 뒤에는 반드시 재배포해야 적용됩니다.

---

## Step 5. 배포 확인

1. Vercel 대시보드에서 생성된 URL 클릭
2. 화면이 정상적으로 나오면 배포 완료
3. 이 URL을 누구에게나 공유할 수 있습니다

---

## 이후 업데이트 방법

코드를 수정한 뒤 Claude에게 아래와 같이 요청하면 됩니다.
```
변경사항 저장하고 GitHub에 올려줘.
```

GitHub에 올라가는 순간 Vercel이 자동으로 새 버전을 배포합니다.

---

## 자주 발생하는 문제

| 증상 | 원인 | 해결 방법 |
|---|---|---|
| 배포는 됐는데 화면이 이상함 | 환경 변수 미등록 | Step 4 다시 확인 |
| Build Error 발생 | 코드 오류 | Claude에게 에러 메시지 붙여넣기 |
| 로컬에서는 되는데 배포 후 안 됨 | 환경 변수 누락 | Vercel 환경 변수 재확인 |
| 업데이트가 반영 안 됨 | push 안 됨 | GitHub에 올렸는지 확인 |

---

## Claude에게 요청하는 방법

```
@DEPLOY.md 참조해서 Vercel 배포 세팅 도와줘
```

```
배포 후 화면이 안 나와. 이 에러 메시지 봐줘: [에러 내용]
```
