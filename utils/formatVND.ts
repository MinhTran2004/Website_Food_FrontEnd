export function formatVND(amount: number): string {
  if (!amount) return '';
  return amount.toLocaleString("vi-VN") + ' VND';
}
