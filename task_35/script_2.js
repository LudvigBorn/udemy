const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs(plan){
        const {languages} = plan.skills;
        let languages2 = languages.join(" ").toUpperCase();
        return `Мне ${plan['age']} и я владею языками: ${languages2}`;
    }
};

function showExperience(plan) {
    const {exp} = plan['skills'];
    //return plan['skills']['exp'];
    return exp;
}


function showProgrammingLangs(plan) {
    let result = '';
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs){
        result += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    return result;
}

