"use strict"

//console.log('number' + 3 + 3);  виводить number33, бо конкатенує стрінг з трійкою і ще одною трійкою
//console.log(null + 3);  виводить 3, тому що 0 + 3 = 3
//console.log(5 && "qwerty");  "and", "i" повертає останнє обчисленне значення qwerty, тому що обидва операнди є true, обчислення не припиняється -> нема false (сподіваюсь тут вiрно))
//console.log(+'40' + +'2' + "hillel"); виходить 42hillel: унарний плюс залишає 40, додає до нього 2 і конкатенує з hillel
//console.log('10' - 5 === 6); буде false, строга рiвнiсть вказує на те, що порIвнюються типи даних, вони різні (стрiнга і number) = false
//console.log(true + false); 1 бо нуль + 1 = 1
//console.log('4px' - 3); 4 - нечислові символи і отримуєм nan
//console.log('4' - 3); просте віднімання, буде 1 (js все приводить до числа)
//console.log('6' + 3 ** 0); 3 в нульовій степені це 1, 6 конкатенується з 1 = 61
//console.log(12 / '6'); 12 ділиться на 6 = 2
//console.log('10' + (5 === 6)); з строгим порівнянням (5 === 6) - це false і конкатенується з 10 (10false)
//console.log(null == ''); false, бо null не є порожнечею, він - null
//console.log(3 ** (9 / 3)); 9 ділиться на 3, далі 3 в степені 3 = 27
//console.log(!!'false' == !!'true'); "подвiйне конвертування" - значення залишаються ними ж. false - це не 0, '', null, undefined, NaN, а true - це true, тому повертає true при порівнянні
//console.log(0 || '0' && 1); завдяки || виходить з обчислення і повертає значення (1) як тільки знаходить true, 1 - true
//console.log((+null == false) < 1); виходить number замiсть +null і порівнюється з false, виходить true так як значення null = false, далі береться true як 1 і 1 < 1 = false
//console.log(false && true || true)  true так як || повертає перше значення
//console.log(false && (false || true)); отримуємо перше значення - в решті false
//console.log((+null == false) < 1 ** 5); зліва null перетворюється в 0 == false(0) = true, справа отримали 1(true). true < true = отримали false





