const { p, pEmpty, h1, h2, h3, bullet, numBullet, infoTable, noteBox, secretBox, loreBox, voiceBox, warningBox, cdBox, xpBox, scaleBox, pageBreak, npcBlock, C } = require('./helpers');

function cap5() {
  return [
    h1("5. Zona 2 \u2014 El Pantano de los Muertos"),
    scaleBox("\ud83d\udd35","Azul","Tristeza","Mere of Dead Men, al sur de Neverwinter",C.blueDark,"EBF5FF"),
    pEmpty(100),
    infoTable([
      ["Bonificaci\u00f3n mec\u00e1nica","Efecto al recuperarla"],
      ["Respirar bajo el agua","Permanente para todo el grupo. Sin l\u00edmite de tiempo"],
    ]),
    pEmpty(140),

    h2("5.1 Descripci\u00f3n General de la Zona"),
    p("El Pantano de los Muertos ya era un lugar sombr\u00edo antes de la Niebla Gris. Ahora es algo diferente: no amenazante sino aplastante. El agua se ha vuelto f\u00edsica y metaf\u00f3ricamente m\u00e1s pesada. El cielo llora una lluvia que no moja la piel pero pesa en el pecho. Los \u00e1rboles muertos est\u00e1n perfectamente quietos \u2014 no como \u00e1rboles sin viento, sino como objetos que olvidaron que pueden moverse."),
    pEmpty(80),
    voiceBox("\"El aire del pantano no huele a podredumbre. Huele a papel mojado y a algo que los perfumistas llaman '\u00e1mbar gris' \u2014 el rastro de algo que fue y ya no es. El agua del camino se mueve bajo sus botas pero con demasiada resistencia, como si cada paso requiriera permiso. Logos dice, con voz levemente m\u00e1s baja de lo usual: 'Densidad ambiental elevada 40% sobre el par\u00e1metro biol\u00f3gico seguro. Recomendaci\u00f3n: respirar despacio. El aire aqu\u00ed pesa.'\""),
    pEmpty(140),

    noteBox("OPCIÓN — CAMINO EXPANDIDO (DUNGEON)","Si querés que conseguir la Escama Azul sea una exploración real en vez de un acceso rápido, usá el dungeon 'Las Criptas Anegadas' (sección 11.3). En esa versión, liberar a la Vieja Raíz no entrega la escama directamente: abre una escalera oculta bajo el Árbol de los Cuellos que baja a una cripta inundada de varias salas, con su tesoro y su jefe. Las dos versiones (rápida o dungeon) son compatibles con todo lo de este capítulo — elegí una.","EEF6FF",C.tealDark),
    pEmpty(140),

    h2("5.2 El Efecto de la Escama Perdida"),
    p("La Escama Azul convirti\u00f3 la tristeza en melancol\u00eda s\u00f3lida y compulsiva. El agua no flota \u2014 se hunde en s\u00ed misma. Los animales del pantano est\u00e1n vivos pero no se mueven a menos que sea necesario. Los pocos habitantes de la zona est\u00e1n despiertos pero inm\u00f3viles, mirando el agua."),
    pEmpty(80),
    cdBox([
      ["Constituci\u00f3n ST para resistir el peso emocional del ambiente (al entrar)","12","Desventaja en Carisma durante la primera hora"],
      ["Constituci\u00f3n ST para nadar en el agua densa","15","Velocidad de nado reducida a la mitad"],
      ["Sabidur\u00eda para no caer en pensamiento circular (si pasan m\u00e1s de 2 horas)","13","El personaje queda absorto: pierde su acci\u00f3n en el siguiente turno de combate"],
    ]),
    pEmpty(80),
    warningBox("Rol especial de Hola: Sus conjuraciones para crear puentes y superficies secas son esenciales para que el grupo avance. Si el Mago usa Arcanos activamente para modificar el terreno, el ambiente 'responde' \u2014 se calma levemente donde \u00e9l construye. Mec\u00e1nicamente: los puentes que crea reducen la CD de las tiradas de Constituci\u00f3n en 2 dentro de su alcance."),
    pEmpty(140),

    h2("5.3 Lugares de Inter\u00e9s"),

    h3("La Aldea Hundida de Grauwater"),
    p("Un peque\u00f1o asentamiento de 6 caba\u00f1as, la mitad con agua hasta las rodillas. Cuatro familias viven aqu\u00ed. Est\u00e1n inm\u00f3viles en sus porches, mirando el agua. Responden si se les habla pero con monosilabos y sin levantar la vista. Conocen al esp\u00edritu del pantano \u2014 lo llaman 'la Vieja Ra\u00edz'."),
    pEmpty(80),
    cdBox([
      ["Persuasi\u00f3n para que un aldeano cuente sobre la Vieja Ra\u00edz","11","Solo se\u00f1alan vagamente hacia el centro del pantano"],
      ["Perspicacia para entender que el aldeano sabe m\u00e1s de lo que dice","12","Revelan que la Vieja Ra\u00edz 'llora desde antes que nosotros nacimos, pero antes lloraba bajito'"],
    ]),
    pEmpty(80),

    h3("La Caba\u00f1a de los Hask"),
    p("Una de las seis caba\u00f1as de Grauwater, m\u00e1s cerrada sobre s\u00ed misma que las dem\u00e1s \u2014 postigos apenas entornados, como si no quisieran dejar entrar ni un poco m\u00e1s de luz de la que ya hay. Adentro viven Tobar y Ressa Hask, sentados uno junto al otro sin hablar, mirando el agua igual que el resto del pueblo. Hace dos a\u00f1os perdieron un hijo al nacer; desde que lleg\u00f3 la Niebla, ese duelo viejo volvi\u00f3 a pesar como si fuera reciente. Preguntarles directamente por el ni\u00f1o solo consigue un monos\u00edlabo antes de que vuelvan a mirar el agua \u2014 no es algo que ofrezcan por su cuenta."),
    pEmpty(80),
    p("Percepci\u00f3n o Investigaci\u00f3n CD 12 nota, en un rinc\u00f3n apartado, una cuna tallada a mano que nunca lleg\u00f3 a usarse \u2014 todav\u00eda tiene el barniz sin gastar (ver MS-2A, secci\u00f3n 5.7, para lo que esto conecta)."),
    pEmpty(140),

    h3("El \u00c1rbol de los Cuellos \u2014 El Punto Central"),
    p("Un \u00e1rbol muerto de 15 metros de altura en el centro del pantano, rodeado de agua hasta los hombros. Su nombre viene de las cuerdas y cintas que la gente ata en sus ramas \u2014 cada una es un recuerdo de alguien que muri\u00f3 cerca. Aqu\u00ed vive el esp\u00edritu."),
    pEmpty(80),
    cdBox([
      ["Hola (Arcanos) para crear una plataforma estable para llegar al \u00e1rbol","13","Deben nadar (Constituci\u00f3n CD 15 por el agua densa)"],
      ["Religi\u00f3n para reconocer las cuerdas como ofrendas de duelo","12","Entender esto da Ventaja en la interacci\u00f3n con el esp\u00edritu"],
    ]),
    pEmpty(80),
    noteBox("ESTO ES AUTOM\u00c1TICO \u2014 NO LO DEJES PASAR","La primera vez que el grupo se acerca al \u00c1rbol de los Cuellos, ocurre lo siguiente sin tirada de por medio. Es el gancho de MS-2A (secci\u00f3n 5.7) y tiene que verse, no solo escucharse de o\u00eddas.","FFF0F0",C.redDark),
    pEmpty(80),
    voiceBox("\"Un golpe de viento pesado sacude las ramas m\u00e1s bajas \u2014 y una cinta gris, ya deshilachada por los a\u00f1os, se suelta y cae. Toca el agua densa del pantano y, por medio segundo, algo pasa: las letras bordadas se iluminan d\u00e9bilmente, como si alguien las leyera en voz alta desde muy lejos \u2014 una risa corta, la silueta borrosa de alguien saludando \u2014 y despu\u00e9s nada. La cinta se deshace en el agua como si nunca hubiera estado ah\u00ed. No queda ni un hilo. Logos, tras un silencio: 'Objeto perdido. Sin registro previo del contenido. No hay forma de recuperar lo que se acaba de borrar.'\""),
    pEmpty(80),
    p("El mensaje tiene que quedar claro sin necesidad de explicarlo: lo que toca esta agua, se pierde para siempre. Si alguien investiga las cintas que quedan (Investigaci\u00f3n CD 13, ver MS-2A en 5.7), va a encontrar 3 que todav\u00eda est\u00e1n sueltas o a punto de soltarse \u2014 y esta vez el grupo ya sabe exactamente qu\u00e9 pasa si no hacen nada."),
    pEmpty(140),

    h3("La Caba\u00f1a del Rastreador"),
    p("Una caba\u00f1a en un mont\u00edculo seco, bien escondida (Percepci\u00f3n CD 15 para encontrarla). Dentro hay mapas detallados del pantano y provisiones para 2 semanas. El rastreador (Goro, ver NPC) vive aqu\u00ed y es la \u00fanica persona que se mueve libremente por la zona."),
    pEmpty(140),

    h3("La Choza Abandonada de la Curandera"),
    p("Escondida entre ra\u00edces altas, a suficiente distancia del pueblo como para no ser obvia (Percepci\u00f3n CD 13 para encontrarla mientras exploran el pantano). Adentro, todo qued\u00f3 congelado en el tiempo: frascos de hierbas secas, un mortero con restos de un preparado que nunca se termin\u00f3 de moler, y un peque\u00f1o retrato tallado en madera de una mujer de mediana edad con las manos manchadas de tinturas. Debajo, grabado con la misma letra prolija de las etiquetas de los frascos: 'Yenna'. Quien busque con cuidado (Investigaci\u00f3n CD 12) tambi\u00e9n encuentra, escrita de pu\u00f1o y letra de Yenna, una carta sin enviar dirigida a 'mi tejedora, la \u00fanica que nunca dej\u00f3 una hebra suelta' \u2014 un apodo que solo alguien que conoci\u00f3 bien a Marga de joven usar\u00eda. Si se le muestra m\u00e1s adelante, ella no necesita que se lo expliquen: se queda en silencio un largo rato antes de doblarla con cuidado y guardarla entre su ropa."),
    pEmpty(80),
    secretBox("EL SECRETO DE LA CHOZA \u2014 para que valga la pena quedarse un rato ah\u00ed adentro: bajo la mesa de trabajo hay un cofre con un cierre disimulado (Investigaci\u00f3n CD 14 para notarlo, o Fuerza CD 13 para forzarlo sin consecuencias, la choza est\u00e1 abandonada hace a\u00f1os). Adentro, el cuaderno de consultas privadas de Yenna: entradas cl\u00ednicas, en su mayor\u00eda remedios comunes del pueblo, hasta una anotaci\u00f3n distinta cerca de las \u00faltimas p\u00e1ginas, con letra m\u00e1s apretada, como si le hubiera costado escribirla: 'Paciente sin nombre, una sola visita. No lloraba, pero pesaba como si llorara todo el tiempo. Le di lo \u00fanico que s\u00e9 dar y no sirvi\u00f3 de nada. No volvi\u00f3.' Sin fecha, sin m\u00e1s detalles. Nada en esta campa\u00f1a confirma ni niega si se trata del Coleccionista (ver 5.6 y MS-2B) \u2014 dejalo sin resolver, igual que el resto de sus pistas."),
    pEmpty(140),

    h2("5.4 NPCs de la Zona"),

    ...npcBlock(
      "La Vieja Ra\u00edz \u2014 El Esp\u00edritu",
      "El NPC central de la zona. Guardiana involuntaria de la Escama Azul",
      "Se manifiesta como la silueta trasl\u00facida de una mujer de mediana edad, hecha de niebla azul oscura. Su cara cambia seg\u00fan el recuerdo que est\u00e1 reviviendo. A veces parece joven; a veces muy anciana",
      "Atrapada en un loop de un recuerdo espec\u00edfico: el \u00faltimo d\u00eda que pas\u00f3 con su hija, antes de que muriera. Revive ese d\u00eda en silencio, una y otra vez. No es hostil \u2014 simplemente no puede parar",
      "Soltar el recuerdo \u2014 pero no puede sola. Lleva tantos a\u00f1os reviviendo ese d\u00eda que ya no sabe c\u00f3mo ser\u00eda el d\u00eda siguiente",
      "Si el grupo la escucha sin interrumpir (ver La Decisi\u00f3n Moral), eventualmente llega al final del recuerdo que nunca se permiti\u00f3 vivir: el momento en que su hija le dijo que la quer\u00eda. Al llegar ah\u00ed, la Vieja Ra\u00edz puede soltar. Desaparece dejando la Escama Azul y un cristal con su recuerdo preservado \u2014 un regalo para quien quiera cargarlo",
      "[En silencio. Sus labios se mueven pero no sale sonido \u2014 hasta que alguien le pregunta su nombre]"
    ),

    ...npcBlock(
      "Goro el Rastreador",
      "Habitante secreto del pantano. Fuente de informaci\u00f3n y gu\u00eda opcional",
      "45 a\u00f1os, complexi\u00f3n robusta, piel con patrones de cicatrices rituales. Habla poco y bajo \u2014 el pantano le ense\u00f1\u00f3 que gastar palabras de m\u00e1s no sirve de nada. Lleva siempre un fardo con todo lo necesario para sobrevivir",
      "Observador y calmado. Elige bien lo poco que dice. No desconf\u00eda del grupo pero los eval\u00faa en silencio antes de ayudar",
      "Proteger el pantano de intrusos peligrosos y documentar los cambios desde que lleg\u00f3 la Niebla Gris. Tiene 3 semanas de registros detallados en pergaminos",
      "Si el grupo demuestra que no est\u00e1 ah\u00ed para explotar el lugar, Goro los gu\u00eda hasta el \u00c1rbol de los Cuellos sin riesgos (evita todos los peligros del camino). Sus pergaminos contienen la \u00faltima vez que vio a Mnem\u00f3s: 'Un anciano que llor\u00f3 frente al \u00e1rbol durante una hora y luego tom\u00f3 algo del agua'",
      "\"Ah\u00ed. En el centro. No hace falta que les cuente m\u00e1s \u2014 ya van a entender solos.\""
    ),

    ...npcBlock(
      "Marga, la Matriarca de Grauwater",
      "L\u00edder de la aldea hundida. Mejor fuente de historia local",
      "65 a\u00f1os, pelo blanco trenzado, ojos que todav\u00eda tienen algo de agudeza a pesar del estado de melancol\u00eda. Siempre tiene las manos ocupadas \u2014 teje incluso mientras mira el agua",
      "Antes: pr\u00e1ctica, protectora, con un humor seco. Ahora: inm\u00f3vil, monos\u00edlaba, pero sus manos no paran de tejer. Es lo \u00fanico que puede hacer",
      "Proteger a las cuatro familias de Grauwater. En estado normal hubiera ya encontrado una soluci\u00f3n \u2014 su incapacidad actual la pesa m\u00e1s que cualquier otra cosa",
      "Si el grupo restaura la Escama, Marga es la primera en moverse. Organiza a los aldeanos para drenar las caba\u00f1as y limpiarse. Le agradece al grupo con informaci\u00f3n: describe al 'Ge\u00f3grafo Azul' que lleg\u00f3 hace meses, c\u00f3mo midi\u00f3 el agua, c\u00f3mo anot\u00f3 'la densidad del llanto colectivo' y luego se fue dejando el pantano m\u00e1s pesado de lo que lo encontr\u00f3",
      "La Vieja Ra\u00edz siempre llor\u00f3. Pero antes su llanto aliviaba. Ahora solo aplasta"
    ),
    pEmpty(140),

    h2("5.5 La Decisión Moral — Escuchar o Borrar"),
    p("La Vieja Raíz no puede liberarse sola. El grupo tiene dos caminos:"),
    pEmpty(80),

    h3("El Relato Completo de la Vieja Raíz (para Opción A)"),
    p("Esto es lo que el narrador cuenta, fragmento por fragmento, mientras alguien del grupo escucha sin interrumpir. Se puede dividir en 4 fragmentos, uno cada vez que el oyente hace una pequeña señal de estar escuchando (un gesto, una pregunta breve, silencio respetuoso):"),
    pEmpty(80),
    voiceBox("\"FRAGMENTO 1: 'Mi hija se llamaba Wren. Tenía el pelo del color de la corteza mojada. El día que recuerdo es uno cualquiera — no el día que murió, no el día que nació. Un martes. Habíamos ido a buscar setas y ella se quejaba de que las botas le quedaban grandes.'\n\nFRAGMENTO 2: 'Nos sentamos en este mismo árbol a comer pan con miel. Ella me preguntó por qué el agua del pantano no se movía como la de los ríos. Le dije que el agua quieta piensa más que el agua que corre. Se rió de mí. Todavía puedo escuchar exactamente cómo se rió.'\n\nFRAGMENTO 3: 'Lo que nunca le dije — lo que he repetido este día mil veces para llegar a decirlo — es que ese martes, mientras ella se quejaba de las botas, yo estaba pensando en otra cosa. Estaba distraída. No la escuché del todo. Y dos semanas después, la fiebre se la llevó, y ese pequeño martes aburrido fue el último día completo que tuvimos.'\n\nFRAGMENTO 4 (el final que nunca pudo vivir): 'Pero si pudiera volver — no cambiaría el día. Solo le diría que la escuché. Que la escucho ahora. Wren: te escuché. Te quise. Eso es todo. Eso es lo único que necesitaba decir.'\""),
    pEmpty(80),
    p("Al llegar al Fragmento 4, la Vieja Raíz se libera. No es información que el grupo 'usa' — es presencia. Si el grupo intenta apresurar el proceso o no escucha activamente (interrumpe, cambia de tema, sugiere atajos), el espíritu vuelve al Fragmento 1 y hay que empezar de nuevo."),
    pEmpty(80),

    h3("Opción A — Escuchar"),
    p("Alguien del grupo se sienta frente al Árbol de los Cuellos y escucha el relato completo de la Vieja Raíz (ver el texto completo arriba) sin interrumpir. Toma tiempo (en juego: 20 minutos — equivalente a 2 encuentros de exploración que el grupo pierde). Al final, el espíritu llega al momento que nunca pudo vivir y se libera en paz."),
    pEmpty(80),
    noteBox("RECOMPENSA OPCIÓN A","El espíritu desaparece en paz y deja la Escama Azul + un Cristal del Recuerdo. El Cristal puede usarse una vez: quien lo rompe revive el recuerdo de Wren y la Vieja Raíz, y gana Inspiración. Logos registra: 'Método: resolución narrativa. Eficiencia: 23%. Resultado emocional: no categorizable. Reclasificando.'","E8F8F8",C.tealDark),
    pEmpty(80),

    h3("Opción B — Destruir el recuerdo"),
    p("Un Mago o Clérigo puede usar un hechizo de disipación para romper el loop del espíritu. Toma 1 acción. El espíritu desaparece instantáneamente. La Escama Azul aparece en el agua. No hay Cristal, y el grupo nunca llega a saber que se llamaba Wren."),
    pEmpty(80),
    noteBox("CONSECUENCIA OPCIÓN B","La Escama aparece inmediatamente. El pantano se normaliza. Logos registra: 'Método: extracción forzada. Tiempo: 6 segundos. Nota: el sujeto ya no existe. Registrando como pérdida de datos permanente.' Esa última frase — 'pérdida de datos permanente' — es la primera vez que Logos usa una expresión que implica valor negativo sobre una pérdida.","FFF0F0",C.redDark),
    pEmpty(80),
    secretBox("Ambas opciones dan la escama. La diferencia está en Logos y en la pista del Coleccionista. Con la Opción A: el espíritu susurra antes de irse que el hombre del libro azul lloró frente al árbol — y luego borró ese llanto. Con la Opción B: esa pista se pierde. El grupo puede descubrirla igual más adelante (vía los pergaminos de Goro, MS-2B), pero más tarde y con más trabajo."),
    pEmpty(140),

    h2("5.6 La Pista del Coleccionista"),
    p("La información que revela el espíritu (Opción A) o que Goro tiene en sus pergaminos: el Coleccionista estuvo en el Árbol de los Cuellos durante una hora. Lloró — Goro lo vio, aunque no entendió por qué un extraño lloraría frente a un árbol. Luego tomó algo del agua y se fue. Cuando se fue, la lluvia se volvió más pesada. Logos procesa esto durante 30 segundos de silencio antes de comentar: 'La hipótesis de que el sujeto carece de emociones requiere revisión. Dato contradictorio registrado.'"),
    pEmpty(140),

    h2("5.7 Misiones Secundarias de la Zona"),

    h3("MS-2A: Las Cuerdas del Árbol"),
    p("El gancho de esta misión ya pasó en la sección 5.3, cuando el grupo vio una cinta anónima disolverse al tocar el agua. Esto es la continuación directa: el Árbol de los Cuellos tiene 47 cuerdas y cintas atadas, y si alguien las examina con ese antecedente fresco (Investigación CD 13), encuentra 3 que todavía están enteras pero sueltas o a medio caer — con nombres y fechas legibles. Sacarlas del árbol antes de que se suelten solas no requiere tirada: alcanza con que alguien se acerque y las agarre, ahora que saben lo que está en juego."),
    pEmpty(80),
    voiceBox("\"De vuelta en Grauwater, si el grupo menciona lo que vio en el árbol (o si Marga simplemente los ve volver mojados y afectados — ella nota esas cosas, aunque no levante la vista), deja el tejido en las manos, quieta, y dice, despacio, como todo lo que dice ahora: 'El agua... se lo lleva todo. Lo que se cae... no vuelve.' Silencio. Luego: 'Si encuentran algo así... protéjanlo. Aunque no sepan de quién es.'\""),
    pEmpty(80),
    p("Esa es toda la instrucción que da — no pide que las devuelvan a nadie en particular, solo que no dejen que el agua se las lleve. Encontrar de quién es cada una y entregarla es una decisión del grupo, no un pedido explícito de Marga:"),
    pEmpty(80),
    infoTable([
      ["Cuerda","Inscripción","Cómo se descubre el destino"],
      ["Cinta roja deshilachada","'Aldric Tresfondo — se ahogó buscando a su perro, año 1481'","En la cabaña hundida de MS-2C hay una vieja lápida de madera apoyada contra la pared exterior con el mismo apellido tallado (automático al explorar la cabaña); o los propios Tresfondo la reconocen al instante una vez rescatados"],
      ["Cuerda de cuero trenzado","'Yenna la Curandera — su último paciente fue el pantano mismo'","Marga reconoce el nombre de inmediato (fue su maestra); o el grupo encuentra su choza abandonada en el pantano (sección 5.3) con un retrato tallado que confirma quién era, sin necesidad de hablar con Marga primero"],
      ["Hilo azul casi podrido","'Para el niño que no llegó a tener nombre'","En la cabaña de los Hask (ver 5.3): la cuna vacía que se nota ahí conecta directo con este hilo. Tobar y Ressa lo confirman si se les muestra, aunque no hablen mucho del tema"],
    ], 2400, 3600, 3360),
    pEmpty(80),
    p("Entregar cada cuerda a su destino correcto (no hace falta encontrar las 3 para que cuente algo) suma confianza de Marga: con las 3 devueltas, la CD de todos los encuentros sociales en el pantano baja en 2 durante el resto de la sesión; con 1 o 2, la reducción es de 1. Devolverlas no es solo información — es un gesto físico, y Grauwater lo nota."),
    pEmpty(80),

    h3("MS-2B: Los Pergaminos de Goro"),
    p("Esto pasa después de ganarse la confianza de Goro (ver NPC), no antes — y no ocurre con él mirando por encima del hombro. Una vez que confía en el grupo, saca el fardo de pergaminos de un compartimento escondido en su cabaña y se los entrega diciendo, sin vueltas: 'Tomen. Ya los leí bastante. No entendí todo lo que anoté yo mismo. Ustedes tienen esa máquina rara' [señala a Logos] '— capaz ella sí.' Después se sienta aparte a tallar algo en silencio, o sale a inspeccionar el perímetro — les deja el material y el tiempo para revisarlo solos. Volver a buscarlo cuando terminan es lo natural, no algo que haya que forzar."),
    pEmpty(80),
    p("Goro lleva 3 semanas registrando cambios en el pantano desde la llegada de la Niebla. Sus pergaminos son detallados y técnicos. Si el grupo los traduce con ayuda de Logos (Logos necesita 10 minutos — 'idioma no reconocido: pictográfico regional'), descubren que el Coleccionista visitó el pantano tres veces antes de extraer la escama. Las dos primeras visitas solo observó. La tercera llegó con algo que Goro describe como 'un frasco de cristal negro que absorbía la luz a su alrededor'."),
    pEmpty(80),
    noteBox("CONEXIÓN DE LORE","El frasco de cristal negro es el mismo tipo de recipiente que encontrarán en el Plano del Archivo. Esta misión secundaria anticipa el Acto III para los jugadores más observadores.","F5F0FF",C.purpleMid),
    pEmpty(80),

    h3("Diálogo con Goro — Si le Preguntan"),
    p("Goro ya no necesita quedarse en silencio total mientras el grupo revisa sus pergaminos — puede quedarse cerca y responder si le preguntan algo puntual, sin dejar de ser alguien de pocas palabras:"),
    pEmpty(60),
    voiceBox("\"Si preguntan por el Coleccionista o el 'Geógrafo Azul': 'Vino tres veces. Las primeras dos, solo miraba. La tercera, lloró. Un hombre así no llora por nada — por eso anoté todo lo que hizo esa vez.'\""),
    pEmpty(60),
    voiceBox("\"Si preguntan por qué lleva un registro tan detallado de todo: 'Este pantano no tiene quién lo cuide. Si no anoto yo, no queda nada. Ni siquiera un recuerdo.'\""),
    pEmpty(60),
    voiceBox("\"Si preguntan específicamente por el frasco de cristal negro: 'No sé qué es. Sé que no me gustó mirarlo. Como si el frasco mirara de vuelta.'\""),
    pEmpty(80),

    h3("Lo que Goro les Pregunta a Ellos"),
    p("No es solo el grupo el que pregunta — dale a Goro la oportunidad de preguntar algo también. Ninguna de estas tiene una respuesta correcta; son para que el grupo sienta que él también los está evaluando, en voz alta esta vez:"),
    pEmpty(60),
    voiceBox("\"Sobre la Vieja Raíz, con un peso genuino en la pregunta: 'Ella lleva mucho tiempo así. ¿Van a apurarla, o le van a dar el tiempo que le hace falta?' — no es retórica. Escuchá la respuesta del grupo y dejá que eso, sutilmente, sea parte de cómo encaran la Opción A o B más adelante (sección 5.5), sin forzar nada.\""),
    pEmpty(60),
    voiceBox("\"Sobre el Coleccionista, con un dejo de fatalismo: 'Si lo llegan a cruzar en otro lado... ¿me avisan? O da igual — no creo que vuelva por acá.'\""),
    pEmpty(60),
    voiceBox("\"Algo más personal, sembrando por qué podría irse con el grupo si la zona queda en paz (ver su ficha jugable, sección 13.3): '¿Todavía hay lugares ahí afuera que no pesen como este? Hace mucho que no lo compruebo yo mismo.'\""),
    pEmpty(80),

    noteBox("DETALLE OPCIONAL — una página que no pertenece","Si alguien revisa los pergaminos de Goro con detenimiento (Investigación CD 16 — alta a propósito, es fácil pasarla por alto entre tanto otro papel), nota que hay UNA página de papel y letra distintos al resto, claramente de otra época y otro autor. Si Goro está presente cuando la encuentran, reacciona con una confusión genuina, sin inventar una explicación que no tiene: 'Esa hoja no es mía. La encontré enganchada en unas raíces, río abajo. No supe qué decía. Me pareció mal tirarla.' Cómo llegó ahí tiene una explicación simple: el papel escasea en el pantano, así que Goro junta cualquier pergamino que encuentra flotando o medio enterrado para reutilizarlo en sus propios registros. Esta hoja en particular ya tenía escritura de los dos lados, en una letra y un idioma que no reconoce — no es su pictográfico regional — así que la guardó intacta en vez de escribir encima, sin saber bien qué decía. Así terminó mezclada con sus notas, sin que él tenga idea de su contenido. Es un fragmento de carta, sin firma, que dice: 'el archivista de quien hablás bien podría ser el chico de la corte vieja, el que solía hacerme tantas preguntas sobre el dolor. Si es él, dale mis saludos — o no. Hace mucho que dejé de pensar en si eso importa.' Ni Logos puede sacar más información: 'Remitente desconocido. Destinatario desconocido. Sin coincidencias adicionales.' Quién la escribió y a quién iba dirigida no tiene resolución en esta campaña — eso sí es deliberado. Cómo llegó a manos de Goro, en cambio, ya no es un misterio: la encontró, no la entendía, y la guardó igual.","FFF8E7",C.goldDeep),
    pEmpty(80),

    h3("MS-2C: La Familia Sumergida"),
    p("Una de las cabañas de Grauwater tiene el piso completamente bajo el agua — la familia de adentro (los Tresfondo, 2 adultos y 1 niño, descendientes del Aldric mencionado en MS-2A) está sentada en los muebles con el agua hasta el pecho. Contra la pared exterior de la cabaña hay una vieja lápida de madera, medio hundida, con el apellido 'Tresfondo' todavía legible — conecta directo con la cinta roja del Árbol (MS-2A) para quien la note. Están vivos pero en estado de melancolía profunda. Rescatarlos requiere entrar al agua densa (Constitución CD 15) y transportarlos a una cabaña seca. El niño, una vez a salvo, entrega al grupo un 'mapa del tesoro' que hizo antes del caos — marca una caja enterrada cerca del pantano con un cristal de agua que actúa como filtro de purificación mágica (utilidad práctica en zonas de agua contaminada)."),
    pEmpty(140),

    h2("5.8 Recompensas de la Zona"),
    xpBox([
      ["Liberar a la Vieja Raíz (Opción A o B)", "Hito", "Sube a nivel 7 (ver sección 1.6)"],
      ["MS-2A: Devolver las cuerdas a sus destinos", "Secundaria", "Confianza de Marga escalonada: -1 CD social (1-2 devueltas) o -2 CD social (las 3 devueltas)"],
      ["MS-2B: Traducir los pergaminos de Goro", "Secundaria", "Pista anticipada sobre el frasco de cristal negro"],
      ["MS-2C: Rescatar a la familia Tresfondo", "Secundaria", "Mapa + cristal de purificación de agua"],
      ["Completar la zona usando solo la Opción A (escuchar)", "Bonus de rol", "El Cristal del Recuerdo de Wren (Inspiración reutilizable 1x por sesión)"],
    ]),
    pEmpty(140),

    h2("5.9 Aftermath — El Día Después"),
    p("Pensada para arrancar la sesión siguiente si la Escama se liberó al final de la sesión anterior. El cambio acá es físico antes que emocional — dejá que se note en el cuerpo del pantano, no solo en las caras de la gente."),
    pEmpty(80),

    h3("Escena General — El Pantano se Aliviana"),
    voiceBox("\"El agua es lo primero que cambia. Deja de resistirse a cada paso — de golpe se mueve como agua normal, casi con alivio. Las cabañas de Grauwater empiezan a drenarse solas, como si el pantano mismo hubiera estado conteniendo la respiración. El aire deja de oler a papel mojado. En el Árbol de los Cuellos, las cintas y cuerdas se mueven con una brisa que no estaba ahí hace un minuto — la primera brisa real que pasa por este lugar en mucho tiempo.\""),
    pEmpty(140),

    h3("Si eligieron la Opción A (escuchar)"),
    p("El pueblo entero, sin que nadie lo organice al principio, se junta esa noche alrededor de una fogata. No es una celebración — es un duelo colectivo, el primero que Grauwater puede permitirse en años. Marga lidera sin decir una palabra, solo tejiendo despacio mientras los demás hablan de sus propios muertos. Es incómodo y sanador a la vez. Si el grupo se queda, son bienvenidos junto al fuego, pero nadie los obliga a hablar."),
    pEmpty(80),

    h3("Si eligieron la Opción B (disipar)"),
    p("El alivio llega igual, pero sin catarsis — más parecido a que se corte una fiebre que a un cierre real. Marga organiza la limpieza de inmediato, práctica y eficiente, pero hay una frialdad de fondo que no estaba en la Opción A. Nadie menciona a la Vieja Raíz por su nombre esa noche, porque nadie llegó a saber que se llamaba Wren. Logos, si se le pregunta, repite su propia frase de antes casi como si le costara: 'Pérdida de datos permanente. Sigo sin tener una categoría mejor para eso.'"),
    pEmpty(140),

    h3("Marga"),
    p("En cualquiera de las dos opciones, Marga vuelve a moverse y a organizar — es lo que siempre supo hacer. Si el grupo hizo MS-2A (devolver las cuerdas), la trata con calidez genuina desde el primer momento y comparte sin dudar lo que sabe del 'Geógrafo Azul'. Si no lo hicieron, sigue agradecida pero más reservada — la información sale igual, solo que cuesta un poco más sacarla."),
    pEmpty(80),

    h3("Goro"),
    p("Si el grupo se ganó su confianza durante la zona, Goro aparece una última vez antes de que se vayan — no para despedirse con ceremonia, sino para dejarles una copia a mano de sus mapas del pantano, con un simple 'Por si vuelven. El pantano no cambia tan rápido.' Es su forma de decir que pueden volver. No se ofrece como aliado recurrente ni pide nada a cambio; sigue siendo del pantano, no del grupo. Si nunca conectaron con él más allá de lo mínimo, simplemente desaparece de vuelta hacia el interior del pantano sin despedirse — sigue ahí, pero no busca al grupo."),
    pEmpty(80),

    h3("La Familia Tresfondo"),
    p("Si fueron rescatados durante la zona (MS-2C): ya están instalados en una cabaña seca, y el chico corre a mostrarle al grupo dónde clavó el mapa del tesoro en la pared, como un trofeo. Si no fueron rescatados antes y quedaron atrapados hasta la restauración general: salen del agua por su cuenta, desorientados pero ilesos — el grupo no pierde la escama ni el hito, pero se pierde el vínculo personal con el chico y el mapa nunca se entrega (una pérdida narrativa menor, no mecánica)."),
    pEmpty(80),

    h3("El Sepulturero Anegado (dungeon obligatorio — Las Criptas Anegadas)"),
    p("El destino del Sepulturero se suma al resto del Aftermath como una tercera capa, aparte de la Opción A/B de la superficie: cómo cerró la zona bajo el agua importa tanto como cómo cerró arriba."),
    pEmpty(80),
    voiceBox("\"Si lo dejaron descansar (rasgo Descansad ya): esa misma noche, sin que nadie en el pueblo sepa bien por qué, el agua de los canales corre más silenciosa. Marga, si se le cuenta lo que pasó en la tumba, deja de tejer un segundo — reconoce el nombre en la historia oral de su abuela: 'el primer enterrador, el que nunca dejó su puesto'. No dice mucho más, pero esa noche deja una flor sobre el agua, cerca de donde empieza el camino hundido hacia las Criptas. Es el mismo duelo de la Opción A, una capa más abajo.\""),
    pEmpty(80),
    voiceBox("\"Si lo vencieron en combate: la escama y el tesoro salen igual, pero el agua de las Criptas queda inquieta unos días — algún aldeano jura ver una figura encorvada con una pala moviéndose entre los juncos al atardecer, aunque nunca se acerca ni hace daño. No es un gancho mecánico ni un reloj narrativo, solo una nota de color: el pantano no quedó tan en paz como podría haber quedado. La Pala del Descanso, coherente con esto, nunca aparece en el loot — el arma se hunde con él.\""),
    pEmpty(140),

    h3("Cierre y Gancho"),
    p("Logos cierra el registro de la zona con un tono distinto al de Cuerda-Floja — más lento, más pensado: 'Registro cerrado: Pantano de los Muertos. Método de resolución: [Opción A / Opción B]. Nota personal, fuera de protocolo: estoy empezando a notar un patrón. El sujeto conocido como el Coleccionista visita, mide, y se va. Y en cada lugar, algo de él se queda. No sé todavía qué hacer con esa observación.' Si el grupo tiene los pergaminos de Goro traducidos (MS-2B), ese es el gancho hacia el frasco de cristal negro que van a reencontrar mucho más adelante en el Plano del Archivo."),
    pEmpty(140),

    pageBreak(),
  ];
}
module.exports = { cap5 };