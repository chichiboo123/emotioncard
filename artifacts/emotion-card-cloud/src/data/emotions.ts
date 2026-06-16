export type EmotionIntensity = 'strong' | 'medium' | 'weak';

export interface Emotion {
  id: string;
  word: string;
  description: string;
  bgColor: string;
  textColor: string;
  intensity: EmotionIntensity;
}

export const basicEmotions: Emotion[] = [
  {
    id: "joy",
    word: "기쁨",
    description: "좋은 일이 생겼을 때 마음이 환해지고 웃음이 나는 느낌이에요.",
    bgColor: "#FFD166",
    textColor: "#7A5200",
    intensity: "medium"
  },
  {
    id: "trust",
    word: "신뢰",
    description: "이 사람은 내 편이야! 믿고 기댈 수 있다는 든든한 느낌이에요.",
    bgColor: "#6DD47E",
    textColor: "#1A5C2A",
    intensity: "medium"
  },
  {
    id: "fear",
    word: "두려움",
    description: "위험하거나 무서운 것이 있을 때 몸이 떨리고 피하고 싶은 느낌이에요.",
    bgColor: "#A5C840",
    textColor: "#3A5200",
    intensity: "medium"
  },
  {
    id: "surprise",
    word: "놀라움",
    description: "전혀 예상하지 못한 일이 갑자기 일어났을 때 눈이 동그래지는 느낌이에요.",
    bgColor: "#4FC3F7",
    textColor: "#0050A0",
    intensity: "medium"
  },
  {
    id: "sadness",
    word: "슬픔",
    description: "소중한 것을 잃었거나 속상한 일이 있을 때 눈물이 나고 기운이 없어지는 느낌이에요.",
    bgColor: "#5B9BD5",
    textColor: "#0D2F6E",
    intensity: "medium"
  },
  {
    id: "disgust",
    word: "혐오",
    description: "아주 싫거나 더럽다고 느껴질 때 얼굴을 찡그리고 피하고 싶어지는 느낌이에요.",
    bgColor: "#AB47BC",
    textColor: "#3A0066",
    intensity: "medium"
  },
  {
    id: "anger",
    word: "분노",
    description: "불공평하거나 억울한 일이 있을 때 속에서 뜨거운 불이 치솟는 느낌이에요.",
    bgColor: "#E57373",
    textColor: "#7A0000",
    intensity: "medium"
  },
  {
    id: "anticipation",
    word: "기대",
    description: "좋은 일이 생길 것 같아서 두근두근 설레고 기다려지는 느낌이에요.",
    bgColor: "#FF8C42",
    textColor: "#7A2800",
    intensity: "medium"
  }
];

export const allEmotions: Emotion[] = [
  // 기쁨 계열
  { id: "ecstasy", word: "황홀함", description: "너무너무 기쁘고 행복해서 온몸이 빛나는 것 같은 느낌이에요!", bgColor: "#F5A623", textColor: "#5A3000", intensity: "strong" },
  { id: "joy", word: "기쁨", description: "좋은 일이 생겼을 때 마음이 환해지고 웃음이 나는 느낌이에요.", bgColor: "#FFD166", textColor: "#7A5200", intensity: "medium" },
  { id: "serenity", word: "평온함", description: "마음이 잔잔한 호수처럼 조용하고 편안한 느낌이에요.", bgColor: "#FFF3B0", textColor: "#7A6500", intensity: "weak" },
  // 신뢰 계열
  { id: "admiration", word: "존경", description: "저 사람처럼 되고 싶다! 대단하다고 느끼며 우러러보는 느낌이에요.", bgColor: "#2D9E4F", textColor: "#F0FFF4", intensity: "strong" },
  { id: "trust", word: "신뢰", description: "이 사람은 내 편이야! 믿고 기댈 수 있다는 든든한 느낌이에요.", bgColor: "#6DD47E", textColor: "#1A5C2A", intensity: "medium" },
  { id: "acceptance", word: "수용", description: "있는 그대로 괜찮아. 나와 달라도 받아들일 수 있는 넉넉한 느낌이에요.", bgColor: "#C8F7D0", textColor: "#1A5C2A", intensity: "weak" },
  // 두려움 계열
  { id: "terror", word: "공포", description: "심장이 쿵 내려앉을 만큼 너무 무서워서 꼼짝도 못하는 느낌이에요!", bgColor: "#5C7A29", textColor: "#F0FFF0", intensity: "strong" },
  { id: "fear", word: "두려움", description: "위험하거나 무서운 것이 있을 때 몸이 떨리고 피하고 싶은 느낌이에요.", bgColor: "#A5C840", textColor: "#3A5200", intensity: "medium" },
  { id: "apprehension", word: "불안", description: "혹시 나쁜 일이 생기면 어떡하지? 마음이 뒤숭숭하고 걱정되는 느낌이에요.", bgColor: "#E8F5BF", textColor: "#3A5200", intensity: "weak" },
  // 놀라움 계열
  { id: "amazement", word: "경이로움", description: "세상에! 이런 게 있다니! 입이 떡 벌어질 만큼 놀랍고 신기한 느낌이에요!", bgColor: "#0086B3", textColor: "#E0F7FF", intensity: "strong" },
  { id: "surprise", word: "놀라움", description: "전혀 예상하지 못한 일이 갑자기 일어났을 때 눈이 동그래지는 느낌이에요.", bgColor: "#4FC3F7", textColor: "#0050A0", intensity: "medium" },
  { id: "distraction", word: "멍함", description: "갑자기 무슨 일이 생겨서 머릿속이 하얘지고 정신이 잠깐 어리둥절해지는 느낌이에요.", bgColor: "#B3E5FC", textColor: "#0050A0", intensity: "weak" },
  // 슬픔 계열
  { id: "grief", word: "비통함", description: "너무 슬퍼서 가슴이 찢어질 것 같고 아무것도 하기 싫어지는 느낌이에요.", bgColor: "#1565C0", textColor: "#E8F0FF", intensity: "strong" },
  { id: "sadness", word: "슬픔", description: "소중한 것을 잃었거나 속상한 일이 있을 때 눈물이 나고 기운이 없어지는 느낌이에요.", bgColor: "#5B9BD5", textColor: "#0D2F6E", intensity: "medium" },
  { id: "pensiveness", word: "시무룩함", description: "딱히 이유는 없는데 기운이 없고 어깨가 처지는 느낌이에요.", bgColor: "#BBDEFB", textColor: "#0D2F6E", intensity: "weak" },
  // 혐오 계열
  { id: "loathing", word: "역겨움", description: "으악, 정말 싫어! 보기만 해도 온몸이 오싹해지고 피하고 싶은 느낌이에요!", bgColor: "#6A1B9A", textColor: "#F3E5FF", intensity: "strong" },
  { id: "disgust", word: "혐오", description: "아주 싫거나 더럽다고 느껴질 때 얼굴을 찡그리고 피하고 싶어지는 느낌이에요.", bgColor: "#AB47BC", textColor: "#3A0066", intensity: "medium" },
  { id: "boredom", word: "지루함", description: "재미없는 일이 계속될 때 하품이 나고 딴 짓을 하고 싶어지는 느낌이에요.", bgColor: "#E1BEE7", textColor: "#3A0066", intensity: "weak" },
  // 분노 계열
  { id: "rage", word: "격분", description: "너무 화가 나서 온몸이 부들부들 떨리고 소리를 지르고 싶어지는 느낌이에요!", bgColor: "#B71C1C", textColor: "#FFEBEE", intensity: "strong" },
  { id: "anger", word: "분노", description: "불공평하거나 억울한 일이 있을 때 속에서 뜨거운 불이 치솟는 느낌이에요.", bgColor: "#E57373", textColor: "#7A0000", intensity: "medium" },
  { id: "annoyance", word: "짜증", description: "작은 것들이 계속 걸리적거릴 때 에잇! 하고 입술을 삐죽 내미는 느낌이에요.", bgColor: "#FFCDD2", textColor: "#7A0000", intensity: "weak" },
  // 기대 계열
  { id: "vigilance", word: "열의", description: "꼭 해내고 싶어서 온 정신을 집중하고 잔뜩 벼르는 느낌이에요!", bgColor: "#E65100", textColor: "#FFF3E0", intensity: "strong" },
  { id: "anticipation", word: "기대", description: "좋은 일이 생길 것 같아서 두근두근 설레고 기다려지는 느낌이에요.", bgColor: "#FF8C42", textColor: "#7A2800", intensity: "medium" },
  { id: "interest", word: "흥미", description: "어, 저게 뭐야? 더 알고 싶고 가까이 다가가고 싶어지는 느낌이에요.", bgColor: "#FFD8B8", textColor: "#7A2800", intensity: "weak" },
];