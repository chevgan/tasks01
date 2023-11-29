// Добраться до определенного этажа многоэтажного здания, чтобы найти пиццу "(" - вверх; ")" - вниз

//V1
function pizzaQuest(floor) {
    return [...floor].reduce((count, char) => char === '(' ? count + 1 : count - 1, 0);
}
//V2
function pizzaQuest(floor) {
    let count = 0;
    for (const char of floor) {
        if (char === '(') {
            count++;
        } else {
            count--;
        }
    }
    return count;
}


console.log(pizzaQuest('(())(((')); // 3
console.log(pizzaQuest('()()')); // 0