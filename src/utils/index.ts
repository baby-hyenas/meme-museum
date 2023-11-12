export const addHash = (str: string): string => {
  return `#${str}`;
};

// 문자열에서 #을 제거하는 함수
export const removeHash = (str: string): string => {
  return str.replace(/^#/, '');
};

export const containNoCase = (base: string, compare: string) =>
  base.toLocaleLowerCase().indexOf(compare.toLocaleLowerCase()) >= 0;

export const includeByCho = (search : string, targetWord : string) => {
  return makeRegexByCho(search).test(targetWord);
}

export const makeRegexByCho = (search = "")  => {
  const escapedSearch = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = CHO_HANGUL.reduce(
    (acc, cho, index) =>
      acc.replace(
        new RegExp(cho, "g"),
        `[${combine(index, 0, 0)}-${combine(index + 1, 0, -1)}]`
      ),
      escapedSearch
  );
  
  return new RegExp(`(${regex})`, "g");
}

const CHO_HANGUL = [
  'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ',
  'ㄹ', 'ㅁ', 'ㅂ','ㅃ', 'ㅅ',
  'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ',
  'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ',
];

const HANGUL_START_CHARCODE = "가".charCodeAt(0);

const CHO_PERIOD = Math.floor("까".charCodeAt(0) - "가".charCodeAt(0));
const JUNG_PERIOD = Math.floor("개".charCodeAt(0) - "가".charCodeAt(0));

const combine = (cho : number, jung : number , jong : number) : string =>  {
  return String.fromCharCode(
    HANGUL_START_CHARCODE + cho * CHO_PERIOD + jung * JUNG_PERIOD + jong
  );
}



