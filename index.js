function introduction(name) {
    return(`Hi, my name is ${name}.`);
}

console.log('Aki')
console.log('Samip')

function introductionWithLanguage(name, language) {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}
//console.log('Aki', 'Ember.js')
//console.log('Samip', 'React')

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}
introductionWithLanguageOptional("Gracie")
introductionWithLanguageOptional("Gracie", "Python")
