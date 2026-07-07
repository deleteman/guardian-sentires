const { p, pEmpty, h1, h2, h3, bullet, numBullet, infoTable, noteBox, secretBox, loreBox, voiceBox, warningBox, cdBox, xpBox, scaleBox, pageBreak, npcBlock, C } = require('./helpers');

function cap6() {
  return [
    h1("6. Zona 3 \u2014 Monte Hotenow"),
    scaleBox("\ud83d\udd34","Roja","Ira","Monte Hotenow, volc\u00e1n al norte de Neverwinter",C.redDark,"FFF0F0"),
    pEmpty(100),
    infoTable([
      ["Bonificaci\u00f3n mec\u00e1nica","Efecto al recuperarla"],
      ["+1d4 da\u00f1o de fuego a ataques con arma","La ira canalizada es fuerza pura. Permanente para todo el grupo"],
    ]),
    pEmpty(140),

    h2("6.1 Descripci\u00f3n General de la Zona"),
    p("El Monte Hotenow siempre fue un volc\u00e1n activo pero predecible. Los mineros de la regi\u00f3n sab\u00edan cu\u00e1ndo era seguro trabajar. Ahora el volc\u00e1n no hace erupci\u00f3n de lava \u2014 hace erupci\u00f3n de fragmentos de cristal rojo que pinchan y queman. El aire est\u00e1 saturado de un sonido constante que oscila entre el metal golpeado y algo parecido a gritos lejanos."),
    pEmpty(80),
    voiceBox("\"El camino a Hotenow siempre tuvo calor. Pero este calor es diferente: no viene del suelo, sino del aire. Como si el propio espacio estuviera tenso. Logos ajusta su lente varias veces antes de hablar: 'Temperatura ambiente: 47 grados. Origen: no geot\u00e9rmico. Clasificaci\u00f3n provisional: frustraci\u00f3n t\u00e9rmica acumulada. Nota: esa clasificaci\u00f3n no existe en mis par\u00e1metros est\u00e1ndar. Estoy creando una nueva categor\u00eda.' En la ladera, visible desde aqu\u00ed, hay algo que golpea r\u00edtmicamente \u2014 tan fuerte que el suelo tiembla con cada impacto.\""),
    pEmpty(140),

    h2("6.2 El Efecto de la Escama Perdida"),
    p("La Escama Roja convirti\u00f3 la ira en energ\u00eda sin salida \u2014 un ciclo de frustraci\u00f3n que se acumula sin poder liberarse. La lava del volc\u00e1n no fluye: se congela en cristales rojos que estallan bajo presi\u00f3n. Los trabajadores del volc\u00e1n y la forja est\u00e1n atrapados en tareas que nunca pueden terminar."),
    pEmpty(80),
    cdBox([
      ["Constituci\u00f3n ST contra el calor al llegar a la zona media del volc\u00e1n","12","Nivel 1 de Agotamiento"],
      ["Constituci\u00f3n ST adicional por cada hora en la zona alta","14","Nivel adicional de Agotamiento"],
      ["Destreza ST cuando explota un cristal rojo cercano","13","1d6 perforante + 1d4 de fuego por fragmentos"],
    ]),
    pEmpty(140),

    h2("6.3 Lugares de Inter\u00e9s"),

    h3("El Campamento Base de los Mineros"),
    p("Un campamento con 12 mineros que no pueden subir m\u00e1s pero tampoco quieren irse. Est\u00e1n sentados alrededor de brasas que no encienden, limpiando herramientas que ya est\u00e1n limpias. Su capataz (Rhen, ver NPC) todav\u00eda toma decisiones pero cada decisi\u00f3n que toma se revierte sola \u2014 si manda a alguien arriba, el minero regresa sin saber por qu\u00e9."),
    pEmpty(80),
    cdBox([
      ["Perspicacia para entender que los mineros est\u00e1n en loop compulsivo","13","Solo ven a gente cansada"],
      ["Persuasi\u00f3n para que Rhen comparta informaci\u00f3n sobre el Gigante","12","Da info b\u00e1sica. Con \u00e9xito CD 15: entrega el mapa de las c\u00e1maras interiores del volc\u00e1n"],
    ]),
    pEmpty(80),

    h3("La Forja del Coraz\u00f3n de Piedra"),
    p("A media ladera, una forja de piedra volc\u00e1nica que existe desde antes que los enanos modificaran el acceso. Aqu\u00ed vive y trabaja Korrund el Gigante de Fuego (ver NPC). Sus golpes de yunque se escuchan desde el campamento base. El yunque tiene inscrita una frase en giantish (que Logos puede traducir \u2014 ver secci\u00f3n 6.6)."),
    pEmpty(80),
    cdBox([
      ["Atletismo para subir la ladera inestable hasta la forja","13","Ca\u00edda de 4m: 2d6 da\u00f1o contundente"],
      ["Sigilo para observar a Korrund antes de hacer contacto","15","Si falla: Korrund los detecta y hay un round de combate defensivo antes del di\u00e1logo"],
    ]),
    pEmpty(80),

    h3("La Sala de los Cristales \u2014 Secreto opcional"),
    p("Percepci\u00f3n CD 16 para notar una grieta en la pared de la forja. Detr\u00e1s: una sala natural llena de cristales rojos del tama\u00f1o de un pu\u00f1o. Son fragmentos de lava solidificada con energ\u00eda de la Escama atrapada dentro \u2014 cada uno es un fragmento cristalizado de un recuerdo espec\u00edfico de furia de Korrund, formado en los siglos que lleva atrapado en el loop."),
    pEmpty(80),
    p("Si alguien toca un cristal sin protecci\u00f3n: 1d4 de da\u00f1o de fuego y una visi\u00f3n flash de 6 segundos. Estos son ejemplos concretos de visiones que el DM puede usar (elegir o tirar 1d6):"),
    pEmpty(80),
    infoTable([
      ["#","Visi\u00f3n al tocar el cristal"],
      ["1","Un martillo cayendo sobre metal una y otra vez, pero cada golpe forma, por un instante, la silueta de una cara peque\u00f1a \u2014 la de una ni\u00f1a \u2014 antes de deformarse de nuevo en metal informe"],
      ["2","Una voz gigante (la de Korrund, pero m\u00e1s joven, sin la rabia actual) diciendo 'esto es para ti' a alguien que no se ve en la visi\u00f3n"],
      ["3","Manos enormes sosteniendo algo diminuto con un cuidado desproporcionado a su tama\u00f1o \u2014 el contraste es desorientador"],
      ["4","El sonido de una risa infantil, gigante pero claramente de un ni\u00f1o, seguido de silencio abrupto"],
      ["5","Nieve cayendo sobre una fragua fr\u00eda \u2014 Korrund de pie, inm\u00f3vil, mirando algo en sus manos que la visi\u00f3n no deja ver"],
      ["6","Solo calor y furia pura, sin imagen \u2014 este cristal no tiene recuerdo feliz dentro, solo la rabia m\u00e1s reciente y menos formada"],
    ]),
    pEmpty(80),
    p("Si los toman: valen 25 po cada uno como material de encantamiento (de joyer\u00eda con resistencia al fuego). Tomar m\u00e1s de 5 sin el permiso de Korrund (antes de resolver su arco) lo pone hostil de inmediato al notarlo."),
    pEmpty(80),
    cdBox([
      ["Percepci\u00f3n para encontrar la grieta","16","No encuentran la sala"],
      ["Arcanos para entender los cristales antes de tocarlos","14","Evitan el da\u00f1o de fuego (pueden elegir tocar igual para ver la visi\u00f3n, sin da\u00f1o)"],
    ]),
    pEmpty(140),

    h2("6.4 NPCs de la Zona"),

    ...npcBlock(
      "Korrund \u2014 El Gigante de Fuego",
      "El NPC central. El desaf\u00edo principal de la zona",
      "4 metros de altura. Piel como brasas que nunca se apagan: roja oscura con grietas de luz anaranjada. El pelo es literalmente llamas. Trabaja en el yunque con un martillo del tama\u00f1o de una persona. No deja de golpear",
      "No hostil \u2014 atrapado. Cada golpe es un intento de crear algo, pero el ciclo sin fin le impide terminar nada. Cuando el grupo lo contacta, para un momento y los mira con una expresi\u00f3n de confusi\u00f3n genuina, como alguien que no recuerda cu\u00e1ndo empez\u00f3 a golpear",
      "Ver secci\u00f3n 6.4.1 \u2014 La Historia de la Familia de Korrund (detallada abajo)",
      "Este es el arco m\u00e1s complejo de la campa\u00f1a. Ver secci\u00f3n 6.5 completa. Resoluci\u00f3n: si el grupo ayuda a Korrund a crear algo nuevo \u2014 d\u00e1ndole un prop\u00f3sito presente \u2014 la ira se transforma en fuerza creativa. El Gigante entrega la escama voluntariamente y forja un regalo para el grupo",
      "No puedo parar. Si paro... no s\u00e9 qu\u00e9 hay despu\u00e9s de parar"
    ),

    h3("6.4.1 La Historia de la Familia de Korrund (Detalle para el DM)"),
    p("Korrund tuvo una hija, Brynna, hace aproximadamente 40 a\u00f1os (poco tiempo para un gigante de vida larga). Era una gigante peque\u00f1a y curiosa que pasaba horas en la forja viendo trabajar a su padre. Korrund le forj\u00f3 un pendiente de hierro y rub\u00ed para su mayor\u00eda de edad \u2014 el objeto m\u00e1s cuidado que hizo en su vida. Brynna muri\u00f3 en una avalancha en las monta\u00f1as del norte antes de poder recibirlo. Korrund nunca lleg\u00f3 a entreg\u00e1rselo."),
    pEmpty(80),
    p("El Coleccionista lleg\u00f3 a Hotenow y encontr\u00f3 a Korrund cargando ese dolor desde hac\u00eda d\u00e9cadas \u2014 ya intenso, ya sin resolver. Le ofreci\u00f3 (con las mismas palabras pacientes que usa siempre) liberarlo de 'la carga'. Korrund, exhausto despu\u00e9s de 40 a\u00f1os de duelo no resuelto, acept\u00f3 sin entender completamente lo que perder\u00eda. El Coleccionista no le rob\u00f3 el recuerdo entero de Brynna \u2014 eso hubiera sido cruel incluso para su l\u00f3gica. Le rob\u00f3 espec\u00edficamente la capacidad de sentir CUALQUIER COSA sobre ella que no fuera furia. Korrund todav\u00eda recuerda que tuvo una hija. Ya no puede recordar c\u00f3mo se sent\u00eda quererla \u2014 solo le queda la rabia de haberla perdido, amplificada y atrapada en loop."),
    pEmpty(80),
    secretBox("Esto es informaci\u00f3n que NO se entrega de una sola vez. El grupo la reconstruye en capas: (1) Tova sabe que Korrund 'perdi\u00f3 a alguien' por rumores de los mineros viejos. (2) Los cristales de la Sala de Cristales dan visiones fragmentadas (ver tabla de arriba). (3) El pendiente perdido (MS-3B) es la pieza que conecta todo. (4) Korrund mismo solo cuenta la historia completa si el grupo llega a la Opci\u00f3n A o C de la decisi\u00f3n moral (secci\u00f3n 6.5) \u2014 antes de eso, solo dice fragmentos como 'ten\u00eda una hija' sin m\u00e1s detalle, porque genuinamente le cuesta acceder al resto."),
    pEmpty(100),

    h3("Herramientas que tiene la party para entender esto"),
    infoTable([
      ["Herramienta","Qu\u00e9 revela"],
      ["Hablar con Tova antes de subir a la forja","Rumor: 'Dicen que Korrund tuvo familia. Los mineros viejos lo susurran, no se sabe mucho m\u00e1s'"],
      ["Tocar los cristales de la Sala de Cristales","Visiones fragmentadas (tabla de la secci\u00f3n 6.3) \u2014 atan a Korrund con la idea de un hijo/a sin confirmarlo"],
      ["Perspicacia CD 14 al hablar con Korrund directamente","El Gigante dice: 'Ten\u00eda algo que hacer. Para alguien. No recuerdo para qu\u00e9 era' \u2014 confirma que falta algo espec\u00edfico"],
      ["Encontrar el pendiente (MS-3B)","Objeto f\u00edsico que, al mostr\u00e1rselo, hace que Korrund diga el nombre de Brynna por primera vez"],
      ["Llegar a la Opci\u00f3n A o C de la decisi\u00f3n moral","Korrund cuenta la historia completa, incluyendo el nombre de su hija y la avalancha"],
    ], 3000, 6360),
    pEmpty(140),

    ...npcBlock(
      "Rhen Brasacorta",
      "Capataz de los mineros. L\u00edder de facto del campamento",
      "38 a\u00f1os, enano, metro veinte de altura, barba recortada con precisi\u00f3n. Siempre tiene un tablero de anotaciones en la mano aunque ya no puede escribir nada nuevo",
      "Pragm\u00e1tico y orgulloso. En el loop del efecto: toma decisiones con total convicci\u00f3n que se revierten solas, lo cual lo tiene al borde de la desesperaci\u00f3n sin poder expresarla",
      "Que sus mineros bajen de la monta\u00f1a con vida. Lleva tres semanas intentando organizar una evacuaci\u00f3n que nunca se completa",
      "Si el grupo lo ayuda a completar UNA decisi\u00f3n que se mantenga (cualquiera, incluso trivial), Rhen recupera el control. Luego puede ayudar: conoce los t\u00faneles del volc\u00e1n mejor que nadie y puede guiar al grupo por un camino que evita los cristales explosivos",
      "Decisi\u00f3n tomada: evacuamos. [Todos se mueven. Luego vuelven solos sin saber por qu\u00e9.] Decisi\u00f3n tomada: evacuamos"
    ),

    ...npcBlock(
      "Tova la Aprendiz",
      "Joven minera con conocimientos b\u00e1sicos de herrer\u00eda. Secundaria pero \u00fatil",
      "19 a\u00f1os, humana, brazos m\u00e1s fuertes de lo esperado para su tama\u00f1o, pelo recogido con una cuerda que fue de su abuela",
      "Curiosa y menos afectada que los mayores \u2014 su loop es m\u00e1s leve: mantiene el campamento limpio una y otra vez. Consciente de su situaci\u00f3n aunque no puede cambiarla",
      "Aprender el oficio de Korrund. Antes de que todo esto pasara, sub\u00eda a la forja a observar al Gigante cuando los mayores no la ve\u00edan",
      "Puede actuar como traductora emocional con Korrund \u2014 conoce sus patrones de comportamiento y puede decirle al grupo cu\u00e1ndo el Gigante est\u00e1 m\u00e1s o menos agitado. Su arco: si el grupo resuelve la zona, Korrund acepta tomarla como aprendiz. Reaparece en sesiones posteriores como herrer\u00eda m\u00f3vil \u2014 puede mejorar equipo",
      "\u00c9l no est\u00e1 enojado con nosotros. Est\u00e1 enojado con algo que no puede encontrar"
    ),
    pEmpty(140),

    h2("6.5 La Decisión Moral — El Recuerdo del Gigante"),
    p("Korrund está furioso porque el Coleccionista le robó la capacidad de sentir algo distinto a la ira sobre la pérdida de su hija Brynna. La ira es lo único que le queda de ese amor. El grupo tiene que ayudarlo a transformar esa fuerza — pero hay una decisión que tomar primero."),
    pEmpty(80),
    secretBox("NOTA DE DISEÑO — LA FÓRMULA QUE AQUÍ SE ROMPE: en las dos zonas anteriores el grupo aprendió un procedimiento implícito: hay alguien sufriendo, te sentás con ese sufrimiento (escuchás, esperás, respetás) y el mundo se repara. Ese procedimiento NO funciona con Korrund. Si lo intentan — si se sientan a escucharlo con paciencia, si esperan a que la ira se agote, si intentan calmarlo con palabras suaves — Korrund se cierra más. La ira no se disuelve con gentileza: necesita un destino. Logos lo señala explícitamente si el grupo prueba el método anterior y falla: 'El protocolo de las zonas previas no aplica. Las unidades anteriores necesitaban ser escuchadas. Esta unidad necesita ser vista haciendo algo.' No es un fracaso del grupo — es la zona enseñando que emociones distintas piden cosas distintas."),
    pEmpty(80),
    warningBox("RELOJ NARRATIVO — LA IRA DE KORRUND SE VUELVE IRREVERSIBLE: este reloj se activa por ABANDONAR la zona, no por explorarla a fondo. Si el grupo llega a Hotenow, conoce a Korrund (o incluso solo escucha de él a través de Rhen o Tova), y luego se VA de Hotenow sin avanzar su arco —y tarda más de 2-3 ZONAS COMPLETAS en volver—, algo cambia. La ira sin destino, acumulada sin alivio durante tanto tiempo, termina consumiendo el último hilo que lo conectaba con Brynna por su cuenta, sin que nadie lo provoque."),
    pEmpty(80),
    noteBox("ACLARACIÓN — esto NO cuenta como demora","Explorar Hotenow a fondo SÍ está permitido sin disparar el reloj: ir y volver de las Galerías Profundas (sección 11.4), pasar varias sesiones en la zona, descansar, hacer MS-3A/B/C, todo esto sucede DENTRO de Hotenow y nunca activa el reloj — Korrund los ve trabajar, ayudar a los mineros, buscar el pendiente. Lo que activa el reloj es específicamente irse de Hotenow habiendo conocido el problema de Korrund y dejarlo sin resolver durante 2-3 zonas enteras antes de volver.","FFF8E7",C.goldDeep),
    pEmpty(80),
    p("Cuando el grupo regresa tras esa demora real, las Opciones A y C (forjar el pendiente, preservar el recuerdo) ya no están disponibles — es demasiado tarde, el hilo se rompió solo. Solo quedan la Opción B (restaurar sin más, Korrund queda en paz pero vacío de cualquier rastro de su hija) o el combate trágico. La escama se consigue igual de cualquier forma — lo que se pierde es la mejor resolución posible para Korrund."),
    pEmpty(140),

    h3("Lo que el grupo descubre — y cómo lo descubre"),
    p("La pieza clave que el grupo debe entender es esta: el Coleccionista NO le borró a Korrund el recuerdo de que tuvo una hija. Korrund sabe que existió Brynna. Lo que le robó fue la capacidad de sentir cualquier cosa sobre ella que no fuera furia. Por eso la ira no es 'un' rastro de Brynna — es el ÚLTIMO HILO EMOCIONAL que le queda con ella. Si la escama se restaura sin más, Korrund recupera la calma, pero ese hilo se disuelve con la ira, y le queda un recuerdo hueco ('tuve una hija') sin ningún sentimiento pegado. Paz, pero un vacío donde antes había, al menos, dolor con forma."),
    pEmpty(80),
    p("El grupo no recibe esta información de golpe. La arma a partir de tres fuentes que deben cruzar:"),
    pEmpty(60),
    bullet("LOGOS hace la deducción mecánica. Si el grupo le pregunta qué pasará al restaurar la escama, Logos analiza el patrón de las zonas anteriores y responde: 'En cada caso previo, restaurar la escama eliminó el estado emocional dominante de la zona. Aquí el estado dominante es ira. Proyección: la ira de la unidad Korrund desaparecerá por completo.' Esto es un dato neutro — Logos no entiende todavía la implicación."),
    bullet("LOS CRISTALES de la Sala Secreta (sección 6.3) muestran las visiones del amor que Korrund ya no puede sentir (la risa de Brynna, las manos sosteniendo el pendiente). Un jugador que conecte esas visiones con la deducción de Logos entiende: si la ira es lo único que conecta a Korrund con esas imágenes, y la ira va a desaparecer..."),
    bullet("KORRUND mismo lo confirma, solo si el grupo le hace la pregunta directa (Perspicacia CD 14 para saber cómo preguntarlo sin enfurecerlo): 'Cuando pienso en ella, solo siento fuego. ¿Qué soy sin el fuego? No lo sé. Quizá nada. Quizá por fin la paz. Quizá la olvido del todo.'"),
    pEmpty(80),
    secretBox("El momento de comprensión ideal es cuando un jugador junta las tres piezas en voz alta. Si nadie lo hace, Logos puede dar el empujón final tras ver los cristales: 'Corrección a mi proyección anterior. Eliminar la ira de la unidad Korrund no lo dejará neutro. Lo dejará... vacío respecto a su hija. La ira es el único registro emocional que conserva de ella. No tengo una categoría para lo que eso significa. Pero calculo que importa.'"),
    pEmpty(80),
    noteBox("LA PREGUNTA SIN RESPUESTA CORRECTA","¿Le dicen al Gigante lo que va a perder antes de ayudarlo? Opciones: (A) Le dicen la verdad y dejan que él decida. (B) No le dicen nada porque 'es por su bien'. (C) Buscan una tercera vía que preserve algo del recuerdo. Todas las opciones dan la escama. Todas tienen consecuencias distintas.","FFF8E7",C.goldDeep),
    pEmpty(80),

    h3("Opción A — La verdad"),
    p("El grupo le explica a Korrund lo que pasará. El Gigante tarda una hora en silencio. Luego dice: 'Entonces ayudadme a terminar lo que empecé, antes de que lo olvide para siempre.' Korrund decide forjar — por fin — el pendiente de hierro y rubí que nunca pudo entregarle a Brynna. El grupo debe ayudarlo en 3 rondas de trabajo conjunto (Atletismo o Herramientas de Artesano CD 13: sostener el metal, avivar el fuego, templar la pieza)."),
    pEmpty(80),
    noteBox("EL OBJETO FORJADO (Opción A)","Un pendiente de hierro forjado con un rubí incrustado, del tamaño de una mano humana (proporcional a un gigante). Mecánicamente: Amuleto de Calma Forjada — quien lo lleva tiene Ventaja en salvaciones contra miedo y contra efectos que induzcan ira incontrolable (como un berserker enloquecido o un control mental). Una vez por día, puede gastarse para añadir 1d6 a cualquier tirada de salvación. Korrund se queda con una réplica idéntica más pequeña que se cuelga del cuello — la primera cosa que termina en 40 años.","E8F8F8",C.tealDark),
    pEmpty(80),

    h3("Opción B — Sin decirle"),
    p("El grupo completa el ritual sin explicarle. Korrund queda en paz pero confundido — como despertar de un sueño largo. Agradece al grupo sin saber bien qué le hicieron. La escama aparece. No hay regalo forjado. Pero Logos registra en silencio lo que ocurrió y en una sesión futura pregunta: '¿Fue correcto tomar esa decisión por él?'"),
    pEmpty(80),

    h3("Opción C — La tercera vía"),
    p("Si el grupo propone preservar el recuerdo de Brynna de otra forma (cristales de la sala secreta, hechizo de Imagen Mayor, un objeto con inscripción), Korrund acepta. El ritual se completa Y conserva el recuerdo en un objeto físico: el pendiente original (si lo encontraron en MS-3B) montado en un soporte con un fragmento de cristal rojo estabilizado dentro, que reproduce en bucle lento la risa infantil de Brynna (visión #4 de la tabla de cristales) cada vez que alguien lo sostiene en silencio. La escama aparece. El Gigante llora por primera vez en siglos — literalmente, lava que se enfría al caer en gotas oscuras."),
    pEmpty(80),
    cdBox([
      ["Korrund — Convencerlo de escuchar (Persuasión o Intimidación — con desventaja si se usa intimidación)","14","Korrund vuelve al loop de golpes y hay que esperar 10 min antes de intentarlo de nuevo"],
      ["Ritual de transformación — Arcanos o Religión para canalizarlo","14","La escama aparece inestable: da solo +1d4 fuego por 24 horas antes de estabilizarse"],
      ["Opción C — Arcanos para crear el objeto de preservación de memoria","15","El recuerdo se preserva pero en fragmentos: Korrund recuerda imágenes, no la historia completa"],
    ]),
    pEmpty(140),

    h2("6.6 Cómo se Libera la Escama Roja — El Ritual de la Forja"),
    p("Esta es la mecánica concreta de liberación, igual de central que el ritual de enraizamiento de la Escama Amarilla o el escuchar a la Vieja Raíz. Conviene tenerla clara antes de jugar la escena."),
    pEmpty(80),
    secretBox("DÓNDE ESTÁ LA ESCAMA: la Escama Roja no la tiene Korrund en un bolsillo ni está escondida en una cueva. Está FUNDIDA en el corazón de su forja — atrapada dentro de la lava que se congeló en cristal el día que el Coleccionista lo vació. La ira de Korrund es literalmente lo que mantiene esa lava sólida e inmóvil. Mientras él golpee sin propósito, la lava nunca fluye y la escama queda sellada. Por eso restaurarla no es 'agarrarla': es lograr que Korrund libere su ira a través de un acto con sentido, para que la lava por fin se derrita y la escama salga a flote."),
    pEmpty(80),
    p("El ritual es siempre el mismo, sin importar la opción moral elegida (A, B o C): Korrund vuelve a forjar con un propósito. La ira deja de acumularse en vacío y se canaliza en el trabajo. Mecánicamente son 3 rondas de trabajo conjunto:"),
    pEmpty(60),
    bullet("RONDA 1 — Avivar el fuego: alguien debe llevar el fuego de la forja a temperatura (Fuerza con el fuelle, o Arcanos/Religión para soplar magia en las brasas). CD 13. El fuego pasa de gris a rojo por primera vez en meses."),
    bullet("RONDA 2 — Sostener el metal: el martillo de Korrund es del tamaño de una persona; alguien debe sujetar y posicionar la pieza mientras él golpea (Atletismo o Herramientas de Artesano). CD 13. Cada golpe de Korrund descarga un poco de la ira acumulada — el suelo tiembla menos con cada uno."),
    bullet("RONDA 3 — El golpe final: en el momento de templar la pieza, Korrund descarga TODA la ira restante en un último golpe. Un personaje debe ayudarlo a guiar ese golpe sin que la fuerza lo parta todo (Destreza o Religión para canalizar). CD 14. Al impactar, la lava congelada del corazón de la forja se derrite de golpe, fluye por primera vez en meses, y la Escama Roja emerge flotando sobre el río de lava, ya libre."),
    pEmpty(80),
    p("Qué cambia según la opción moral: la MECÁNICA de liberación es idéntica; lo que cambia es QUÉ forja Korrund y qué recibe el grupo. En la Opción A forja el pendiente de Brynna (recompensa: Amuleto de Calma Forjada). En la B forja una pieza sin sentido personal (se libera la escama, sin objeto). En la C forja el soporte de preservación del recuerdo (objeto narrativo). En los tres casos, el golpe final derrite la lava y suelta la escama."),
    pEmpty(80),
    warningBox("Si el grupo nunca logra que Korrund acceda a forjar (falla repetidamente la persuasión, o decide atacarlo), hay una salida de emergencia: derrotar a Korrund en combate (es duro — trátalo como un Gigante de Fuego reforzado, CR 9) también derrite la lava al caer él, liberando la escama. Pero es el peor desenlace: Korrund muere con su ira intacta, el grupo no recibe ningún objeto, y Logos lo registra como 'extracción por fuerza — resultado subóptimo'. Que sea el último recurso, no el primero."),
    pEmpty(140),

    h2("6.7 La Pista del Coleccionista — Se Revela el Nombre 'Mnemós'"),
    p("La inscripción en el yunque de Korrund, en giantish antiguo. Logos la traduce durante el viaje a la siguiente zona (dramáticamente, en el peor momento posible): 'El dolor es un archivo corrupto. Debo limpiarlo todo. — Mnemós'."),
    pEmpty(80),
    secretBox("Por qué aparece el nombre AQUÍ y no antes: el Coleccionista fue meticuloso en Cuerda-Floja y el Pantano — nunca dejó rastro escrito de su identidad. Pero en Hotenow, confrontado con el dolor de Korrund (que de alguna manera resuena con algo que el propio Coleccionista no recuerda sentir), se permitió escribir una nota personal en el yunque antes de irse — casi como hablándose a sí mismo. Fue un descuido único, motivado por la intensidad del lugar. Logos NO reconoce el nombre como el de su propio creador en este momento: 'Nombre propio detectado: Mnemós. Sin coincidencias en mi base de datos. Almacenando para referencia futura.' Esa conexión —que Mnemós es quien construyó a Logos— solo se revela en el Plano del Archivo (Capítulo 8)."),
    pEmpty(140),

    h2("6.8 Misiones Secundarias de la Zona"),

    h3("MS-3A: La Evacuación de Rhen"),
    p("Rhen lleva tres semanas intentando bajar a sus mineros. El grupo puede romper el loop ayudándolo a completar un plan paso a paso. Mecánicamente: Rhen propone 4 acciones de evacuación. El grupo debe acompañar FÍSICAMENTE cada acción para que no se revierta. Al completar la evacuación, Rhen les da el mapa de los túneles interiores del volcán."),
    pEmpty(80),
    p("Para qué sirven los túneles (tres usos concretos): (1) acceso directo a la Forja sin pasar por el camino de cristales explosivos; (2) son donde está enterrado el pendiente de Brynna (MS-3B); y (3) son un dungeon corto y opcional con su propio peligro y tesoro — el dungeon completo 'Las Galerías Profundas' está en la sección 11.4. El mapa marca tres ramales: uno a la Forja, uno a una cámara derrumbada (el pendiente), y uno sellado con una advertencia enana antigua que Rhen nunca se atrevió a cruzar (la entrada al dungeon)."),
    pEmpty(80),
    cdBox([
      ["Cada acción de evacuación — Liderazgo o Persuasión para mantener el momentum","11","Esa acción se revierte y hay que repetirla"],
    ]),
    pEmpty(80),

    h3("MS-3B: El Objeto Perdido de Korrund"),
    p("El pendiente de hierro y rubí que Korrund forjó para Brynna existe todavía — está enterrado en los túneles bajo la forja, donde Korrund lo guardó hace 40 años antes de que la rabia lo consumiera. Si el grupo lo encuentra (Investigación CD 16 en los túneles) y se lo devuelve, Korrund tiene una reacción que cambia el tono de la escena: agarra el pendiente, lo sostiene, y entonces — por primera vez — la ira cede un segundo antes de volver, y dice un nombre: 'Brynna.' Ese segundo es la apertura para las Opciones A o C de la decisión moral."),
    pEmpty(80),
    cdBox([
      ["Investigación para encontrar el pendiente en los túneles","16","Lo encuentran con otro intento o con ayuda de Rhen"],
      ["Percepción para distinguirlo de los otros fragmentos de metal","12","Lo ignoran creyendo que es escombro"],
    ]),
    pEmpty(80),

    h3("MS-3C: Los Cristales Vivos"),
    p("Los cristales rojos de la Sala Secreta tienen valor comercial y mágico. Si el grupo toma más de 5, al salir del volcán un enano mercader llamado Dex Pedernales los está esperando en el campamento base — rastreó las señales de energía. Quiere comprar todos los cristales que tengan. Paga bien (50 po cada uno) pero es deshonesto: si el grupo no negocia bien (Perspicacia CD 13 para detectarlo, Persuasión CD 14 para negociar), Dex les da monedas falsas mezcladas con reales. Los cristales aparecerán más adelante en el mercado de Neverwinter, ya procesados como material de encantamiento."),
    pEmpty(140),

    h2("6.9 Recompensas de la Zona"),
    xpBox([
      ["Resolver el arco de Korrund (cualquier opción)", "Hito", "Sube a nivel 9 (ver sección 1.6)"],
      ["Opción A — Forjar el pendiente con Korrund", "Decisión moral","Amuleto de Calma Forjada"],
      ["Opción C — Crear el objeto de preservación", "Decisión moral","Objeto de memoria (efecto narrativo, sin bonus mecánico)"],
      ["MS-3A: Evacuación exitosa de Rhen", "Secundaria", "Mapa de túneles interiores del volcán"],
      ["MS-3B: Encontrar el pendiente perdido", "Secundaria", "Habilita las Opciones A/C de la decisión moral"],
      ["MS-3C: Negociar con Dex Pedernales", "Secundaria", "Hasta 250 po (si la negociación tiene éxito)"],
    ]),
    pEmpty(140),

    h2("6.10 Aftermath — El Día Después"),
    p("Esta es la zona con más ramificaciones de las cuatro — el aftermath tiene que reflejarlo. Elegí el bloque que corresponda a la opción moral que se jugó, no leas los tres."),
    pEmpty(80),

    h3("Escena General — La Forja Respira"),
    voiceBox("\"El sonido cambia primero. El golpeteo constante, ese ritmo entre metal y grito lejano, se corta después del golpe final — y lo que queda es silencio real, no el silencio tenso de antes. La lava, sólida durante meses, fluye de nuevo por los canales de la forja con un resplandor parejo. El aire de Hotenow sigue caliente, pero es un calor de trabajo, no de tensión. Los cristales rojos que no se usaron dejan de vibrar en la Sala Secreta.\""),
    pEmpty(140),

    h3("Si jugaron la Opción A (la verdad + el pendiente)"),
    p("Korrund se cuelga la réplica del pendiente y vuelve al yunque casi de inmediato — pero ahora golpea con propósito, forjando cosas reales otra vez. Si el grupo vuelve a visitarlo en sesiones futuras, siempre tiene algo terminado para mostrarles, sin que se lo pidan. Es la versión más funcional y estable de Korrund de las tres."),
    pEmpty(80),

    h3("Si jugaron la Opción B (sin decirle)"),
    p("Korrund está en paz, pero hay algo perceptiblemente hueco en cómo habla — agradece al grupo sin poder explicar bien por qué se siente distinto. No pregunta por Brynna ni la menciona; el hilo se disolvió con la ira. Semanas después (podés jugarlo como una escena breve si el grupo vuelve a pasar por Hotenow), Korrund les hace una pregunta simple y desarmante: '¿Yo quería algo, antes? Siento que se me olvidó querer algo.' No hay forma de arreglar esto retroactivamente — es el costo permanente de esta opción."),
    pEmpty(80),

    h3("Si jugaron la Opción C (la tercera vía)"),
    p("La escena más fuerte de la zona: Korrund llorando lava por primera vez en siglos, sosteniendo el soporte con el fragmento de cristal estabilizado. Lo consulta en momentos de calma —no en combate, no en trabajo— y cada vez que lo hace, se lo puede escuchar reírse bajito con la risa infantil de Brynna en loop lento. Es, de las tres, la única versión de Korrund que menciona a su hija por nombre sin que se lo pregunten."),
    pEmpty(80),

    h3("Si se activó el Reloj Narrativo (tardaron demasiado en volver)"),
    warningBox("Esta es la variante más triste, y debería sentirse así: si el grupo dejó pasar 2-3 zonas completas sin resolver el arco de Korrund, solo quedan la Opción B forzada o el combate trágico (sección 6.5). En el aftermath, si fue combate: Korrund está muerto, la escama ya se liberó al caer él, y no hay objeto ni cierre — Logos lo registra como 'extracción por fuerza, resultado subóptimo' y no dice nada más al respecto, lo cual es, a su manera, un silencio elocuente. Si fue la Opción B tardía: igual que la versión normal de B, pero Korrund menciona, sin que se lo pregunten, que 'hace un tiempo alguien vino y no volvió' — una herida extra, autoinfligida por la demora, que el grupo puede notar o no."),
    pEmpty(80),

    h3("Rhen y Tova"),
    p("Si la evacuación de Rhen (MS-3A) se completó, los mineros ya están instalados más abajo en la montaña, y Rhen mismo organiza un pequeño agasajo tosco para el grupo — cerveza tibia, pero servida con genuino orgullo de haber terminado algo. Si nunca se completó, los mineros siguen en el campamento base, ahora simplemente cansados en vez de atrapados en loop — sin urgencia, pero sin resolver. Tova, si Korrund terminó en la Opción A o C, es aceptada como aprendiz de inmediato; en la B, Korrund accede pero de forma más mecánica, sin la calidez que la escena podría haber tenido."),
    pEmpty(80),

    h3("Cierre y Gancho"),
    p("Logos, en cualquier variante, termina con la traducción del yunque (sección 6.7) durante el viaje de salida — el nombre 'Mnemós' aparece por primera vez, sin que Logos entienda todavía su propio vínculo con él. Es el gancho automático hacia la siguiente zona, sin importar qué haya pasado con Korrund."),
    pEmpty(140),

    pageBreak(),
  ];
}
module.exports = { cap6 };