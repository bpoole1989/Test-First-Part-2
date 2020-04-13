/* eslint-disable no-unused-vars */

const indexAndValue = (array) => array.map((elem, i) => {return {index: i, value: elem};});

const capitalize = (str) => {return str.toUpperCase();}

const swapCase = (sentence) => {
    return sentence.split(' ')
    .map((word, i) => {
        if (i%2) return word;
        else return capitalize(word);
    })
    .join(' ');
}

const extensionSearch = (extension, fileArray) => fileArray.filter(file => file.includes(extension));

const getPopulation = (allCountries, selectCountries) => allCountries.reduce((pop, country) => {if (selectCountries.includes(country.name) || selectCountries.length === 0) return pop + country.population; else return pop;}, 0);

const keyifyArrayOfObjects = (key, array) => { 
    return array.reduce((newObject, heroObj) => { 
        newObject[heroObj[key]] = heroObj; 
        return newObject;
    }, {});
}

const powerLevelAverage = (array) => Math.round(array.reduce((power, hero) => power + hero.powerLevel, 0) / array.length);

const mapReduce = (array, transform) => {
    return array.reduce((newArray, value) => {
        newArray.push(transform(value)); 
        return newArray;
    }, []);
}

const filterReduce = (array, test) => {
    return array.reduce((newArray, value) => {
        if (test(value)) newArray.push(value); 
        return newArray;
    }, []);
}

const inYourBudget = (maxPrice, items) => {
    return items
        .filter(item => {
        return item.price <= maxPrice;
        })
        .map(item => {
        return item.item;
        })
}

const separateAndReturnNames = (heroes, whichName, maxNameLength) => {
    return heroes
        .map(hero => {
            hero.firstName = hero.name.split(' ')[0];
            hero.lastName = hero.name.split(' ' )[1];
            return hero[whichName];
        })
        .filter(name => {
            return name.length <= maxNameLength;
        });
    }
        //Specs want map to be used twice here but my way is better =)

    
const priorityTodoDuration = (list) => {
    return list
        .filter(task => task.priority === 'high')
        .reduce((minutes, task) => minutes + task.duration, 0);
}

