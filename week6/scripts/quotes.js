var quotes = [
    "\“Dios está en los detalles\" -Gary E. Stevenson",
    "\“Porque sin FE...lo único que queda es oscuridad\" -Gary E. Stevenson",
    "\“Paciencia en sus dudas y entendimiento en sus dificultades\" -Neil L. Andersen",
    "\“José Smith nos demostró que la oración de fe es la clave para recibir revelación de Dios\" -Henry B. Eyring",
    "\“El Evangelio de Jesucristo es la mayor causa del mundo\" -Douglas D. Holmes",
    "\“Ustedes están entre lo mejor que el Señor ha enviado jamás a este mundo, ustedes tienen la capacidad de ser más inteligentes y sabios y tener un impacto en el mundo que cualquier otra generación\" -Douglas D. Holmes",
    "\“No hay mejor defensor de la mujer y del sexo femenino que Jesucristo\" -Joy D. Jones",
    "\“Estoy aquí y sé donde estás. Haz lo mejor que puedas y YO me encargaré del resto\" -Benjamin M. Z. Tai",
    "\“Anhelamos ser más mansos, más puros, firmes, más como Cristo\" -Dale G. Renlund",
    "\“Al mantenernos centrados en Cristo sentiremos paz, y veremos los milagros de Dios cualesquiera que sean en su tiempo y a su manera\" -John A. McCune",
    "\Mi alma se regocija en que no estaré enteramente solo en el mundo\" -Ulises Soares",
    "\“El Señor ama el esfuerzo y el esfuerzo brinda galardones\" -Joy D. Jones",
    "\“Este año será extraordinario a medidad que nos concentremos atentamente en el Salvador y en su evangelio restaurado\" -Russell M. Nelson",
    "\“La fe, la obediencia y la verdadera intención, abren las ventanas de los cielos\" -Neil . Andersen",
    "\“Para conectar nuestro corazón con el cielo, necesitamos experiencias espirituales personales\" -Douglas D. Holmes",
    "\“Cuando hayan pecado contra la luz, como todos lo hacemos, Él los redimirá si tan solo lo miran a Él y le siguen\" -James R. Rasban",
    "\¿Cuándo fue la última vez que sintieron la dulce influencia de la expiación del Salvador en su vida?\" -Gérald Caussé",
    "\“Através de su sufrimiento llegaron a conocer a Dios\" -M. Russell Ballard",
    "\“La iglesia de Cristo fue restaurada a fin de ayudar a los hijos del convenio de Cristo a permanecer en su senda\" -John A. McCune",
    "\“La oración de fe es la clave para la revelación de Dios\" -Henry B. Eyring",
    "\“Mediante el poder del Espíritu Santo el Salvador los transformará días tras días...y sabrán que YO SOY\" -Gérald Caussé",
    "\“Recuerden que...El Salvador ama restaurar lo que ustedes no pueden restaurar, que Él ama sanar heridas que ustedes no pueden sanar, que Él ama reparar lo que ha sido roto irreparablemente y que Él ama sanar aún permanentemente los corazones rotos\" -Dale G. Renlund",
    "\“Él nos envuelve eternamente entre los lazos de su amor\" -Gerrit W. Gong",
    "\“El Señor me dará paz y respuestas, en el momento en que yo las necesito\" -Laudy R. Kaouk",
];

var randomQuote = document.getElementById('new-quote').addEventListener("click", newQuote);

function newQuote(){
    let generateQuote = quotes[Math.floor(Math.random() * quotes.length)];
    let printQuote = document.getElementById('quote-here');
    printQuote.textContent = generateQuote;
}
