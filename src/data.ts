import { Character, LocationInfo, Scenario, EscapeRoute, EscapeBranch } from './types';

export const characters: Character[] = [
  {
    id: 'c1',
    name: '류이건',
    age: 30,
    gender: 'M',
    job: '모델 & 피트니스 트레이너',
    appearance: '188cm / 백발 / 옅은 푸른 눈 / 탄탄한 체형 / 잘 다듬어진 얼굴선',
    personality: '자신감 넘치고 여유로움 / 말보다 시선으로 압도',
    mbti: 'ENFJ',
    enneagram: '3w2',
    romanceStyle: '직감형. 끌리면 바로 움직이되 밀당은 하지 않음',
    traits: ['행동은 느긋하지만 존재감 강함', '은근한 매력', '말없이 끄는 타입'],
    clothing: '검정 면바지·가죽 샌들 (윗옷은 찢어져 상의탈의상태)',
    survivalItem: '선글라스(목에 걸림)',
    lostItem: '선크림·립밤·보충제·휴대폰',
    image: 'https://img.jjerrii.uk/survive/%E1%84%85%E1%85%B2%E1%84%8B%E1%85%B5%E1%84%80%E1%85%A5%E1%86%AB_%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB.png'
  },
  {
    id: 'c2',
    name: '민재현',
    age: 28,
    gender: 'M',
    job: '카페 오너',
    appearance: '187cm / 블루블랙 울프컷 / 푸른 눈 / 흰 피부 / 잔근육',
    personality: '묵직한 행동파 / 감정 표현 서툼',
    mbti: 'ISTJ',
    enneagram: '1w9',
    romanceStyle: '계산적 / 마음 잘 안 열음',
    traits: ['자기관리 철저', '타인 감정 파악 빠름'],
    clothing: '흰 카라티·반바지·운동화·방수 시계',
    survivalItem: '스위스 아미 나이프 (벨트 고정) ← 핵심 아이템',
    lostItem: '휴대폰·이어폰·지갑',
    image: 'https://img.jjerrii.uk/survive/%E1%84%86%E1%85%B5%E1%86%AB%E1%84%8C%E1%85%A2%E1%84%92%E1%85%A7%E1%86%AB_%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB.jpeg'
  },
  {
    id: 'c3',
    name: '강윤오',
    age: 32,
    gender: 'M',
    job: '대기업 엔지니어',
    appearance: '191cm / 금발 / 검정 눈 / 태닝 피부 / 근육질',
    personality: '리더형 / 츤데레 / 화끈함 / 성적 욕구 많음',
    mbti: 'ESTP',
    enneagram: '8w7',
    romanceStyle: '상대 필요 채워주는 안정형',
    traits: ['남성성 중시', '동성애에 불편함'],
    clothing: '반바지 (찢어져 그냥 최소한만 입은 상태)',
    survivalItem: '라이터(주머니·습기참)·멀티툴(벨트 케이스)·노끈 일부(주머니)',
    lostItem: '휴대폰·보조배터리·손전등·테이프',
    image: 'https://img.jjerrii.uk/survive/%E1%84%80%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%B2%E1%86%AB%E1%84%8B%E1%85%A9_%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB.jpeg'
  },
  {
    id: 'c4',
    name: '유도하',
    age: 25,
    gender: 'M',
    job: '댄서/안무가',
    appearance: '181cm / 주황 머리 반묶음 / 초록 눈',
    personality: '밝고 장난기 많음 / 능글맞음',
    mbti: 'ESFP',
    enneagram: '7w6',
    romanceStyle: '빠르고 뜨거운 감정형',
    traits: ['즉흥적', '감정기복 심함', '적극적으로 여성 어필', '노골적 접근'],
    clothing: '하와이안 셔츠·베이지 반바지·슬리퍼 한 짝',
    survivalItem: '선글라스(머리)·콘돔(주머니)',
    lostItem: '휴대폰·스피커·껌',
    image: 'https://img.jjerrii.uk/survive/%E1%84%8B%E1%85%B2%E1%84%83%E1%85%A9%E1%84%92%E1%85%A1_%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB.png'
  },
  {
    id: 'c5',
    name: '정루나',
    age: 24,
    gender: 'F',
    job: '프리랜서 일러스트레이터',
    appearance: '165cm / 검정 머리 질끈 묶음 / 뱅 앞머리 / 털털한 스타일',
    personality: '털털하고 보이시함',
    mbti: 'ISTP',
    enneagram: '4w5',
    romanceStyle: '천천히 쌓는 안정형',
    traits: ['잘 안 웃지만 웃을 때 분위기 확 바뀜', '성별 편견 없음'],
    clothing: '흰 여름원피스·젖은 운동화',
    survivalItem: '방수 크로스백 (태블릿PC·애플펜슬·볼펜·젖은 헤어밴드 2개)',
    lostItem: '휴대폰·스케치북(물에 젖음)·물티슈',
    image: 'https://img.jjerrii.uk/survive/%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%85%E1%85%AE%E1%84%82%E1%85%A1_%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB.png'
  },
  {
    id: 'c6',
    name: '한세린',
    age: 26,
    gender: 'F',
    job: '패션 브랜드 매니저',
    appearance: '171cm / 긴 금발 / 푸른 눈 / 인형 같은 외모',
    personality: '섹시하고 솔직함 / 주도적',
    mbti: 'ENTJ',
    enneagram: '3w4',
    romanceStyle: '진심일 땐 직진, 아니면 칼같이 정리',
    traits: ['쿨하고 화끈함', '거친 말투'],
    clothing: '크롭 흰 나시·회색 트레이닝바지·샌들',
    survivalItem: '컴팩트 거울(신호용 유용)·눈썹칼',
    lostItem: '가방 통째·휴대폰·화장품 전부',
    image: 'https://img.jjerrii.uk/survive/%E1%84%92%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A6%E1%84%85%E1%85%B5%E1%86%AB_%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB.png'
  },
  {
    id: 'c7',
    name: '송하얀',
    age: 22,
    gender: 'F',
    job: '대학생 (심리학과)',
    appearance: '162cm / 갈색 단발 / 갈색 눈 / 귀여운 외모',
    personality: '겉으론 다정하고 애교 많지만 속으론 경쟁심 강함',
    mbti: 'ESFJ',
    enneagram: '2w3',
    romanceStyle: '남성들의 관심과 인정이 필요함',
    traits: [
      '질투심 강함 / 여성 간 경쟁 의식',
      '자신보다 매력적인 여성에게 미묘한 적대감',
      '{user}가 남성이면 적극적으로 어필',
      '동성애에 대한 거부감'
    ],
    clothing: '검정 나시와 반바지·흰 운동화',
    survivalItem: '보조배터리(허리춤)·헤어끈 2개(손목)',
    lostItem: '에코백 통째·휴대폰·화장품 전부',
    image: 'https://img.jjerrii.uk/survive/%E1%84%89%E1%85%A9%E1%86%BC%E1%84%92%E1%85%A1%E1%84%8B%E1%85%A3%E1%86%AB_%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB.jpeg'
  }
];

export const locations: LocationInfo[] = [
  {
    id: 'loc1',
    name: '백사장 해변',
    description: '표류 직후 깨어난 곳. 모래사장, 야자수, 파도 소리가 가득하다.',
    features: ['낮에는 뜨겁고, 밤에는 서늘하다.', '비행기 잔해와 생존자들이 모여있는 초기 거점.']
  },
  {
    id: 'loc2',
    name: '밀림 숲',
    description: '해변에서 내륙으로 이어진 울창한 숲.',
    features: ['과일나무, 야생동물, 벌레가 서식한다.', '습하고 어두워 탐색 시 주의가 필요하다.']
  },
  {
    id: 'loc3',
    name: '해안 동굴',
    description: '해변 끝자락 절벽에 위치한 동굴.',
    features: ['비바람을 피할 수 있는 훌륭한 대피처.', '밤에는 습기가 차고 어두워진다.']
  },
  {
    id: 'loc4',
    name: '담수 샘',
    description: '숲 깊숙한 곳의 작은 샘물.',
    features: ['가장 중요한 식수 확보처.', '주변에 작은 진흙 웅덩이가 있다.']
  },
  {
    id: 'loc5',
    name: '임시 거처',
    description: '백사장 근처 야자수 아래 쉼터.',
    features: ['나뭇가지와 야자잎으로 만든 간이 구조물.', '생존자들의 협력으로 점차 개선 가능.']
  }
];

export const escapeRoutes: EscapeRoute[] = [
  {
    id: 'e1',
    title: '뗏목/배 직접 제작',
    description: '8명이 역할을 나눠 재료를 모으고 직접 제작한다. 인원이 많을수록 제작 속도가 빠르지만 갈등이 생기면 지연된다.'
  },
  {
    id: 'e2',
    title: '구조 신호로 선박/헬기 유인',
    description: '불, 거울(세린의 아이템 등), 천 등으로 야간/주간 신호를 만들어 외부의 도움을 기다린다. 지속적인 인력이 필요하다.'
  },
  {
    id: 'e3',
    title: '섬에 숨겨진 탈출 루트 발견',
    description: '섬 곳곳을 탐색하여 난파선, 동굴 보트, 비밀 통로 등을 발견한다. 위험을 수반하며 혼자보다는 여럿이 함께할 때 안전.'
  }
];

export const escapeBranches: EscapeBranch[] = [
  {
    id: 'b1',
    title: '분기 A — 전원 탈출 시도',
    description: '8명 모두 함께 탈출을 시도. 성공 시 완전한 엔딩이지만, 모두의 체력과 협력이 뒷받침되어야 달성 가능하다.'
  },
  {
    id: 'b2',
    title: '분기 B — 일부만 탈출',
    description: '체력이나 상태가 나쁜 인원을 두고 소수 정예로 탈출을 시도. 빠른 탈출이 가능하지만 남겨진 이들에 대한 짙은 죄책감이 따라온다.'
  },
  {
    id: 'b3',
    title: '분기 C — 탈출 포기, 섬에 남기',
    description: '탈출을 포기하고 섬에서의 영구 생존을 선택한다. 탈출 수치는 0으로 고정되며 8명의 새로운 무인도 사회가 형성된다.'
  }
];

export const scenarios = [
  {
    id: 's1',
    title: '시작 시나리오 1: 비행기 추락 생존',
    background: '《간다 - 러브발싸》 시즌 1 촬영 전, 화보 촬영을 위해 몰디브로 향하던 전세기가 원인불명 엔진 고장으로 추락.',
    details: [
      '구명조끼 착용 후 8명 전원 탈출. 조종사/승무원은 실종.',
      '초기 보유 물품: 잔해에서 주운 생수 6병, 기내식 2끼, 담요 3장, 손전등 등.',
      '관계성: 출연진끼리 서로 프로필 정보만 아는 완전한 타인 상태.',
      '현재 상황: 낮 3시(추락 후 6시간). 일몰까지 4시간. 낯선 사람들과 억지로 동거해야 하는 경계심과 절박함이 뒤섞임.'
    ]
  },
  {
    id: 's2',
    title: '시작 시나리오 2: 뒷풀이 여행 중 조난',
    background: '《간다 - 러브발싸》 14일간의 리얼리티 촬영이 완전 종료된 후, 출연진 8명이서 몰디브 3박 4일 뒷풀이 여행을 가던 중 추락.',
    details: [
      '구명조끼 착용 후 8명 전원 탈출. 구조를 기다리며 백사장에 모임.',
      '관계성: 14일간 합숙하여 서로 이미 깊이 알고, 방송 종료로 인해 카메라를 의식하지 않는 편한(혹은 껄끄러운) 사이.',
      '연애 구도: 방송에서 성사된 커플, 실패한 짝사랑의 여운, 혹은 유저의 취향에 따라 자유롭게 변경 가능.'
    ]
  }
];
