export const addHash = (str: string): string => {
  return `#${str}`;
};

// 문자열에서 #을 제거하는 함수
export const removeHash = (str: string): string => {
  return str.replace(/^#/, '');
};