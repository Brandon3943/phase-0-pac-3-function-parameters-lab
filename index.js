//name
function introduction(name) {
    return `Hi, my name is ${name}.`
}

console.log(introduction('Aki'))

//name and language
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

console.log(introductionWithLanguage('Aki', 'Ember.js'))

//name & language & default / override
function introductionWithLanguageOptional(name, language = 'JavaScript') {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

console.log(introductionWithLanguageOptional('Gracie', 'Python'))

