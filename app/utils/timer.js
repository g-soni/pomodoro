
export const getStandardTimeDigits = (time) => {
  if (String(time).length === 1) {
    return `0${time}`;
  } else {
    return String(time);
  }
}

export const extractSeconds = seconds => seconds % 60;
export const extractMinutes = seconds => Math.floor(seconds / 60);
