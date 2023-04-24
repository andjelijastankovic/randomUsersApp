export const formatDate = (date) => {
    let newDate = new Date(date);
    return `${newDate.toLocaleDateString("en-GB").replaceAll('/', '.')}.`;
}