const calcLoadingProgress = (stop, tickets) => {
  const percent = (tickets.length * 100) / 9000;
  const correctPercent = percent > 100 ? 100 : percent;
  return stop ? 100 : correctPercent;
};

export default calcLoadingProgress;
