function getAlias(str) {
    var result = str.replace(/\s+/g, ' ');
    result = result.split(" ");
    result = result.join("-");
    return result + "-" + Date.now();
}

export { getAlias };