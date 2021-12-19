const addZeroIfNeeds = (time) => {
  return time > 9 ? time : '0' + time;
};

const formatTime = (date) => {
  const hours = new Date(date).getHours();
  const minutes = new Date(date).getMinutes();
  return addZeroIfNeeds(hours) + ':' + addZeroIfNeeds(minutes);
};

export default formatTime;
