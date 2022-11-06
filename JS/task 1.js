let a = prompt ("Введите число:");
let b = +a;
if (typeof b == 'number' && !isNaN(b)) {
    if (b == 0) {
        console.log ('Ноль');
    } else if (b % 2 == 0) {
        console.log ('Число чётное');
    } else {
        console.log ('число нечётное');}
} else {
    console.log ('Упс, кажется, вы ошиблись')}


