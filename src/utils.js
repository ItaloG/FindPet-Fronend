

export const mascaraCep = (cep) => {
    return cep
        .replace(/\D/g, "")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .replace(/(-\d{3})\d+?$/, "$1")
}


export const macaraCell = (cell) => {
    return cell
        .replace(/\D/g, "")
        .replace(/^(\d{2})(\d)/g, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .replace(/(-\d{4})\d+?$/, "$1")
}

export const mascaraTell = (tell) => {
    return tell
        .replace(/\D/g, "")
        .replace(/(\d{4})(\d)/, "$1-$2")
        .replace(/(-\d{4})\d+?$/, "$1")
}