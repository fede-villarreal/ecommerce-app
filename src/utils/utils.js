export const toCapitalCase = (text) => {
    return text.toLowerCase().replace(/(?:^|-|\s)\S/g, (t) => t.toUpperCase());
}