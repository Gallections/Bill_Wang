export const isEmail = (email) => {
    if (email.includes('@') && email.includes('.')) {
        return true;
    }
    return false;
}

export const isPhoneNumber = (phoneNumber) => {
    const regex = /^[0-9-]*$/;
    if (!regex.test(phoneNumber)) {
        return false;
    }

    if (phoneNumber.length === 12 && phoneNumber[3] === '-' && phoneNumber[7] === '-') {
        return true;
    } else if (phoneNumber.length === 10 || phoneNumber.length === 11) {
        return true;
    }
    return false;
}

