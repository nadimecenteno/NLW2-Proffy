const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

function getSubject(subjectNumber){
    const position = +subjectNumber - 1 //+subjectNumber tem o + mais na frente por ser um número. E está subtraindo 1 pois, no array subjects, os índices começam em 0. entretanto, o subjectNumber a ser passado é a variável loop.index, do nunjucks - que começa em 1. por isso subtrai o 1 do subjNumb para que comece em 0
    return subjects[position]
}

function convertHoursToMinutes(time){
    //função split é do js, para atributos do tipo string e divide a string ao achar o argumento passado por parâmetro. nesse caso, vai-se dividir o tempo em 2 strings. exemplo "09:00" terá como resultado do split o array ["09", "00"]
    const [hour, minutes] = time.split(":")
    //Number() é uma funcionalidade que converte em número. no caso, só irá conferir o resultado do cálculo ser retornado como número
    return Number((hour * 60) + minutes)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}