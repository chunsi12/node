//getdate.js
//현재 날짜를 문자열 형태로 반환하는 함수
export function getCurrentDate(){
  const today = new Date();
  return today.toISOString().substring(0,10); //yyyy-mm-dd형식
}

export function getDayOfWeek(dateString){
  const date = new Date(dateString);
  return date.getDay();
}
export default function formatMessage(username, message){
  return '${username}:${message}'; //해당 패턴의 문자열
}