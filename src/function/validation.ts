export const validationEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// export const validationPhone = (phone: string) => {
//   return /^[\d\s\+\-()]{7,15}$/.test(phone);
// };
