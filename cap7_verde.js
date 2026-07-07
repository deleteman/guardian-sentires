const { p, pEmpty, h1, h2, h3, bullet, numBullet, infoTable, noteBox, secretBox, loreBox, voiceBox, warningBox, cdBox, xpBox, scaleBox, pageBreak, npcBlock, C } = require('./helpers');

function cap7() {
  return [
    h1("7. Zona 4 \u2014 El Bosque de Neverwinter"),
    scaleBox("\ud83d\udfe2","Verde","Calma","Bosque de Neverwinter, cerca de la frontera con el Plano de las Hadas",C.greenDark,"F0FFF0"),
    pEmpty(100),
    infoTable([
      ["Bonificaci\u00f3n mec\u00e1nica","Efecto al recuperarla"],
      ["Ventaja en Sigilo","Permanente para todo el grupo"],
    ]),
    pEmpty(140),

    h2("7.1 Descripci\u00f3n General de la Zona"),
    p("El Bosque de Neverwinter siempre tuvo una calidad extra\u00f1a \u2014 demasiado verde, demasiado vivo, como si el Plano de las Hadas estuviera apenas a un paso. Ahora esa calidad se exager\u00f3 al extremo opuesto: todo est\u00e1 demasiado quieto. Los \u00e1rboles tienen hojas pero no se mueven aunque haya viento. Los p\u00e1jaros est\u00e1n posados en las ramas con los ojos abiertos pero sin parpadear. El tiempo parece haberse pausado \u2014 no para el grupo, sino para todo lo dem\u00e1s."),
    pEmpty(80),
    voiceBox("\"El bosque no es silencioso \u2014 el silencio tiene ausencia de sonido. Esto es diferente: es como si el sonido estuviera presente pero suspendido justo antes de llegar a sus o\u00eddos. Logos hace tres escaneos seguidos antes de hablar: 'Detecto una zona de latencia cero. El metabolismo del ecosistema ha alcanzado un estado de... no encuentro el t\u00e9rmino t\u00e9cnico. Detenido. El bosque simplemente est\u00e1.' Una ardilla en la rama m\u00e1s cercana los mira sin moverse. Lleva as\u00ed, calculan, varios d\u00edas.\""),
    pEmpty(140),

    h2("7.2 El Efecto de la Escama Perdida"),
    p("La Escama Verde convirti\u00f3 la calma en par\u00e1lisis total. No es paz \u2014 es la incapacidad de decidir. El bosque entr\u00f3 en un estado de an\u00e1lisis permanente: cada ser vivo est\u00e1 evaluando su pr\u00f3xima acci\u00f3n sin poder ejecutarla. La frontera con el Plano de las Hadas se volvi\u00f3 peligrosamente fina."),
    pEmpty(80),
    cdBox([
      ["Regla de velocidad: moverse a m\u00e1s de paso normal requiere tirada","13 Destreza","Disrupci\u00f3n temporal: los animales congelados 'despiertan' asustados (2d6 Sombras de Duda aparecen)"],
      ["Hacer ruido equivalente a una acci\u00f3n de combate","Auto","Mismo efecto que fallo anterior"],
      ["Sabidur\u00eda ST para el grupo si pasan m\u00e1s de 1h en el bosque","12","Un personaje al azar queda indeciso: debe tirar Sabidur\u00eda CD 10 para tomar cualquier acci\u00f3n las pr\u00f3ximas 10 min"],
    ]),
    pEmpty(80),
    warningBox("Rol especial del P\u00edcaro (DM): Las habilidades de Sigilo y manipulaci\u00f3n de mecanismos del P\u00edcaro son las m\u00e1s valiosas de la zona. Si el DM describe activamente c\u00f3mo su personaje se mueve sin romper el silencio, el grupo puede reducir todas las CDs de Sigilo en 3 mientras el P\u00edcaro lidera el avance."),
    pEmpty(140),

    h2("7.3 Mapa de la Zona \u2014 C\u00f3mo se Conectan los Lugares"),
    p("Para evitar confusi\u00f3n: el Bosque de Neverwinter tiene tres puntos de inter\u00e9s principales, conectados por senderos distintos pero relativamente cercanos entre s\u00ed (10-15 minutos caminando entre cada uno, a paso lento). NO est\u00e1n en el mismo claro \u2014 son tres locaciones separadas dentro del mismo bosque."),
    pEmpty(80),
    infoTable([
      ["Lugar","Ubicaci\u00f3n relativa","Conexi\u00f3n"],
      ["La Entrada del Bosque (Los Centinelas)","Borde sur del bosque","Punto de entrada del grupo. Desde aqu\u00ed se accede a los otros dos lugares"],
      ["El Claro de los Espejos","15 min al noreste de la entrada","Tiene el estanque temporal. Sylveth est\u00e1 aqu\u00ed"],
      ["El \u00c1rbol Central","20 min al norte de la entrada (10 min desde el Claro de los Espejos)","El coraz\u00f3n mec\u00e1nico del bosque. La Madre Ra\u00edz habla desde aqu\u00ed"],
    ]),
    pEmpty(80),
    loreBox("El Claro de los Espejos y el \u00c1rbol Central est\u00e1n cerca pero son lugares distintos con prop\u00f3sitos distintos: el Claro es un punto de descanso/revelaci\u00f3n (el estanque), el \u00c1rbol es el objetivo mec\u00e1nico final (dar cuerda al mecanismo). Un grupo eficiente puede visitar el Claro en el camino hacia el \u00c1rbol sin desv\u00edo significativo."),
    pEmpty(140),

    h2("7.4 Lugares de Inter\u00e9s"),

    h3("La Entrada del Bosque \u2014 Los Centinelas"),
    p("Dos estatuas de piedra con forma de lobos que normalmente advierten a los viajeros. Ahora est\u00e1n partidas por la mitad \u2014 algo las rompi\u00f3 desde adentro. Alrededor hay marcas de pisadas de algo grande que entr\u00f3 al bosque. Las marcas tienen unos 10 d\u00edas de antig\u00fcedad (Rastreo CD 13)."),
    pEmpty(80),
    cdBox([
      ["Rastreo para seguir las pisadas \u2014 conducen hacia el interior","13","Las pisadas llevan hacia el interior pero se vuelven confusas a medio camino"],
    ]),
    pEmpty(80),

    h3("El Claro de los Espejos \u2014 Qu\u00e9 es el Estanque"),
    p("Un claro donde el suelo est\u00e1 cubierto de flores de un blanco muy p\u00e1lido. En el centro, un estanque de unos 4 metros de di\u00e1metro."),
    pEmpty(80),
    loreBox("EXPLICACI\u00d3N DEL ESTANQUE: No es magia de Mnem\u00f3s ni del Coleccionista \u2014 es un fen\u00f3meno propio del bosque, una grieta natural y antigua hacia el Plano de las Hadas (los Eladrin lo llaman 'Ojo de Recuerdo'). Normalmente el estanque refleja el cielo actual con total normalidad. El efecto de la Niebla Gris lo da\u00f1\u00f3: ahora el estanque qued\u00f3 'atascado' reflejando un \u00fanico d\u00eda espec\u00edfico \u2014 un d\u00eda soleado de hace generaciones, antes de que el bosque tuviera ning\u00fan problema. El estanque no fue creado por el villano; fue colateralmente afectado por \u00e9l, igual que todo lo dem\u00e1s en la zona. Es, en cierto sentido, la memoria del bosque sobre s\u00ed mismo, congelada por accidente."),
    pEmpty(80),
    p("Si alguien toca el agua: visi\u00f3n de 10 segundos del bosque en su estado normal \u2014 colores saturados, sonidos, movimiento, los Centinelas intactos vigilando la entrada. Luego de vuelta al silencio actual."),
    pEmpty(80),
    cdBox([
      ["Arcanos para entender qu\u00e9 es el estanque","14","Entienden que es magia fe\u00e9rica da\u00f1ada, sin m\u00e1s detalle (necesitan a Sylveth para el resto)"],
      ["Sabidur\u00eda para salir de la visi\u00f3n sin Desventaja en la pr\u00f3xima tirada","12","El contraste entre la visi\u00f3n y la realidad actual causa Desventaja en Sabidur\u00eda por 10 min"],
    ]),
    pEmpty(80),

    h3("El \u00c1rbol Central \u2014 El Coraz\u00f3n del Bosque"),
    p("Un \u00e1rbol de 25 metros de altura, tan ancho que seis personas con los brazos extendidos no lo rodear\u00edan. En su base hay un mecanismo visible: engranajes de madera y piedra que deber\u00edan moverse pero est\u00e1n detenidos. En la corteza hay una lista de nombres grabados \u2014 algunos con tinta antigua, otros m\u00e1s recientes."),
    pEmpty(80),
    cdBox([
      ["Percepci\u00f3n para notar el mecanismo en la base","11","No ven el mecanismo hasta acercarse (perdiendo un round de sigilo)"],
      ["Naturaleza o Arcanos para entender qu\u00e9 hace el mecanismo","13","Saben que mueve algo pero no qu\u00e9 sin investigar m\u00e1s"],
      ["Investigaci\u00f3n para leer todos los nombres de la lista","12","Leen los nombres pero no el contexto. CD 15: entienden que son personas a quienes el Coleccionista quiso"],
    ]),
    pEmpty(140),

    h2("7.5 NPCs de la Zona"),

    ...npcBlock(
      "Sylveth \u2014 El Eladrin del Bosque",
      "Habitante fe\u00e9rico atrapado entre el bosque y el Plano de las Hadas. Vive en el Claro de los Espejos",
      "Apariencia que cambia con las estaciones: piel con tono verde p\u00e1lido, ojos completamente dorados, pelo que se mueve levemente aunque no hay viento. Visualmente impactante pero inm\u00f3vil \u2014 est\u00e1 en cuclillas junto al estanque, mir\u00e1ndolo",
      "Normalmente: et\u00e9reo, filos\u00f3fico, habla en met\u00e1foras. Actualmente: atrapado en la misma par\u00e1lisis del bosque pero consciente de ello \u2014 puede hablar pero cada frase le cuesta esfuerzo visible",
      "Volver al movimiento. Lleva d\u00edas sin poder completar un pensamiento antes de que se paralice a medio camino",
      "Puede explicar la naturaleza del estanque (es quien mejor lo conoce) y del mecanismo del \u00e1rbol \u2014 los fe\u00e9ricos originales lo construyeron para mantener el ritmo del bosque. Si el grupo lo libera de la par\u00e1lisis, Sylveth recupera la movilidad y puede guiarlos al \u00c1rbol Central. Como recompensa, puede ense\u00f1ar un truco de Sigilo que da +2 permanente a Sigilo a quien lo aprenda (se suma a la bonificaci\u00f3n de la escama)",
      "Cada... pensamiento... se detiene... antes... [pausa larga] ...de llegar... a alg\u00fan lado"
    ),

    ...npcBlock(
      "La Madre Ra\u00edz \u2014 La Entidad del \u00c1rbol Central",
      "La conciencia colectiva del bosque. No tiene forma f\u00edsica",
      "Se manifiesta como una voz que parece venir de todas partes a la vez. Si el grupo se sienta en silencio junto al \u00e1rbol durante 5 minutos, empieza a escucharla. Su voz es lenta como las estaciones",
      "Paciente y no linear. Habla de cosas que pasaron hace siglos como si fueran ayer. No distingue bien entre pasado y presente \u2014 para ella el tiempo es menos urgente. Ahora est\u00e1 esperando. No sabe bien qu\u00e9",
      "El ritmo del bosque. La Madre Ra\u00edz es el bosque \u2014 su salud y la del ecosistema son lo mismo",
      "Puede indicar al grupo qu\u00e9 plantar en el mecanismo del \u00e1rbol. No lo ordena \u2014 sugiere, y las sugerencias son po\u00e9ticas ('algo que haya crecido antes de que t\u00fa nacieras' o 'algo que sepa a un d\u00eda que vali\u00f3 la pena'). Si el grupo planta lo correcto, el \u00e1rbol se activa y la Madre Ra\u00edz les da las gracias diciendo el nombre de cada personaje \u2014 aunque nunca se los dijeron",
      "El bosque... recuerda. Pero olvid\u00f3... c\u00f3mo moverse. \u00bfVosotros... record\u00e1is?"
    ),

    ...npcBlock(
      "Dwin Arbolero",
      "Le\u00f1ador que entr\u00f3 al bosque antes del caos y qued\u00f3 atrapado, cerca de la Entrada",
      "55 a\u00f1os, enano de bosque, pelo rojizo con hojas enredadas, hacha que no ha podido usar desde que entr\u00f3 \u2014 cada vez que la levanta, algo lo detiene",
      "Frustrado y algo avergonzado de su situaci\u00f3n. Lleva d\u00edas dentro del bosque sin poder hacer nada ni salir. Conserva el humor pero est\u00e1 al l\u00edmite",
      "Salir del bosque. Tiene familia en Neverwinter que no sabe d\u00f3nde est\u00e1",
      "No tiene informaci\u00f3n clave pero puede actuar como alivio c\u00f3mico y compa\u00f1ero de viaje. Si el grupo lo saca del bosque, agradece con el mapa de le\u00f1ador de la regi\u00f3n \u2014 rutas que no aparecen en mapas normales, \u00fatiles para la navegaci\u00f3n en el Acto II tard\u00edo. Reaparece en Neverwinter y puede conectar al grupo con su gremio de le\u00f1adores (acceso a recursos)",
      "Llevo cuatro días con el hacha en el aire. Ni siquiera puedo bajarla. ¿Saben cuánto pesa un hacha de enano levantada cuatro días?"
    ),
    pEmpty(80),
    warningBox("RELOJ NARRATIVO — DWIN PUEDE MORIR SI TARDAN: Dwin lleva días sin comer ni beber bien, sosteniendo el hacha en alto por la parálisis del bosque. Esto es real, no decorativo: si el grupo conoce al bosque (entra a la zona, lo encuentra) pero se va de la zona sin liberarlo Y tarda en volver más de 2-3 zonas completas, Dwin no resiste. Cuando vuelven, lo encuentran caído al pie del árbol, el hacha por fin en el suelo — pero él ya no se levanta. Si esto pasa: el bosque se restaura igual y la escama aparece igual, pero el grupo se queda con el cuerpo, sin el aliado, sin el mapa de rutas, y sin el gancho de gremio de leñadores en Neverwinter. Es una pérdida real, no solo de loot — un personaje que llegaron a conocer y no llegaron a salvar. No anuncies el reloj a la mesa — que el peso de la consecuencia, si ocurre, sea genuino y no telegrafiado."),
    pEmpty(80),
    noteBox("ACLARACIÓN — esto NO cuenta como demora","Igual que con Korrund (sección 6.5): explorar el Bosque a fondo —incluido el dungeon opcional Las Raíces Hondas (sección 11.5), o pasar varias sesiones en la zona resolviendo MS-4A/B/C— NO activa este reloj. El reloj se activa por IRSE de la zona sin haber liberado a Dwin y tardar 2-3 zonas completas en volver.","FFF8E7",C.goldDeep),
    pEmpty(140),

    h2("7.6 El Desaf\u00edo \u2014 Dar Cuerda al Coraz\u00f3n del Bosque"),
    p("El mecanismo en la base del \u00e1rbol es un sistema de engranajes de madera y piedra que regula el ritmo metab\u00f3lico del bosque. Fue dise\u00f1ado para dar cuerda cada cierto tiempo \u2014 y lleva demasiado sin hacerlo. El P\u00edcaro es el m\u00e1s capacitado para hacerlo sin romper el equilibrio."),
    pEmpty(80),

    h3("El proceso \u2014 Cuatro pasos"),
    numBullet("EXAMINAR el mecanismo: Investigaci\u00f3n CD 12. Con \u00e9xito: entienden c\u00f3mo funciona. Con fallo: pueden intentarlo igual pero con Desventaja en el paso 3"),
    numBullet("LIMPIAR los engranajes sin hacer ruido: Destreza (Herramientas de Ladr\u00f3n) CD 13. Con fallo: una palanca cruje \u2014 1d4 Sombras de Duda se materializan"),
    numBullet("PLANTAR algo en el mecanismo para que el \u00e1rbol 'recuerde' el movimiento: este paso no tiene CD de tirada. Requiere decisi\u00f3n."),
    numBullet("ACTIVAR el mecanismo: Fuerza o Destreza CD 11. Con fallo: el mecanismo se mueve a medias \u2014 el bosque se activa al 50% (todav\u00eda lento, pero no paralizado). La escama aparece igual"),
    pEmpty(100),

    h3("El paso 3 \u2014 Qu\u00e9 plantar"),
    p("La Madre Ra\u00edz o Sylveth pueden dar pistas. Pero Logos admite que no sabe qu\u00e9 plantar \u2014 y ese momento de admisi\u00f3n es importante. Opciones v\u00e1lidas (todas funcionan, con efectos levemente distintos):"),
    pEmpty(80),
    infoTable([
      ["Qu\u00e9 se planta","Efecto adicional"],
      ["Una semilla de cualquier planta","El bosque agradece con simplicidad: crecimiento visible en 1 hora"],
      ["Un objeto con historia personal del grupo","La Madre Ra\u00edz pronuncia el nombre del objeto y pregunta qu\u00e9 significa \u2014 momento de roleplay"],
      ["Una intenci\u00f3n declarada en voz alta","El bosque 'repite' la intenci\u00f3n como un eco suave durante el resto de la sesi\u00f3n"],
      ["Algo que represente un recuerdo feliz","El Claro de los Espejos refleja el recuerdo durante 1 minuto \u2014 todos lo ven"],
    ], 3000, 6360),
    pEmpty(140),

    h2("7.7 La Pista del Coleccionista"),
    p("La lista de nombres en el \u00e1rbol central. Si alguien la lee completa (Investigaci\u00f3n CD 12): son nombres de personas y criaturas. Algunos tienen fechas de hace siglos. El patr\u00f3n: todos est\u00e1n tachados. Logos eventualmente identifica el patr\u00f3n: 'Son sujetos que el individuo conocido como el Coleccionista apreci\u00f3 en alg\u00fan momento. La t\u00e1ctica de tacharlos sugiere eliminaci\u00f3n deliberada de apego emocional. Este comportamiento es consistente con alguien que se vaci\u00f3 a s\u00ed mismo antes de vaciar a otros.' Pausa. 'Revisando mi clasificaci\u00f3n inicial del sujeto. Era m\u00e1s compleja de lo que registr\u00e9.'"),
    pEmpty(80),
    secretBox("El último nombre de la lista, sin tachar, es 'Chromatus'. Logos NO conecta este dato con el nombre 'Mnemós' que tradujo en Hotenow (sección 6.7) — no tiene razón para hacerlo todavía; son dos piezas de información que recibió en momentos distintos y su protocolo no las cruza automáticamente. Si un jugador hace la conexión explícitamente en voz alta ('¿el Coleccionista es Mnemós?'), Logos responde: 'Posible. No tengo forma de confirmarlo con los datos actuales.' La confirmación definitiva ocurre en el Plano del Archivo (Capítulo 8)."),
    pEmpty(140),

    h2("7.8 Misiones Secundarias de la Zona"),

    h3("MS-4A: Los Animales Congelados"),
    p("Hay 8 animales del bosque en estado de parálisis visible, repartidos por los TRES lugares del bosque (entrada, Claro de los Espejos, Árbol Central) — no están todos juntos. Hay que encontrarlos mientras se explora la zona. Restaurar el bosque (completar el desafío de la sección 7.6) los libera automáticamente a todos esté donde esté cada uno — esa es la vía principal."),
    pEmpty(80),
    p("Dónde está cada animal y qué tirada hace falta para localizarlo (algunos están a la vista, otros camuflados por la quietud):"),
    pEmpty(60),
    infoTable([
      ["Animal","Dónde está","Tirada para encontrarlo"],
      ["El ciervo","En medio del sendero de entrada, imposible de no ver","Automático"],
      ["Tres pájaros","Posados en las ramas sobre el Claro de los Espejos","Percepción CD 10 (mirar hacia arriba)"],
      ["Primer zorro","Junto al estanque, bebiendo, congelado a media lengüetada","Percepción CD 12"],
      ["Segundo zorro","Escondido bajo las raíces del Árbol Central","Percepción o Supervivencia CD 14"],
      ["La serpiente","Enroscada en el mecanismo del Árbol Central — fácil de pisar sin querer","Percepción CD 15 (si fallan, la pisan al manipular el mecanismo y despierta sobresaltada: 1d4 Sombras de Duda)"],
      ["El Lobo Feérico","No está congelado del todo — observa desde la espesura entre el Claro y el Árbol","Percepción CD 16 o Supervivencia CD 14, o aparece solo si el grupo se queda quieto 5 min"],
    ], 2400, 3200, 3760),
    pEmpty(80),
    p("El grupo puede liberar animales individuales antes de resolver el árbol completo, de tres maneras alternativas:"),
    pEmpty(80),
    infoTable([
      ["M\u00e9todo alternativo","Efecto"],
      ["Tocar al animal mientras alguien del grupo cuenta algo en voz alta (cualquier historia genuina, breve)","El animal se libera individualmente — rompe su parálisis sin esperar al árbol. CD 11 Trato con Animales"],
      ["Usar magia de curaci\u00f3n o restauraci\u00f3n directamente sobre el animal","Libera al animal de inmediato sin tirada, pero consume el recurso del hechizo"],
      ["Llevar al animal hasta el Claro de los Espejos y mostrarle la visi\u00f3n del estanque","Libera al animal con CD 13 Naturaleza \u2014 funciona pero es m\u00e1s lento (10 min por animal)"],
    ]),
    pEmpty(80),
    p("El Lobo Fe\u00e9rico en particular es valioso liberar ANTES de resolver el \u00e1rbol, porque recuerda c\u00f3mo lleg\u00f3 el Coleccionista: 'El anciano entr\u00f3 en silencio. No perturb\u00f3 nada. Se sent\u00f3 frente al \u00e1rbol durante mucho tiempo. Cuando se fue, el bosque olvid\u00f3 c\u00f3mo respirar.' Esta informaci\u00f3n est\u00e1 disponible apenas se libera al lobo, sin esperar a restaurar todo el bosque."),
    pEmpty(80),
    cdBox([
      ["Trato con Animales para comunicarse con el Lobo Fe\u00e9rico (una vez liberado)","14","El lobo no comparte el recuerdo del Coleccionista (solo informaci\u00f3n b\u00e1sica de territorio)"],
    ]),
    pEmpty(80),

    h3("MS-4B: La Frontera con el Plano de las Hadas"),
    p("La par\u00e1lisis adelgaz\u00f3 la frontera entre el bosque y el Plano de las Hadas. Si el grupo explora los bordes del bosque (Percepci\u00f3n CD 15, o autom\u00e1ticamente si Sylveth los gu\u00eda), encuentran un punto de cruce donde ambos planos se superponen."),
    pEmpty(80),
    loreBox("QU\u00c9 ES EL PLANO DE LAS HADAS AQU\u00cd: No es una copia id\u00e9ntica del Bosque de Neverwinter \u2014 es el Reino de Hojaverde, un dominio fe\u00e9rico fronterizo gobernado por la Corte de las Hojas Quietas. Visualmente es similar (mismos \u00e1rboles, mismo terreno base) pero los colores son m\u00e1s saturados, el tiempo fluye distinto (cada hora en Hojaverde son 10 minutos en el plano material) y hay NPCs propios."),
    pEmpty(80),
    infoTable([
      ["NPC del Plano de las Hadas","Rol"],
      ["La Reina Espina, Se\u00f1ora de Hojaverde","Gobernante de la corte fe\u00e9rica local. Distante, no hostil, eval\u00faa a los visitantes con curiosidad aristocr\u00e1tica. Conoce la historia de Chromatus desde antes de los registros humanos \u2014 los dragones-guardianes son criaturas primordiales ligadas a las cortes fe\u00e9ricas antiguas"],
      ["Fendrel, el Heraldo de Hojas","Mensajero de la corte, m\u00e1s accesible que la Reina. Si el grupo le ofrece algo de valor simb\u00f3lico (no necesariamente material \u2014 una historia, una canci\u00f3n, una promesa), puede conseguirles una audiencia breve con la Reina Espina"],
      ["Los Tres Susurros","Esp\u00edritus menores que rondan el punto de cruce. Hablan en acertijos. Pueden dar pistas adicionales sobre Chromatus a cambio de que el grupo responda un acertijo correctamente"],
    ]),
    pEmpty(80),
    p("De d\u00f3nde sale la informaci\u00f3n sobre Chromatus: la Reina Espina, si el grupo logra audiencia, puede contar que los dragones-guardianes de las emociones son anteriores a los reinos humanos \u2014 fueron puestos por 'los Primeros Tejedores' (entidades a\u00fan m\u00e1s antiguas, sin detalle adicional necesario) para mantener el equilibrio emocional del plano material. Esto confirma y profundiza lo que el grupo puede descubrir m\u00e1s adelante en la Colecci\u00f3n Antigua del Archivo (Cap\u00edtulo 8): Chromatus no es \u00fanico, y lo que pas\u00f3 con \u00e9l ya pas\u00f3 antes con otros guardianes."),
    pEmpty(80),
    warningBox("ENCUENTRO ESPECIAL (ver Cap. 12 secreto, sección 12.9.4 — 2ª aparición): si querés usar la segunda aparición de 'El Hechicero de la Cripta', este es un buen lugar para insertarla. La corrupción no-muerta que ya tiene (tras la 1ª resurrección) lo hace una presencia ofensiva para un dominio feérico — los Tres Susurros pueden alertar al grupo de 'algo que no debería estar aquí, algo que huele a muerte equivocada' antes de que lo encuentren, o puede aparecer directamente intentando cruzar la frontera por motivos propios (sin relación con la party, sorprendido de encontrarlos otra vez). NO reveles su identidad en esta escena tampoco — dejá que sea, otra vez, 'alguien raro y peligroso' antes de que caiga la ficha."),
    pEmpty(80),
    cdBox([
      ["Percepción para encontrar el punto de cruce","15","No lo encuentran sin la guía de Sylveth"],
      ["Arcanos para cruzar conscientemente (vs cruzar por accidente)","13","Cruce accidental: llegan en medio de una disputa cortesana menor, mal momento para pedir audiencia"],
      ["Carisma o un acertijo correcto para conseguir audiencia con la Reina Espina (vía Fendrel)","15 / acertijo","Sin audiencia: solo obtienen lo que los Tres Susurros quieran compartir, más limitado"],
    ]),
    pEmpty(80),

    h3("Los Acertijos de los Tres Susurros"),
    p("Los Tres Susurros son tres voces que hablan por turnos, completándose la frase entre sí. Por cada acertijo que el grupo resuelve, comparten un fragmento de lore sobre Chromatus y los guardianes. Son juguetones, no hostiles — disfrutan del juego. Si el grupo falla, dan una pista pequeña y dejan reintentar (no hay castigo). Resolver 3 de estos también cuenta como 'acertijo correcto' para conseguir audiencia con la Reina Espina."),
    pEmpty(80),
    infoTable([
      ["Acertijo","Respuesta","Lore que comparten al acertar"],
      ["'Cuanto más me quitas, más grande me vuelvo. No peso nada, pero puedo vaciar a un dragón. ¿Qué soy?'","Un hueco / un agujero / un vacío","'Eso es exactamente lo que el anciano le dejó a tu dragón. Donde había escamas, ahora hay huecos. Él no rompió a Chromatus. Lo vació. Es peor.'"],
      ["'No tengo color que sea mío, pero cuando la luz me atraviesa, los muestro todos. ¿Qué soy?'","El cristal / el prisma / una gota de agua","'Así era Chromatus antes: transparente, hecho para contener todos los colores de lo que sentís, no para tener uno propio. Un guardián no siente POR vosotros. Siente PARA que vosotros podáis.'"],
      ["'Vivo mientras me recuerdan y muero en el instante en que me olvidan. ¿Qué soy?'","Un recuerdo / la memoria","'Por eso el anciano construye un archivo y no una tumba. No quiere matar lo que siente la gente. Quiere guardarlo donde nadie lo recuerde con dolor. Cree que eso es piedad. Nosotros no estamos tan seguros.'"],
      ["'Somos cinco hermanos de colores distintos. Juntos, el mundo respira. Si falta uno, el mundo se tuerce. ¿Qué somos?'","Las cinco escamas / los cinco sentires","'Ya casi los tenéis a los cinco. Pero cuidado: un guardián con sus cinco escamas no es invencible. Es solo... completo. Lo que hagáis con él después importa más que recuperarlas.'"],
      ["'Existí antes que los reyes, antes que los mapas, antes que vuestra especie tuviera nombre. Tejí el primer hilo de lo que sentís. ¿Quién soy?'","Los Primeros Tejedores","'Ahora preguntáis lo correcto. Los Primeros Tejedores hicieron a Chromatus, y a otros antes que él. Vuestro dragón no es el único guardián que ha existido. Y no es el primero al que el anciano ha vaciado. Buscad en su archivo lo que guarda de los que vinieron antes.'"],
      ["'Cuando me tenés, querés compartirme. Cuando me das, no me pierdo: me multiplico. ¿Qué soy?'","La alegría / el amor / un recuerdo feliz","'El anciano nunca entendió esto. Creía que cada emoción era una carga que pesa. No vio que algunas, al compartirse, pesan menos. Si alguna vez lo enfrentáis con palabras, recordadle esto.'"],
    ], 3200, 2400, 3760),
    pEmpty(80),
    secretBox("El quinto acertijo (los Primeros Tejedores) es el más importante: su respuesta apunta directamente a la Colección Antigua del Archivo (Capítulo 8, sección 9.4) y al hecho de que hubo otros guardianes antes que Chromatus. El sexto acertijo le da al grupo un argumento concreto que pueden usar contra Mnemós en el Final B (sección 8.8). Si querés, podés repartir estos acertijos a lo largo de varias visitas en vez de todos de una vez."),
    pEmpty(80),
    secretBox("CALLBACK OPCIONAL — LA MONEDA DE NEVERWINTER: si tu mesa llevó una moneda antigua de Cuerda-Floja al anticuario Perrin Foliopolvo en Neverwinter (sección 9.1), este es el momento perfecto para el callback: el símbolo que Perrin no pudo identificar entonces —'como hilos entrelazados'— es la misma marca de los Primeros Tejedores. Nadie tiene que decirlo en voz alta. Si algún jugador lo conecta solo, dejá que sea suyo. Si nadie lo nota, no pasa nada — era un misterio sin resolver desde el principio, no una pista que dependiera de esto."),
    pEmpty(80),

    h3("MS-4C: El Hacha de Dwin"),
    p("El hacha de Dwin lleva d\u00edas levantada. Cuando el bosque se restaure, el hacha baja sola \u2014 pero Dwin nota que tiene grabadas runas que no estaban antes. Logos las identifica como runas de protecci\u00f3n fe\u00e9rica. El hacha ahora hace 1d6+1 da\u00f1o y tiene Ventaja contra criaturas de la Oscuridad. Dwin quiere llev\u00e1rsela, pero el grupo puede negociar para quedarse con ella a cambio de acompa\u00f1arlo hasta el borde del bosque (y potencialmente hacerse con el mapa de rutas del gremio de le\u00f1adores)."),
    pEmpty(140),

    h2("7.9 Recompensas de la Zona"),
    xpBox([
      ["Activar el mecanismo del Árbol Central (cualquier resultado)", "Hito", "Sube a nivel 11 (ver sección 1.6)"],
      ["MS-4A: Liberar a los 8 animales (por cualquier m\u00e9todo)", "Secundaria", "Pista del Lobo Fe\u00e9rico sobre el Coleccionista"],
      ["MS-4B: Conseguir audiencia con la Reina Espina", "Secundaria", "Lore profundo sobre el origen de Chromatus y los guardianes-drag\u00f3n"],
      ["MS-4C: Quedarse con el hacha encantada de Dwin", "Secundaria", "Hacha +1d6+1, Ventaja vs. criaturas de Oscuridad"],
      ["Aprender el truco de Sigilo de Sylveth", "Secundaria", "+2 adicional permanente a Sigilo (un personaje)"],
    ]),
    pageBreak(),
  ];
}
module.exports = { cap7 };