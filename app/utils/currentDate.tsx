export const getCurretnDate = () => {
  const currentDate = new Date().toLocaleDateString
  ('en-US', {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })
  return currentDate
}