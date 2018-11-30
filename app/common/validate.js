// 表单验证
const isNumber = val => {
  var reg = /^\d*$/;
  return val == "" ? false : reg.test(val);
};
const isTel = val => {
  var reg = /^1[3|4|5|7|8]\d{9}$/;
  return reg.test(val);
};

const istruePsd = val => {
  var reg = /^(?=.*\d)(?=.*[A-Za-z])(?=.*[!@#$%^&*?_.,]).{6,16}$/;
  var onlyReg = /^[a-zA-Z0-9!@#$%^&*?_.,]*$/;
  return reg.test(val) && onlyReg.test(val);
};

//验证身份证号
const isIdCard = val => {
  var reg = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/;
  return reg.test(val);
};

//验证银行卡
const isBankcard = val => {
  var reg = /^(\d{16}|\d{19})$/;
  return reg.test(val);
};

//验证真实姓名
const realnameRegExp = val => {
  var reg = /(^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]){2,6}$)/;
  return reg.test(val);
};

export { isNumber, isTel, isIdCard, istruePsd,isBankcard,realnameRegExp };
