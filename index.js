// 1. Seer to Mon

function seerToMon(seer){
    let seerInAbs = Math.abs(seer);
    if (((seerInAbs / seer) == -1) || (typeof (seer) == 'string')) {
        return 'invalid input';
    }
    else {
        let mon = seer / 40;
        return mon.toFixed(3);
    }
}

var seerQuantity = 596;
var monQuantity = seerToMon(seerQuantity);
console.log(seerQuantity, 'Seer = '+ monQuantity, 'Mon');


// 2. Total Sales 

function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {

    shirtQuantityInAbs = Math.abs(shirtQuantity);
    pantQuantityInAbs = Math.abs(pantQuantity);
    shoeQuantityInAbs = Math.abs(shoeQuantity);

    if ((shirtQuantityInAbs / shirtQuantity) == -1 || (pantQuantityInAbs / pantQuantity) == -1 || (shoeQuantityInAbs / shoeQuantity) == -1 || (typeof (shirtQuantity, pantQuantity, shoeQuantity)) == 'string') {
        return 'invalid input';
    }
    else {
        const perShirtPrice = 100;
        const perPantPrice = 200;
        const perShoePrice = 500;
        let totalShirtPrice = shirtQuantity * perShirtPrice;
        let totalPantPrice = pantQuantity * perPantPrice;
        let totalShoePrice = shoeQuantity * perShoePrice;

        let totalPrice = totalShirtPrice + totalPantPrice + totalShoePrice;
        return totalPrice;
    }

}

let totalCost = totalSales(6, 3, 2);
console.log(totalCost);


// 3. Delivery Cost 

function deliveryCost(Quantity) {
    let QuantityInAbs = Math.abs(Quantity);
    if (((QuantityInAbs / Quantity) == -1) || (typeof (Quantity) == 'string')) {
        return 'invalid input';
    }
    else {
        const firstPerCost = 100;
        const secondPerCost = 80;
        const restPerCost = 50;
        if (Quantity <= 100) {
            let first100Cost = Quantity * firstPerCost;
            return first100Cost;
        }
        else if (Quantity <= 200) {
            let second100Cost = ((Quantity - 100) * secondPerCost);
            let first100Cost = 100 * firstPerCost;
            let secondTotalCost = second100Cost + first100Cost;
            return secondTotalCost;
        }
        else {
            let restLastCost = ((Quantity - 200) * restPerCost);
            let first100Cost = 100 * firstPerCost;
            let second100Cost = 100 * secondPerCost;
            restCost = first100Cost + second100Cost + restLastCost;
            return restCost;
        }
    }
}

let totalCost = deliveryCost(250);
console.log(totalCost);


// 4. Perfect Friend 

let friends = ['Elon', 'Bernard', 'Zuckerberg', 'Jankr', 'Bezos', 'Ellison', 'Page']

function perfectFriend(allFriends) {
    let newFriend = '';
    for (const friend of allFriends) {
        if (friend == -1) {
            return 'ERROR!!! Tumi mia friend namer kolonko';
        }
        else if(friend.length == 5) {
            newFriend = friend;
            break;
            }
        }
    return newFriend;
}

let besty = perfectFriend(friends);
console.log(besty);