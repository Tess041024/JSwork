

var services = {
"стрижка": "60 грн",
"гоління": "80 грн",
"Миття голови": "100 грн",
price: function () {
    let total = 0;
    for (let key in this) {
        if (typeof this[key] === "string") {
            total += parseFloat(this[key])
    }
}
console.log("Загальна вартiсть послуг: " + total)
},
minPrice: function () {
    let min = Infinity;
    for (let key in this) {
        if (typeof this[key] === "string") {
            min = Math.min(min, parseFloat(this[key]))
            if (min != 0) {
                min = Math.min(min, parseFloat(this[key]))
            }
        }
    }
console.log('Мiнiмальна вартiсть послуг: ' + min)
},

maxPrice: function () {
    let max = -Infinity;
    for (let key in this) {
        if (typeof this[key] === "string") {
            max = Math.max(max, parseFloat(this[key]))
        }
    }
console.log("Максимальная вартiсть послуг: " + max)
},
};

services['фарбування'] = "150 грн";
services['манiкюр'] = "300.50 грн"
services['педикюр'] = "250.75 грн"


services.price()
services.minPrice()
services.maxPrice()
