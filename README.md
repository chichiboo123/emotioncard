# 여기 있어 감정카드 🌟

> 로버트 플루치크(Robert Plutchik)의 **감정의 바퀴(Wheel of Emotions)** 이론을 바탕으로, 24가지 감정을 카드로 만나며 자신의 마음을 들여다보는 감정 학습 웹앱입니다.

어린왕자의 밤하늘을 닮은 화면 위에서, 아이도 어른도 부담 없이 감정의 이름을 배우고 표현할 수 있도록 만들었습니다. 수업·상담·가정에서 감정 표현 활동 도구로 활용할 수 있습니다.

---

## ✨ 주요 기능

### 1. 전체 보기 모드
- 플루치크의 바퀴 색상 순서대로 **8개 감정 계열**(기쁨·신뢰·공포·놀라움·슬픔·혐오·분노·기대)을 한눈에 보여줍니다.
- 각 계열의 대표(기본) 카드를 누르면 **약(1단계) · 강(3단계)** 단계의 감정이 함께 펼쳐집니다.
- `카드 섞기`로 24개 감정을 무작위로 섞어보고, `다시 정렬`로 계열 순서로 되돌릴 수 있습니다.

### 2. 랜덤뽑기 모드
- **4개 / 8개 / 24개** 범위를 골라 감정 카드를 무작위로 한 장 뽑습니다.
  - `4개` — 가장 기본이 되는 4가지 감정(기쁨·분노·슬픔·공포)
  - `8개` — 플루치크의 8가지 기본 감정
  - `24개` — 모든 감정(약·기본·강 단계 포함)
- 카드가 뒤집히는 애니메이션으로 결과를 보여주며, `다시 뽑기`로 계속 진행할 수 있습니다.

### 3. 감정 카드
- 감정 단어, 아이도 이해할 수 있는 다정한 설명, 강도 단계(약·기본·강), 계열 색상을 담고 있습니다.
- 각 카드 색상은 플루치크의 감정 바퀴 배색을 따릅니다.

### 4. 어른모드 / 어린이모드
- 상단 토글로 카드에 표시되는 감정 낱말을 **어른모드(`word`)** 와 **어린이모드(`childWord`)** 로 전환할 수 있습니다.
  - 예) `황홀 → 매우 기쁨`, `격노 → 매우 화남`, `경계 → 조심스럽게 살핌`
- 초등학생이 곧바로 이해하기 어려운 단어가 카드 제목으로 나오지 않도록, 어린이모드에서는 쉬운 표현으로 바꿔 보여줍니다.
- 기본값은 어린이 사용을 고려해 **어린이모드**이며, 선택한 모드는 `localStorage`에 저장되어 다음 방문에도 유지됩니다.
- 감정 데이터 구조(`id`·`family`·`level`·색상·설명)는 그대로 두고, 화면 표시명만 모드에 따라 달라집니다.

---

## 🧠 이론적 배경

이 앱은 심리학자 로버트 플루치크의 **감정의 바퀴** 이론에 기반합니다.

- **8가지 기본 감정**: 기쁨(Joy), 신뢰(Trust), 공포(Fear), 놀라움(Surprise), 슬픔(Sadness), 혐오(Disgust), 분노(Anger), 기대(Anticipation)
- 각 감정은 **강도에 따라 3단계**로 표현됩니다. 예) 평온(약) → 기쁨(기본) → 황홀(강)
- 총 **8개 계열 × 3단계 = 24개 감정**을 카드로 다룹니다.

감정 데이터의 단일 출처(Single Source of Truth)는 [`artifacts/emotion-card-cloud/src/data/emotions.ts`](artifacts/emotion-card-cloud/src/data/emotions.ts) 입니다.

---

## 🛠 기술 스택

| 영역 | 사용 기술 |
| --- | --- |
| 프레임워크 | React 18 + TypeScript |
| 빌드 도구 | Vite |
| 스타일 | Tailwind CSS, shadcn/ui (Radix UI) |
| 애니메이션 | Framer Motion |
| 라우팅 | wouter |
| 폰트 | Pretendard, Material Icons Round |
| 패키지 매니저 | pnpm (workspace) |

> 백엔드나 데이터베이스 없이 동작하는 정적 프런트엔드 SPA입니다.

---

## 🚀 시작하기

이 저장소는 pnpm 워크스페이스이며, 앱 본체는 `artifacts/emotion-card-cloud`에 있습니다.

```bash
# 1. 의존성 설치 (저장소 루트에서)
pnpm install

# 2. 개발 서버 실행
cd artifacts/emotion-card-cloud
PORT=5000 BASE_PATH=/ pnpm run dev

# 3. 타입 체크
pnpm run typecheck

# 4. 프로덕션 빌드
PORT=5000 BASE_PATH=/ pnpm run build
```

> `vite.config.ts`는 `PORT`와 `BASE_PATH` 환경변수를 필요로 합니다. 로컬에서는 위 예시처럼 `PORT=5000 BASE_PATH=/` 를 지정하면 됩니다.

빌드 결과물은 `artifacts/emotion-card-cloud/dist/public` 에 생성됩니다.

---

## 📁 프로젝트 구조

```
emotioncard/
├─ artifacts/
│  └─ emotion-card-cloud/        # 감정카드 웹앱 (메인)
│     ├─ index.html
│     ├─ public/
│     │  └─ favicon.svg          # 감정 카드 덱 파비콘
│     └─ src/
│        ├─ App.tsx
│        ├─ pages/
│        │  ├─ Home.tsx          # 모드 전환 메인 페이지
│        │  └─ not-found.tsx
│        ├─ components/
│        │  ├─ Header.tsx        # 앱 타이틀 + 모드 토글
│        │  ├─ NormalMode.tsx    # 전체 보기 모드
│        │  ├─ RandomMode.tsx    # 랜덤뽑기 모드
│        │  ├─ FamilyCard.tsx    # 계열 카드(펼침 토글)
│        │  ├─ EmotionCard.tsx   # 개별 감정 카드
│        │  ├─ CardBack.tsx      # 카드 뒷면
│        │  ├─ FilterToggle.tsx  # 4/8/24 범위 선택
│        │  └─ StarryBackground.tsx
│        └─ data/
│           └─ emotions.ts       # 24개 감정 데이터 (단일 출처)
└─ README.md
```

---

## ♿ 접근성 & UX

- 모든 인터랙티브 요소에 한국어 `aria-label`, `aria-pressed`, `aria-expanded`를 적용했습니다.
- 장식용 아이콘은 `aria-hidden` 처리하여 스크린리더 노이즈를 줄였습니다.
- 모바일에서도 카드의 "단계별 보기" 버튼이 항상 보이도록 하여 펼침 기능을 쉽게 발견할 수 있습니다.
- 화면 확대(핀치 줌)를 허용하고, `lang="ko"` 를 지정했습니다.

---

## 🙏 만든 이

**교육뮤지컬 꿈꾸는 치수쌤** · [litt.ly/chichiboo](https://litt.ly/chichiboo)

이 웹앱은 로버트 플루치크의 감정의 바퀴 이론에 기반하여 제작되었습니다.
