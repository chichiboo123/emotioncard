export type EmotionFamily =
  | "joy"
  | "trust"
  | "fear"
  | "surprise"
  | "sadness"
  | "disgust"
  | "anger"
  | "anticipation";

// 1 = 연한 감정(약), 2 = 기본 감정, 3 = 진한 감정(강)
export type EmotionLevel = 1 | 2 | 3;

export interface Emotion {
  id: string;
  word: string;
  description: string;
  bgColor: string;
  textColor: string;
  level: EmotionLevel;
  family: EmotionFamily;
}

export interface FamilyMeta {
  family: EmotionFamily;
  /** 계열을 대표하는 이름 (기본 감정 단어) */
  name: string;
  /** 계열 대표 색 (기본 감정 색) */
  accent: string;
}

// 로버트 플루치크 "감정의 바퀴" 색상 순서 (위에서 시계방향)
export const familyOrder: EmotionFamily[] = [
  "joy",
  "trust",
  "fear",
  "surprise",
  "sadness",
  "disgust",
  "anger",
  "anticipation",
];

export const familyMeta: Record<EmotionFamily, FamilyMeta> = {
  joy: { family: "joy", name: "기쁨", accent: "#FFE066" },
  trust: { family: "trust", name: "신뢰", accent: "#8FD98C" },
  fear: { family: "fear", name: "공포", accent: "#C2D85F" },
  surprise: { family: "surprise", name: "놀라움", accent: "#7FD0EE" },
  sadness: { family: "sadness", name: "슬픔", accent: "#7C9FD9" },
  disgust: { family: "disgust", name: "혐오", accent: "#C97FC4" },
  anger: { family: "anger", name: "분노", accent: "#E87B72" },
  anticipation: { family: "anticipation", name: "기대", accent: "#F5A95C" },
};

// 모든 감정 (계열별 1→2→3 단계 순서, 계열은 바퀴 색상 순서)
export const allEmotions: Emotion[] = [
  // 기쁨 계열 (노랑)
  { id: "serenity", word: "평온", description: "마음이 잔잔한 호수처럼 조용하고 편안한 느낌이에요.", bgColor: "#FFF3B8", textColor: "#8A6A00", level: 1, family: "joy" },
  { id: "joy", word: "기쁨", description: "좋은 일이 생겼을 때 마음이 환해지고 웃음이 나는 느낌이에요.", bgColor: "#FFE066", textColor: "#7A5E00", level: 2, family: "joy" },
  { id: "ecstasy", word: "황홀", description: "너무너무 기쁘고 행복해서 온몸이 반짝이는 것 같은 느낌이에요!", bgColor: "#F5B921", textColor: "#4D3800", level: 3, family: "joy" },

  // 신뢰 계열 (초록)
  { id: "acceptance", word: "승인", description: "있는 그대로 괜찮아. 나와 달라도 받아들일 수 있는 넉넉한 느낌이에요.", bgColor: "#CDEFC4", textColor: "#2E6B2A", level: 1, family: "trust" },
  { id: "trust", word: "신뢰", description: "이 사람은 내 편이야! 믿고 기댈 수 있다는 든든한 느낌이에요.", bgColor: "#8FD98C", textColor: "#1E5C28", level: 2, family: "trust" },
  { id: "admiration", word: "존경", description: "저 사람처럼 되고 싶다! 대단하다고 느끼며 우러러보는 느낌이에요.", bgColor: "#3FA653", textColor: "#F0FFF0", level: 3, family: "trust" },

  // 공포 계열 (연두)
  { id: "apprehension", word: "불안", description: "혹시 나쁜 일이 생기면 어떡하지? 마음이 뒤숭숭하고 걱정되는 느낌이에요.", bgColor: "#E4EFB2", textColor: "#4F5E1A", level: 1, family: "fear" },
  { id: "fear", word: "공포", description: "위험하거나 무서운 것이 있을 때 몸이 떨리고 피하고 싶은 느낌이에요.", bgColor: "#C2D85F", textColor: "#44551A", level: 2, family: "fear" },
  { id: "terror", word: "극심한 공포", description: "심장이 쿵 내려앉을 만큼 너무 무서워서 꼼짝도 못하는 느낌이에요!", bgColor: "#8BA82E", textColor: "#F7FBE8", level: 3, family: "fear" },

  // 놀라움 계열 (하늘)
  { id: "distraction", word: "혼란", description: "갑자기 무슨 일이 생겨서 머릿속이 하얘지고 정신이 어리둥절해지는 느낌이에요.", bgColor: "#CDEBF7", textColor: "#155E80", level: 1, family: "surprise" },
  { id: "surprise", word: "놀라움", description: "전혀 예상하지 못한 일이 갑자기 일어났을 때 눈이 동그래지는 느낌이에요.", bgColor: "#7FD0EE", textColor: "#0C4D6B", level: 2, family: "surprise" },
  { id: "amazement", word: "깜짝놀람", description: "세상에! 이런 게 있다니! 입이 떡 벌어질 만큼 놀랍고 신기한 느낌이에요!", bgColor: "#3BA7D9", textColor: "#F0FAFF", level: 3, family: "surprise" },

  // 슬픔 계열 (파랑)
  { id: "pensiveness", word: "수심", description: "딱히 이유는 없는데 기운이 없고 어깨가 처지는 느낌이에요.", bgColor: "#CBD7F2", textColor: "#2A3F7A", level: 1, family: "sadness" },
  { id: "sadness", word: "슬픔", description: "소중한 것을 잃었거나 속상한 일이 있을 때 눈물이 나고 기운이 없어지는 느낌이에요.", bgColor: "#7C9FD9", textColor: "#1B2F66", level: 2, family: "sadness" },
  { id: "grief", word: "비탄", description: "너무 슬퍼서 가슴이 찢어질 것 같고 아무것도 하기 싫어지는 느낌이에요.", bgColor: "#3F62B0", textColor: "#EAF0FF", level: 3, family: "sadness" },

  // 혐오 계열 (보라)
  { id: "boredom", word: "지루함", description: "재미없는 일이 계속될 때 하품이 나고 딴 짓을 하고 싶어지는 느낌이에요.", bgColor: "#ECCBE9", textColor: "#6A2A66", level: 1, family: "disgust" },
  { id: "disgust", word: "혐오", description: "아주 싫거나 더럽다고 느껴질 때 얼굴을 찡그리고 피하고 싶어지는 느낌이에요.", bgColor: "#C97FC4", textColor: "#4E1A4A", level: 2, family: "disgust" },
  { id: "loathing", word: "증오", description: "으악, 정말 싫어! 보기만 해도 온몸이 오싹해지고 피하고 싶은 느낌이에요!", bgColor: "#9B3D96", textColor: "#FBEAF9", level: 3, family: "disgust" },

  // 분노 계열 (빨강)
  { id: "annoyance", word: "짜증", description: "작은 것들이 계속 걸리적거릴 때 에잇! 하고 입술을 삐죽 내미는 느낌이에요.", bgColor: "#F8CDC8", textColor: "#8A332B", level: 1, family: "anger" },
  { id: "anger", word: "분노", description: "불공평하거나 억울한 일이 있을 때 속에서 뜨거운 불이 치솟는 느낌이에요.", bgColor: "#E87B72", textColor: "#6B1A14", level: 2, family: "anger" },
  { id: "rage", word: "격노", description: "너무 화가 나서 온몸이 부들부들 떨리고 소리를 지르고 싶어지는 느낌이에요!", bgColor: "#C03A30", textColor: "#FFEDEB", level: 3, family: "anger" },

  // 기대 계열 (주황)
  { id: "interest", word: "관심", description: "어, 저게 뭐야? 더 알고 싶고 가까이 다가가고 싶어지는 느낌이에요.", bgColor: "#FBDDBE", textColor: "#8A5119", level: 1, family: "anticipation" },
  { id: "anticipation", word: "기대", description: "좋은 일이 생길 것 같아서 두근두근 설레고 기다려지는 느낌이에요.", bgColor: "#F5A95C", textColor: "#6E3B0E", level: 2, family: "anticipation" },
  { id: "vigilance", word: "경계", description: "꼭 해내고 싶어서 온 정신을 집중하고 잔뜩 벼르는 느낌이에요!", bgColor: "#E07A1F", textColor: "#FFF3E6", level: 3, family: "anticipation" },
];

// 기본 감정 8가지 (level 2) — 바퀴 색상 순서
export const basicEmotions: Emotion[] = familyOrder.map(
  (family) => allEmotions.find((e) => e.family === family && e.level === 2)!,
);

/** 한 계열의 감정들을 1→2→3 단계 순서로 반환 */
export function getFamilyEmotions(family: EmotionFamily): Emotion[] {
  return allEmotions
    .filter((e) => e.family === family)
    .sort((a, b) => a.level - b.level);
}

export interface EmotionGroup {
  family: EmotionFamily;
  name: string;
  accent: string;
  basic: Emotion; // level 2
  emotions: Emotion[]; // [level1, level2, level3]
}

/** 계열별 그룹 (바퀴 색상 순서) */
export const emotionGroups: EmotionGroup[] = familyOrder.map((family) => {
  const emotions = getFamilyEmotions(family);
  return {
    family,
    name: familyMeta[family].name,
    accent: familyMeta[family].accent,
    basic: emotions.find((e) => e.level === 2)!,
    emotions,
  };
});

export const levelLabel: Record<EmotionLevel, string> = {
  1: "1단계",
  2: "2단계",
  3: "3단계",
};
