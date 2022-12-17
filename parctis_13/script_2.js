const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Sam', 'Takesi'];
//

function sortStudentsByGroups(arr) {
    arr.sort();
    let arr2 = [[],[],[]];
    for (let i = 0;i < 3; i++){
        for (let j = 0;j < 3; j++){
        arr2[i].push(arr[j+i*3]);
        };
    }
    if (arr.length <= 9){
        arr2.push(`Оставшиеся студенты: -`);
    }else{
        arr2.push(`Оставшиеся студенты: ${arr.slice(9).join(", ")}`);
    }

    return arr2;
    
}

console.log(sortStudentsByGroups(students));