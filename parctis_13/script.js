const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

/* function isBudgetEnough(data) {
    const {shops} = data;
    let arrArea = [];
    for (let key in shops){
        arrArea[key] = shops[key].width * shops[key].length;
        
    }console.log(arrArea);
    let volume = arrArea.reduce(function(sum,current){
        return sum + current;
        
    });
    if (data.budget < volume * data.moneyPer1m3 * data.height){
        return 'Бюджета недостаточно';
    }else{
        console.log(volume*data.moneyPer1m3);
        return 'Бюджета достаточно';
    }
} */

function isBudgetEnough(data) {


    let area = 0;
    let volume = 0;

    data.shops.forEach(shop => {
        area += shop.width * shop.length;
    });

    volume = area * data.height;



/*     const {shops} = data;
    let arrArea = [];
    for (let key in shops){
        arrArea[key] = key.width * shops[key].length;
        
    }console.log(arrArea);
    let volume = arrArea.reduce(function(sum,current){
        return sum + current;
        
    }); */
    if (data.budget < volume * data.moneyPer1m3){
        return 'Бюджета недостаточно';
    }else{
        console.log(volume*data.moneyPer1m3);
        return 'Бюджета достаточно';
    }
}