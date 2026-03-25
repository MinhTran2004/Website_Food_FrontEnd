export function getRelativeTime(date: Date | string | number) {
  const now = new Date().getTime();
  const input = new Date(date).getTime();

  const diff = Math.floor((now - input) / 1000); // seconds

  if (diff < 60) {
    return { value: diff, unit: 'Giây' };
  }

  const minutes = Math.floor(diff / 60);
  if (minutes < 60) {
    return { value: minutes, unit: 'phút' };
  }

  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return { value: hours, unit: 'giờ' };
  }

  const days = Math.floor(hours / 24);
  if (days < 30) {
    return { value: days, unit: 'ngày' };
  }

  const months = Math.floor(days / 30);
  if (months < 12) {
    return { value: months, unit: 'tháng' };
  }

  const years = Math.floor(months / 12);
  return { value: years, unit: 'năm' };
}