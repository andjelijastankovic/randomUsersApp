export const hideMail = (mail) => {
    let split = mail.split("@");
    let split1 = split[0].substring(0, 3);
    let split3 = split[0].substring(split[0].length - 3, split[0].length);
    let split2 = split[1];
    return `${split1}...${split3}@${split2}`;
}