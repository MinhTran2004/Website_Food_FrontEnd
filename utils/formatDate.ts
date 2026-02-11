export const formatDate = (date: string) => {
  const d = new Date(date);

  const datePart = d.toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const timePart = d.toLocaleTimeString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return `${datePart} ${timePart}`;
};