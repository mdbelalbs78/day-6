/* 
 fixed: per item wood requirements
1. chair --> 3 cft
2. table --> 10 cft
3. bed --> 50 cft

vary: quantity
*/

function woodCalulator(chairQuantity, tableQauntity, bedQuantity){

const perChairWood = 3;
const perTableWood = 10;
const perBedWood = 50;

const chairWood = chairQuantity * perChairWood;
const tableWood = tableQauntity* perTableWood;
const bedWood = bedQuantity * perBedWood;

const totalWood = chairWood + tableWood + bedWood;
return totalWood;
}

const totalWood = woodCalulator(1, 0, 0);
console.log(totalWood);