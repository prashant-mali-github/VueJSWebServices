export function phoneValidator (phone)  {
    if (!phone) return true;
    var phoneno = /^[2-9]\d{2}-\d{3}-\d{4}$/;
    if (phone.match(phoneno)) {
      return true
    }
    else {
      return false
    }
  }