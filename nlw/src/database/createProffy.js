module.exports = async function(db, { proffyValue, classValue, classScheduleValues }){
    //Inserir dados na table de proffys
    //await aguarda a finalização da execução do comando por completo antes de ir p o próximo. o seu uso substitui o do ".then()". entretanto, seu uso (do await) também obriga a pôr "async" antes da chamada da função. nesse caso, ali no module.exports
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `) 

    const proffy_id = insertedProffy.lastID //pega o último id inserido, por corresponder ao último proffy inserido
    
    //Inserir dados na tabela classes
    const insertedClass = await db.run(`
        INSERT INTO classes (
            subject,
            cost,
            proffy_id
        ) VALUES (
            "${classValue.subject}",
            "${classValue.cost}",
            "${proffy_id}"
        );
    `)

    const class_id = insertedClass.lastID

    //Inserir dados na tabela class_schedule
    //map tem a mesma função do forEach, de navegar sobre cada elemento. entretanto, fazendo retorno do um array com os dados do classScheduleValue. Cada vez que a função for rodada no laço de repetição, irá pegar um valor do classScheduleValue inserido pelo usuário. Resumindo, map organiza os dados em um array
    //ainda não está rodando os db.runs(), apenas retornando os dados em array
    const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue) => {
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${classScheduleValue.weekday}",
                "${classScheduleValue.time_from}",
                "${classScheduleValue.time_to}"
            );
        `)
    })

    //Aqui vou executar todos os db.runs() das class_schedules
    await Promise.all(insertedAllClassScheduleValues)
}