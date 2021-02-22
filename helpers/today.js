module.exports = function (info) {
    let data = new Date();
    return `${data.getFullYear()}-${("0" + (data.getMonth() + 1)).slice(-2)}-${("0" + (data.getDate() + 1)).slice(-2)}`;
}