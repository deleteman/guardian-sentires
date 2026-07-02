const { p, pEmpty, h1, h2, h3, bullet, numBullet, infoTable, noteBox, secretBox, loreBox, voiceBox, warningBox, cdBox, xpBox, pageBreak, npcBlock, C } = require('./helpers');

function cap13() {
  return [
    h1("13. NPCs Llevables — Personajes Secundarios Jugables"),
    p("Esta es una mecánica opcional para cuando algún jugador quiera, por unas sesiones o de forma más permanente, controlar un personaje distinto al suyo. Tres NPCs que el grupo ya conoce —Tova, Sylveth y Goro— tienen aquí una ficha de personaje completa (clase, subclase, progresión de nivel) lista para entregarle a un jugador en el momento en que la mesa lo decida."),
    pEmpty(80),
    noteBox("CÓMO FUNCIONA EN LA PRÁCTICA","Esto NO es automático ni se activa por sí solo. Vos como DM marcás a estos tres NPCs como 'llevables' y se lo hacés saber a tus jugadores como una opción disponible. Si alguno quiere intentarlo, puede proponerlo en personaje (pedirle al NPC que se una) y vos lo resolvés con una pequeña escena o tirada social — pero el NPC SIEMPRE necesita una razón propia, desde su punto de vista, para aceptar. No es 'el jugador lo pide y el NPC dice que sí' — cada ficha incluye su gancho específico (sección 'Por qué se uniría') para que la decisión del NPC se sienta genuina y no forzada.","FFF8E7",C.goldDeep),
    pEmpty(80),
    infoTable([
      ["Regla","Detalle"],
      ["Nivel de entrada","Cada NPC se une 2 niveles por debajo del nivel del grupo en el momento de reclutarlo. A partir de ahí, sube de nivel junto con el grupo en los mismos hitos de la tabla 1.6 — nunca lo alcanza del todo, pero se acerca cuanto antes lo recluten"],
      ["Quién lo controla","Cualquier jugador, en cualquier sesión donde la mesa lo decida — puede ser el mismo jugador todo el tiempo, o puede rotar. Lo más simple: el jugador cuyo PJ principal falta esa sesión controla a uno de los llevables en su lugar"],
      ["Cuántos a la vez","Recomendado: máximo 1 NPC llevable activo en juego por sesión, además de los 4 PJs + golem(es) + quimera. Más que eso empieza a saturar el combate y a competir con el protagonismo de los PJs principales"],
      ["Si nadie lo recluta","No pasa nada — los tres NPCs siguen funcionando perfectamente como NPCs normales, exactamente como están descritos en sus capítulos de zona. Esta es una capa adicional, no un reemplazo de su rol narrativo existente"],
    ], 2400, 6960),
    pEmpty(140),

    h2("13.1 Tova la Aprendiz — Guerrera (Artesana de Guerra)"),
    p("Joven minera de Monte Hotenow que soñaba con aprender el oficio de Korrund antes de que la Niebla lo afectara. Si el grupo resuelve bien el arco de Korrund, él la toma como aprendiz — y ese es exactamente el momento en que ella podría, en cambio (o además), elegir seguir a la party."),
    pEmpty(80),
    infoTable([
      ["Campo","Detalle"],
      ["Raza / Clase","Humana / Guerrero, subclase Maestro de Armas (o 'Artesano de Guerra' si tu mesa prefiere un sabor más de herrería: mismas reglas de Maestro de Armas, renombrada)"],
      ["Nivel de entrada","Se une en Hotenow — grupo nivel 7-9, así que Tova entra en nivel 5-7 según el momento exacto"],
      ["Por qué se uniría (su POV)","Tova ama el oficio de Korrund, pero después de ayudarlo a sanar, también empieza a entender que quiere ver más del mundo del que vio en su vida en el campamento minero. Si el grupo la trata con respeto durante su arco (no la ignoran, le devuelven la confianza que ella les dio compartiendo lo que sabía de Korrund), ella puede pedir UNIRSE en lugar de (o antes de) volverse aprendiz fija — 'Quiero aprender el oficio. Pero primero quiero ver qué hay más allá de esta montaña.' Es una decisión de personaje, no un favor automático: si el grupo fue brusco o indiferente con ella, no se ofrece"],
      ["Personalidad para quien la juegue","Curiosa, directa, sin filtro para decir lo que piensa pero sin mala intención. Le faltan modos de ciudad pero no le falta calle — sabe trabajar duro y no se asusta fácil. Tiende a ofrecerse para las tareas físicas antes de que se las pidan"],
      ["Cómo pelea","Frontal y confiable — no es sutil, pero es sólida. Buena para proteger a un aliado herido o sostener una línea mientras otros maniobran"],
    ]),
    pEmpty(80),
    infoTable([
      ["Nivel","CA / PG","Bono Ataque","Rasgos clave"],
      ["5 (entrada típica)","16 / 44","+6, 1d10+4 (martillo de guerra)","Ataque Extra (2 ataques por acción), Tomar Aliento (recupera PG con descanso corto, 2 usos)"],
      ["7","16 / 58","+7, 1d10+5","Marca de Combate: impone Desventaja al objetivo marcado al atacar a otros que no sea ella"],
      ["9","17 / 72","+7, 1d10+5","Indomable (puede repetir una salvación fallada, 1 uso)"],
      ["11","17 / 86","+8, 1d10+6","Ataque Extra mejorado (3 ataques por acción)"],
      ["13","18 / 100","+8, 1d10+6","Estudio Táctico: una vez por combate, otorga Ventaja al próximo ataque de un aliado contra un objetivo que ella golpeó"],
    ], 1400, 1800, 2200, 3960),
    pEmpty(140),

    h2("13.2 Sylveth — Hechicero Feérico (Linaje Silvano)"),
    p("El Eladrin paralizado del Claro de los Espejos, en el Bosque de Neverwinter. Si el grupo lo libera de la parálisis (ver Cap. 7), recupera movilidad — y con ella, una curiosidad genuina por un mundo material que no visitó en mucho tiempo."),
    pEmpty(80),
    infoTable([
      ["Campo","Detalle"],
      ["Raza / Clase","Eladrin / Hechicero, subclase Linaje Feérico (Wild Magic o Fey Touched, según prefieras — Linaje Feérico es la opción más temática)"],
      ["Nivel de entrada","Se une en el Bosque — grupo nivel 9-11, así que Sylveth entra en nivel 7-9 según el momento exacto"],
      ["Por qué se uniría (su POV)","Sylveth lleva siglos en el Claro de los Espejos, ligado a un solo lugar. La liberación de la parálisis es la primera vez en mucho tiempo que puede moverse libremente — y antes de que el grupo se vaya, puede sentir curiosidad real por seguir viendo qué pasa con el resto del mundo material, algo que no hacía desde antes de que naciera cualquier humano vivo hoy. Si el grupo le mostró respeto al liberarlo (en vez de tratarlo como un simple obstáculo de puzzle), Sylveth puede ofrecerse: 'Pensé que mi único movimiento posible ya había sucedido. Quizás hay otro. Déjenme verlo con ustedes.' Si lo ignoraron o fueron groseros durante el rescate, prefiere quedarse en el Claro"],
      ["Personalidad para quien lo juegue","Etéreo, filosófico, habla en metáforas y a veces tarda en llegar al punto — pero cuando llega, suele decir algo que vale la pausa. No tiene urgencia humana: para él, una conversación de 10 minutos y una de 10 años no son tan distintas en peso"],
      ["Cómo pelea","Control y daño a distancia — prioriza inmovilizar o debilitar antes de golpear directo. Buen complemento para un grupo ya cargado de combate cuerpo a cuerpo"],
    ]),
    pEmpty(80),
    infoTable([
      ["Nivel","CA / PG","Conjuros disponibles","Rasgos clave"],
      ["7 (entrada típica)","13 / 38","Rayo de Escarcha, Telaraña, Niebla Oscurecedora, Misil Mágico","Puntos de Hechicería (5): puede convertir espacios de conjuro en puntos o viceversa. Toque Feérico: 1/descanso largo, lanza Encantar Persona o Detectar Magia gratis"],
      ["9","13 / 50","+ Bola de Fuego o Contrahechizo","Metamagia (2 opciones): Conjuro Distante, Conjuro Sutil"],
      ["11","14 / 62","+ Confusión","Salto Feérico mejorado: 2 usos por descanso largo"],
      ["13","14 / 74","+ Muro de Fuego","Metamagia adicional: Conjuro Gemelo"],
    ], 1600, 1600, 4200, 2960),
    pEmpty(140),

    h2("13.3 Goro el Rastreador Mudo — Explorador (Pantanero)"),
    p("El habitante secreto del Pantano de los Muertos que protege la zona y documenta sus cambios. No habla —se comunica con señas y dibujos— pero eso no le impide acompañar al grupo si decide que ya no hace falta quedarse."),
    pEmpty(80),
    infoTable([
      ["Campo","Detalle"],
      ["Raza / Clase","Humano (o la raza que prefieras darle, no se especificó en su ficha original) / Explorador (Ranger), subclase Vigilante de Horizonte o Maestro de Bestias"],
      ["Nivel de entrada","Se une en el Pantano — grupo nivel 6-7, así que Goro entra en nivel 4-5 según el momento exacto"],
      ["Por qué se uniría (su POV)","Goro lleva años documentando y protegiendo el pantano en soledad. Si el grupo resuelve bien la zona (especialmente si liberan a la Vieja Raíz con la Opción A, mostrando que entienden el peso de lo que custodia), Goro puede sentir que el pantano, por primera vez, está en paz — y que su trabajo ahí, por ahora, está hecho. No lo dice con palabras: simplemente empieza a empacar su fardo y hace un gesto de pregunta hacia la salida. Es una decisión silenciosa pero clara. Si el grupo trató el pantano con descuido o prisa, prefiere quedarse — todavía hay algo que vigilar"],
      ["Personalidad para quien lo juegue","Observador, calmado, comunica todo con gestos precisos y dibujos rápidos cuando hace falta más detalle. El jugador que lo controle no necesita inventar diálogo — de hecho, jugarlo BIEN significa comunicarse con el grupo principalmente por descripciones de gestos, lo cual le da una textura de juego distinta y interesante"],
      ["Cómo pelea","Sigiloso y de precisión a distancia, fuerte en terreno difícil (agua, pantano, bosque). Excelente explorador y rastreador fuera de combate también — puede dar Ventaja en tiradas de Supervivencia o Sigilo del grupo en terreno salvaje"],
      ["Nota de mesa sobre su mudez","Si el jugador que lo controla prefiere, puede 'hablar' en mesa describiendo lo que Goro gesticula, en vez de quedarse en silencio total — lo importante es preservar que el personaje no usa palabras, no que el jugador deje de participar verbalmente en la mesa"],
    ]),
    pEmpty(80),
    infoTable([
      ["Nivel","CA / PG","Bono Ataque","Rasgos clave"],
      ["4 (entrada típica)","14 / 32","+5, 1d8+3 (arco) o 1d6+3×2 (dagas)","Enemigo Predilecto y Explorador Experto (terreno: Pantano). Conjuros de Explorador: Trampa de Zarcillos, Paso sin Huella"],
      ["5","14 / 38","+5, 1d8+3","Ataque Extra (2 ataques por acción)"],
      ["7","15 / 50","+6, 1d8+4","Conjuro adicional: Bestia Conjurada (invoca un aliado animal menor temporal)"],
      ["9","15 / 62","+6, 1d8+4","Mejora de Enemigo Predilecto: Ventaja también en daño contra el tipo elegido"],
      ["11","16 / 74","+7, 1d8+5","Rasgo de subclase mejorado (Vigilante de Horizonte: daño elemental extra: Maestro de Bestias: compañero animal permanente)"],
    ], 1400, 1600, 1800, 4560),
    pEmpty(140),

    h2("13.4 Notas de Mesa para Manejar Esto Bien"),
    bullet("No fuerces el momento de oferta: dejá que sea el grupo el que pregunte o proponga, en personaje, si quiere que alguno de estos tres se una. Si nunca lo hacen, no pasa nada — la mecánica simplemente no se usa"),
    bullet("El balance está pensado para 1 NPC llevable a la vez. Si por algún motivo tu mesa quiere más de uno activo en la misma sesión, considerá bajar el CR de los encuentros en 1-2 puntos para compensar el actor extra, igual que hacemos con el golem y la quimera"),
    bullet("Estos tres NO reemplazan su rol narrativo en sus capítulos de zona — toda la información, decisiones morales y mecánicas de Tova, Sylveth y Goro descritas en los Caps. 5, 6 y 7 siguen funcionando exactamente igual. Esta es una capa adicional para DESPUÉS de que el grupo ya completó (o está completando) su arco en esa zona"),
    bullet("Si un NPC llevable muere en combate, tratalo con el mismo peso narrativo que cualquier otra pérdida de la campaña — no es 'solo un sidekick', es un personaje con arco propio que el grupo decidió llevar consigo"),
    bullet("Podés dejar que un jugador 'adopte' a uno de estos NPCs de forma semi-permanente (lo juega cada vez que su PJ principal no participa, por ejemplo) o que la mesa rote libremente entre los tres — ambas formas funcionan, elegí la que mejor se adapte a cómo juega tu grupo"),
  ];
}
module.exports = { cap13 };
