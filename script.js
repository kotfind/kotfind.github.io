var dayInput = document.getElementById("day");
var monthInput = document.getElementById("month");
var yearInput = document.getElementById("year");
var errorDiv = document.getElementById("error");

function loop(v) {
    return 1 - Math.abs((v % 2) - 1);
}

function format(r, g, b) {
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

function update() {
    var day = dayInput.value;
    var month = monthInput.value;
    var year = yearInput.value;

    var color = format(
        255 * loop(day / 31),
        255 * loop(month / 12),
        255 * loop(year / 20)
    );

    // console.log(color);
    document.body.style.background = color;
}

dayInput.onchange = monthInput.onchange = yearInput.onchange = update;
