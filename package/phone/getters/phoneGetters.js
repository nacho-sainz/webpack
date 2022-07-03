/**
 * countryCode +1
 * areaCode 480
 * centralOffice/exchangeCode 725
 * lineNumber 9488
 */
function getPhoneNumberMetaData(phoneNumber) {
  const validatedPhoneNumber = phoneNumber
    .split('')
    .filter(char => /^[\d\+]$/.test(char))
    .join('');
  if (validatedPhoneNumber.length < 10) throw new Error('Invalid phone number');
  const countryCode = validatedPhoneNumber.length > 10 ? validatedPhoneNumber.slice(0, -10) : null;
  const areaCode = validatedPhoneNumber.slice(-10, -7);
  const centralOffice = validatedPhoneNumber.slice(-7, -4);
  const lineNumber = validatedPhoneNumber.slice(-4);

  return {
    countryCode,
    areaCode,
    centralOffice,
    lineNumber,
  };
}
