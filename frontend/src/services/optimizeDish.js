export const optimizedDishes = (dishes, key) => {
    if (!dishes || dishes.length <= 8) return dishes;
    require("string_score");
    key = convertVietnamese(key);
    dishes.forEach((element) => {
        const name = convertVietnamese(element.name);
        if (name.length > key.length) element.score = name.score(key);
        else element.score = key.score(name);
    });
    // Not use .sort (build in) because change position if same score
    // Use unshift because score > 0 is few
    // => Best solution: Sort but no change position / Filter score > 0 => .sort()
    dishes.forEach((item, i) => {
        if (item.score > 0) {
            dishes.splice(i, 1);
            dishes.unshift(item);
        }
    });
    if (dishes[7].score < 0.3) return dishes.splice(0, 8);
    else return dishes.filter((f) => f.score > 0.5);
};

function convertVietnamese(str) {
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(
        /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,
        ""
    );
    str = str.replace(/-+-/g, "");
    str = str.replace(/^\-+|\-+$/g, "");
    str = str.replace("-", "");
    str = str.replace("", "");

    return str;
}
