
const useRandomVersion = true; // true로 설정하면 랜덤으로 버전이 선택됩니다. false로 설정하면 아래에서 직접 버전을 선택할 수 있습니다.

export const VERSION = (() => {
  if (!useRandomVersion) {
    return '1';
  }

  const r = Math.random();

  const version =
    r < 0.45 ? '1' :
    r < 0.90 ? '2' :
    r < 0.99 ? '3' :
    '4';

  console.log(`VERSION: ${version}`);

  return version;
})();

// 1. 버전별 다르게 설정해야하는 내용은 여기에 작성합니다.
const VERSION_CONFIGS = [
  { 
    title: "Our Beginning",
    title_top: '9%',
    title_style: 'textContent'
  },
  { 
    title: "Save the Date",
    title_top: '9%',
    title_style: 'textContent'
  },
  { 
    title: "Two Hearts<br>One Journey",
    title_top: '70%',
    title_style: 'innerHTML'
  },
  { 
    title: "A New<br>Chapter Begins",
    title_top: '70%',
    title_style: 'innerHTML'
  }
];

// 2. 외부에서 CONFIG를 호출할 때 사용할 함수를 만듭니다.
export const getConfig = () => {
  // VERSION 숫자에 맞춰 안전하게 데이터를 가져옵니다. 
  // (VERSION이 1부터 시작한다고 가정)
  const versionData = VERSION_CONFIGS[VERSION - 1] || VERSION_CONFIGS[0];

  return {
    title: {
      text: versionData.title,
      top: versionData.title_top,
      style: versionData.title_style
    },
    groom: { role: "신랑", name: "임 창 혁" },
    bride: { role: "신부", name: "강 지 완" },
    dateTime: "2026. 09. 19. SAT 17 : 00",
    venue: "더 화이트 베일 1F 화이트베일홀",
//    calendar: { year: 2026, month: 9, day: 19 }, //이거원래 슬래시 두개있었음
    greeting: [
      "2019년 6월<br>소중한 인연으로 만나<br>7년의 계절을 함께 걸어왔습니다.",
      "이제 서로의 가장 든든한 가족이 되어<br>평생을 함께하고자 합니다.",
      "저희 두 사람의 새로운 시작을<br>따뜻한 마음으로 축복해 주시면 감사하겠습니다."
    ],
    parents: {
      groom: {
        names: "임순빈 · 조경자",
        relation: "의 장남",
        child: "임창혁"
      },
      bride: {
        names: "강영인 · 한석현",
        relation: "의 장녀",
        child: "강지완"
      }
    },
    location: {
      venue: "더 화이트 베일",
      hall: "1F 화이트베일홀",
      address: "서울시 서초구 서초중앙로 14",
      addressDetail: "서울시 서초구 서초동 1445-14 ",
      coords: { lat: 36.3262, lng: 127.3385, name: "더 화이트베일" }, // TODO: 이거 동작 잘 하는지 봐야함. 밑에 links 으로만 되는거같아서
    },
    links: {
      tmap: "https://tmap.life/f9b9aa85",
      kakao: "https://kko.to/LPsU0I-XTm",
      naver: "https://naver.me/xFLuN7bN"
    },
    transport: [
      {
        type: "자가용 이용 시",
        desc: [
          "내비게이션 : '더화이트베일' 검색",
          "주소 : 서초동 1426-5번지 or 서초구 서초중앙로2길 10",
          "주차타워 진출입로가 혼잡하오니,",
          "조금 여유 있게 도착해 주시기 바랍니다."
        ]
      },
      {
        type: "대중교통 이용 시",
        desc: [
          "지하철 : 남부터미널역 4번 출구 도보 2분 거리",
          "버스 : 지선(초록):4319 / 간선(파랑) : 461, 641번 이용",
          "직행 공항버스 : 5300-1, 8501"
//          "도안네거리 방향으로 이동"
        ]
      },
//      {
//        type: "기차 이용 시",
//        desc: [
//          "대전역에서 603번 버스 탑승",
//         "목원대학교 하차 후 도보 이동"
//       ]
//      },
    ],
    gallery: {
      imageCount: 18,
      galleryDescription: "화면을 새로고침해서 다른 버전의 청첩장을 확인해보세요."
    },
    account: {
      desc: [
        "소중한 축복의 마음<br>진심으로 감사드립니다.",
        "부득이한 사정으로<br>참석하지 못하는 분들을 위해<br>계좌번호를 안내드립니다."
      ],
      // (기존 groom, bride 계좌 데이터도 여기에 계속 관리하시면 됩니다)
      groom: [
        { relation: '신랑',      bank: '농협', account: '302-2068-8107-51', holder: '임창혁' },
        { relation: '혼주', bank: '국민', account: '401-24-0381-933', holder: '조경자' },
//        { relation: '신랑 어머니', bank: '은행', account: '계좌', holder: '임순빈' },
      ],
      bride: [
        { relation: '신부',      bank: '기업', account: '049-062073-01-011', holder: '강지완' },
//        { relation: '신부 아버지', bank: '은행', account: '계좌', holder: '강영인' },
        { relation: '혼주', bank: '우리', account: '1002-034-5525-38', holder: '한석현' },
      ],
    }
  };
};

// 사용 시에는 import { getConfig } from './config.js'; 
// const CONFIG = getConfig(); 와 같이 호출해서 쓰시면 됩니다.
