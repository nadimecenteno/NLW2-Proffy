const Database = require('./db') //"./" é para ficar na pasta local atual. no caso, a pasta c::/nlw/src/database
const createProffy = require('./createProffy')

Database.then(async (db) => {
    //Inserir dados
    proffyValue = {
        name: "Nadime Centeno", 
        avatar: "https://avatars3.githubusercontent.com/u/45637641?s=460&u=2437040c982de726c6f5bffbd4327b406b1de8ef&v=4", 
        whatsapp: "75999999", 
        bio: "Estudante de Engenharia de Computação"
    }

    classValue = {
        subject: 1, 
        cost: "20"
        //o proffy_id virá pelo banco de dados
    }

    classScheduleValues = [
        //class_id virá pelo banco de dados, após cadastrarmos a class
        {
            weekday: 1, 
            time_from: 720, 
            time_to: 1220
        },
        {
            weekday: 0, 
            time_from: 520, 
            time_to: 1220
        },
    ]

    //para executar o await em um função, deve pôr async na frente, onde ela é criada (linha 4 desse arquivo).
    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //Consultar os dados inseridos
    
    //Todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //Consultar as classes de um determinado professor
    //E trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)

    //O horário que a pessoa trabalha, por exemplo, é das 8h - 18h
    //O horário do time_from (8h) precisa ser menor ou igual ao horário solicitado pelo usuário, suposto aluno
    //O time_to precisa ser acima (maior) que o solicitado pelo usuário, suposto aluno
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)

    //console.log(selectClassesSchedules)
})