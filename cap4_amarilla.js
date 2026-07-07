const { p, pEmpty, h1, h2, h3, bullet, numBullet, infoTable, noteBox, secretBox, loreBox, voiceBox, warningBox, cdBox, xpBox, scaleBox, pageBreak, npcBlock, C } = require('./helpers');

// Helper local: bloque de estadisticas compacto (igual formato que cap11_combate.js / cap14_arcos_pj.js)
function stat(nombre, cr, flavor, filas, acciones) {
  const out = [ h3(nombre + "  (" + cr + ")"), p(flavor), infoTable([["Atributo","Valor"], ...filas]) ];
  if (acciones && acciones.length) { out.push(pEmpty(40)); out.push(infoTable([["Accion / Rasgo","Efecto"], ...acciones], 3200, 6160)); }
  out.push(pEmpty(80));
  return out;
}

function cap4() {
  return [
    h1("4. Zona 1 \u2014 Cuerda-Floja (High-Strand)"),
    scaleBox("\ud83d\udfe1","Amarilla","Alegr\u00eda","Cuerda-Floja, bosques al norte de Neverwinter",C.yellowDark,"FFFBF0"),
    pEmpty(100),
    infoTable([
      ["Bonificaci\u00f3n mec\u00e1nica","Efecto al recuperarla"],
      ["+2 a la iniciativa","La alegr\u00eda te hace reaccionar m\u00e1s r\u00e1pido. Permanente para todos los jugadores"],
    ]),
    pEmpty(140),

    h2("4.1 Descripci\u00f3n General de la Zona"),
    p("Cuerda-Floja es un pueblo de 200 habitantes enclavado entre dos colinas, conocido por sus mercados de artesan\u00edas y su festival anual de cometas. Normalmente es ruidoso y colorido. Ahora el color se ha ido \u2014 pero el ruido no."),
    pEmpty(80),
    voiceBox("\"El pueblo de Cuerda-Floja debería ser la clase de lugar donde los niños corren y los vendedores gritan los precios de sus mercancías. Y de hecho, eso es exactamente lo que ven. Gente corriendo — pero tropezando entre sí sin reírse del golpe. Vendedores gritando — pero los mismos precios una y otra vez, sin variación. Una mujer baila sola en la plaza. Un hombre construye una torre de sombreros frente a una zapatería cerrada. Todos tienen los ojos abiertos. Ninguno parece ver nada.\""),
    pEmpty(80),
    voiceBox("\"Mientras terminan de asimilar la escena, algo se mueve donde no debería: en la casa más alejada del pueblo, casi en el límite del bosque, una cortina se corre apenas — lo justo para que se vea, por una fracción de segundo, la silueta de alguien parado ahí, quieto, mirándolos. En cuanto alguien del grupo devuelve la mirada, la cortina se cierra de golpe. Nadie más en el pueblo reaccionó a la llegada del grupo. Esa persona sí.\""),
    pEmpty(80),
    noteBox("ESTO ES NIRA — NO LO DEJES PASAR","Este es el gancho de Nira (sección 4.4), pensado para que sea imposible de ignorar: a diferencia del resto del pueblo, ella SÍ los registró como algo fuera de lo común desde el primer segundo. Si el grupo no investiga de inmediato, está bien — pero no dejes que el momento pase sin describirlo con esta fuerza. Si en algún momento más adelante parecen haberse olvidado de la casa del borde del pueblo, un aldeano eufórico puede señalar vagamente hacia allá sin razón aparente ('¡ahí vive la que no juega con nosotros!', dicho con la misma alegría vacía de siempre) como recordatorio.","FFF8E7",C.goldDeep),
    pEmpty(140),

    h2("4.2 El Efecto de la Escama Perdida"),
    p("La Escama Amarilla convirti\u00f3 la alegr\u00eda en euforia t\u00f3xica y compulsiva. Los habitantes de Cuerda-Floja est\u00e1n atrapados en loops de comportamiento alegre pero vac\u00edo \u2014 r\u00eden porque el mecanismo los obliga, no porque algo los alegre. El efecto f\u00edsico: todo lo que deber\u00eda estar quieto vibra levemente. Los objetos caen de las mesas solos. Los animales est\u00e1n inquietos."),
    pEmpty(80),
    cdBox([
      ["Percepci\u00f3n para notar que los ojos de los aldeanos est\u00e1n vac\u00edos","12","El grupo puede confundir la euforia con normalidad al llegar"],
      ["Medicina para diagnosticar el estado de un aldeano","14","Toman el efecto por una enfermedad com\u00fan (retraso de 1 sesi\u00f3n)"],
      ["Sabidur\u00eda ST para un jugador que pasa m\u00e1s de 10 min entre los aldeanos","13","Comienza a sentir euforia superficial: Desventaja en INT hasta descanso corto"],
    ]),
    pEmpty(140),

    h2("4.3 Lugares de Inter\u00e9s"),

    h3("La Plaza Central"),
    p("Aqu\u00ed est\u00e1 Barnaby, sentado en una silla tra\u00edda de su casa, leyendo un libro de filosof\u00eda y tomando t\u00e9. Es el \u00fanico punto quieto en un pueblo en caos. Tiene una se\u00f1al hecha a mano frente a \u00e9l: 'PREG\u00daNTEME (soy el \u00fanico cuerdo)'."),
    pEmpty(80),

    h3("El Taller de Cometas de Sella"),
    p("Una tienda de cometas artesanales cuyos productos ahora vuelan solos por el techo interior. La due\u00f1a (Sella, ver NPC) los persigue sin parar, atrap\u00e1ndolos y solt\u00e1ndolos en un loop infinito. En el taller hay una caja fuerte escondida bajo el mostrador con el mapa de rutas comerciales de la regi\u00f3n \u2014 \u00fatil para la campa\u00f1a."),
    pEmpty(80),
    cdBox([
      ["Percepci\u00f3n para notar la caja fuerte bajo el mostrador","13","No la encuentran"],
      ["Destreza (Herramientas de Ladr\u00f3n) o Fuerza para abrirla","14 / 16","Rompen el mecanismo: el mapa est\u00e1 da\u00f1ado (parcialmente legible)"],
    ]),
    pEmpty(80),

    h3("La Posada del Viento Cruzado"),
    p("El posadero (Donto, ver NPC) sirve bebidas a clientes que ya se fueron. Las mesas est\u00e1n llenas de vasos vac\u00edos. En la cocina, alguien dej\u00f3 una olla hirviendo \u2014 lleva horas en el fuego. Si nadie la saca, en 30 minutos (3 turnos de exploraci\u00f3n) la cocina se incendia."),
    pEmpty(80),
    cdBox([
      ["Percepci\u00f3n para notar el olor a quemado","11","No detectan el peligro hasta que hay humo visible"],
      ["Atletismo para mover la olla sin quemarse","13","1d4 de da\u00f1o de fuego en la mano"],
    ]),
    pEmpty(80),

    h3("La Casa de Nira (la anciana del borde del pueblo)"),
    p("Una casa m\u00e1s peque\u00f1a en el l\u00edmite del pueblo. Nira (ver NPC) vive ah\u00ed y es la \u00fanica que NO est\u00e1 en estado euf\u00f3rico \u2014 est\u00e1 escondida adentro, aterrorizada. Descubri\u00f3 que si cerraba las persianas y no miraba a los vecinos, pod\u00eda mantener la mente clara. Conoce la historia completa de c\u00f3mo lleg\u00f3 Mnem\u00f3s al pueblo."),
    pEmpty(80),
    cdBox([
      ["Persuasi\u00f3n para que Nira abra la puerta","12","Se queda adentro y habla solo a trav\u00e9s de la madera"],
      ["Perspicacia para notar que tiene miedo genuino (no euforia)","11","El grupo puede usar Calma Emocional en lugar de Persuasi\u00f3n \u2014 CD 8"],
    ]),
    pEmpty(140),

    h3("El Campanario de Emmer"),
    p("Pegado a la parte trasera del templo del pueblo, un cobertizo apenas mas grande que una habitacion grande. Ahi vive y trabaja Emmer (ver NPC), golpeando la misma campana rajada una y otra vez, esperando un tono que nunca llega. El clang seco se escucha desde cualquier punto de Cuerda-Floja, cada pocos segundos, como un metronomo roto. No hace falta mapa para esta locacion — es un solo ambiente: banco de trabajo, un horno pequeno y frio, y una escalera de mano hacia un altillo donde Emmer guarda campanas viejas."),
    pEmpty(80),

    h2("4.4 NPCs de la Zona"),

    ...npcBlock(
      "Barnaby el 'Cuerdo'",
      "Gu\u00eda principal y fuente de informaci\u00f3n",
      "50 a\u00f1os. Barba desordenada. Ropa impecable (hoy). Calcetines en los bolsillos, no en las orejas \u2014 se los sac\u00f3 cuando se volvi\u00f3 l\u00facido porque 'ya no tiene sentido'",
      "Ir\u00f3nico y ligeramente melanc\u00f3lico de estar cuerdo. Habla con precisi\u00f3n inusual. Extra\u00f1a su propia locura y lo dice abiertamente",
      "Restaurar la Escama Amarilla para volver a ser \u00e9l mismo. Considera que la locura alegre es m\u00e1s honesta que la cordura",
      "Durante la sesi\u00f3n act\u00faa como gu\u00eda. Si el ritual funciona, recupera su locura habitual pero m\u00e1s consciente. Reaparece en Neverwinter en sesiones posteriores vendiendo 'mapas del queso del cielo' que en realidad tienen informaci\u00f3n \u00fatil codificada",
      "El cielo sigue siendo de queso gouda. Ahora que soy cuerdo, ya nadie me cree — pero tampoco puedo demostrarlo, lo cual es mucho peor"
    ),

    h3("Diálogo de Barnaby — Cómo Sabe lo que Sabe"),
    p("Barnaby no es un dispensador de pistas — tiene una razón concreta para saber lo que sabe, y el grupo puede sacársela con preguntas normales. Usá estos bloques en el orden que la mesa los pida, no como un monólogo único."),
    pEmpty(80),
    voiceBox("\"PRIMER CONTACTO (si todavía no hablaron con él): 'Ah. Visitantes. Qué novedad — la última visitante notable fue una gaviota, y ni siquiera tenía preguntas inteligentes. [señala el cartel] Sí, soy el único cuerdo. No, no es un halago. El cielo sigue siendo de queso gouda, ¿saben? Ahora que estoy cuerdo, ya nadie me cree — pero tampoco puedo demostrarlo, lo cual es mucho peor.'\""),
    pEmpty(80),
    voiceBox("\"SI PREGUNTAN QUÉ PASÓ: les explica, con esa precisión inusual suya, que algo le sacó a la alegría del pueblo su ancla — que la gente ríe porque un mecanismo los obliga, no porque algo los alegre. Lo sabe con una claridad espantosa, porque es el único que quedó afuera del loop.\""),
    pEmpty(80),
    voiceBox("\"SI PREGUNTAN CÓMO SABE ESO — o cómo terminó cuerdo él solo: 'Un hombre vino, hace... ¿cuánto? Perdí la cuenta de los días. Elegante. Educado, de esos que te preguntan las cosas como si de verdad les importara la respuesta. Me preguntó dónde la gente es más feliz por acá. Yo, idiota de mí, le hablé del festival, de las cometas, de lo bien que la pasamos. Tomó notas en un libro azul oscuro, me agradeció como si le hubiese resuelto la vida, y se fue. Al otro día el cielo ya no tenía el mismo color.'\""),
    pEmpty(80),
    voiceBox("\"SI PREGUNTAN POR QUÉ ÉL QUEDÓ AFUERA DEL LOOP: '¿Que por qué yo sigo cuerdo y el resto no? No tengo la menor idea, y créanme que lo pensé bastante. Mi mejor teoría, y subrayo la palabra teoría: toda mi vida dudé de todo. Filosofía, cada libro que leí, cada cosa que me dijeron de chico — la sometí a duda antes de creerla. Sospecho que lo que sea que les pasó a ellos necesita que uno CREA sin pensarlo. Yo no sé creer así. Nunca pude. Así que tal vez por eso quedé afuera — no por suerte, por costumbre. Pero no se los puedo asegurar. Es lo único que tengo, y ni yo mismo confío del todo en eso.'\""),
    pEmpty(80),
    secretBox("POR QUÉ ESTO IMPORTA MECÁNICAMENTE: la teoría de Barnaby (la duda como protección) conecta directo con las Sombras de Duda ya establecidas en la campaña (sección 3.4) — es la misma lógica temática, aplicada a una persona en vez de a un monstruo. También es la semilla de por qué él mismo llega a la idea del ritual con anclas: razonó su propia inmunidad y la aplicó al problema del pueblo. No hace falta que lo diga explícitamente — si un jugador lo conecta solo, dejalo pasar como un buen momento de mesa."),
    pEmpty(80),
    voiceBox("\"SI PREGUNTAN CÓMO SABE ARMAR UN RITUAL: 'Yo no sé de magia, que quede claro. Lo mío son los libros y las costumbres viejas — antes de todo esto, me entretenía anotando las supersticiones de esta zona, la gente se ríe de esas cosas hasta que las necesita. Hay un ritual viejo, de antes de que este pueblo tuviera nombre en los mapas, para cuando algo se suelta y no encuentra dónde asentarse. Nunca pensé que lo iba a usar de verdad. Pero bueno — tampoco pensé perder mi propia locura, así que ya estamos improvisando todos.'\""),
    pEmpty(80),
    voiceBox("\"A MITAD DEL RITUAL (cuando se da cuenta de que hace falta más que un círculo simple): '...Esperen. Esperen. Esto no está bien.' [se detiene a mitad del círculo, más incómodo que asustado] 'Yo hice esto antes, en chico, con mi abuela, para una vaca que no paraba de dar vueltas en el corral. Un círculo simple. Pero esto —' [señala el pueblo entero] '— no es una vaca dando vueltas. Acá no quedó nada de la alegría original, se fue entera. Necesito algo más: objetos que le recuerden a esto que la alegría también termina. Y no cualquier objeto — tiene que ser algo que todavía le importe a alguien, mientras dura el loop. Eso es lo que lo hace real.'\""),
    pEmpty(80),
    voiceBox("\"CÓMO SEÑALA A LOS TRES NPCs (lleva 50 años sentado en esa plaza, los conoce): 'Piensen en cosas que ya terminaron. Sella tiene guardado el hilo de la primera cometa que hizo con la madre — nunca voló, y ella no lo sabe, pero se nota que todavía le pesa. Donto guarda en algún estante la primera copa que sirvió el día que abrió la posada — no la usa, la limpia. Y el campanero, Emmer... esa campana rajada que no para de tocar. Apostaría a que ni él sabe por qué la guarda en vez de fundirla de nuevo. Consíganme algo de esos tres, y probamos otra vez.'\""),
    pEmpty(80),
    noteBox("SI INTENTAN INTIMIDARLO — STATS DE BARNABY","Es un civil, no un combatiente: CA 10 / PG 9 (2d8) / Velocidad 9 m. FUE 9 (-1), DES 11 (+0), CON 12 (+1), INT 15 (+2), SAB 16 (+3), CAR 13 (+1). Percepción pasiva 13 / Común. CD 16 para intimidarlo — alta a propósito: ya perdió su propia locura, no le queda mucho más que temer, así que no se quiebra fácil. Si falla la tirada del grupo: no se pone hostil, se pone más seco e irónico, y no da nada extra. Si la pasan: cede la misma información que daría por las buenas, pero se lo toma a mal — dejá de tratarlos con calidez, y puede comentarle a Sella o Donto que 'estos no vinieron a ayudar, vinieron a amenazar', restándoles buena voluntad inicial con el resto del pueblo.","FFF8E7",C.goldDeep),
    pEmpty(140),

    ...npcBlock(
      "Sella Puntoviento",
      "Artesana de cometas, propietaria del taller",
      "35 a\u00f1os, pelo rizado siempre enredado en hilos de cometa, manos con callos de tanto anudar. Viste delantal con bolsillos llenos de carretes",
      "Normalmente met\u00f3dica y orgullosa de su trabajo. En estado euf\u00f3rico: persigue sus cometas con entusiasmo vac\u00edo, repitiendo 'las cometas deben volar, las cometas deben volar'",
      "Inconsciente de sus motivaciones actuales. En condiciones normales: mantener el negocio familiar que hered\u00f3 de su madre",
      "Si el ritual funciona, Sella recupera la cordura y es la primera en llorar \u2014 por lo que perdi\u00f3 mientras estaba atrapada. Se convierte en aliada: ofrece hospedaje gratuito al grupo en futuros viajes a la zona",
      "\u00a1Las cometas deben volar! [atrapa una, la suelta, la atrapa de nuevo]"
    ),

    ...npcBlock(
      "Donto Barrilete",
      "Posadero de El Viento Cruzado",
      "60 a\u00f1os, enorme, delantal manchado de bebidas de tres d\u00edas. Manos que nunca paran de limpiar vasos vac\u00edos",
      "En estado euf\u00f3rico: sirve bebidas a clientes imaginarios con incre\u00edble detalle y cordialidad. Si el grupo le habla, responde a medias \u2014 mezcla la conversaci\u00f3n con \u00f3rdenes a clientes que no existen",
      "N/A en estado actual. Normal: es un posadero pragm\u00e1tico que cobra exacto y da informaci\u00f3n a cambio de monedas",
      "Si recupera la cordura, su primer reacci\u00f3n es mirar la cocina \u2014 por el instinto del oficio. Luego, al ver el caos del pueblo, se convierte en el coordinador pr\u00e1ctico de la recuperaci\u00f3n. Ofrece al grupo una habitaci\u00f3n permanente en la posada",
      "Bienvenidos al Viento Cruzado. \u00bfLes traigo la especialidad? [gira hacia una mesa vac\u00eda] \u00a1Enseguida, se\u00f1or!"
    ),

    ...npcBlock(
      "Nira Cendal",
      "Anciana del borde del pueblo \u2014 testigo clave",
      "75 a\u00f1os, pelo blanco corto, ojos muy oscuros y alertas. Viste siempre de marr\u00f3n. Tiene una colecci\u00f3n de plantas medicinales en toda la ventana",
      "Pragm\u00e1tica y directa. Desconf\u00eda de extra\u00f1os pero no de manera hostil \u2014 simplemente pide razones concretas antes de ayudar",
      "Sobrevivir y entender qu\u00e9 pas\u00f3. Es la \u00fanica que vio llegar a Mnem\u00f3s al pueblo y hablar con Barnaby",
      "Si el grupo se gana su confianza, comparte lo que vio: un hombre mayor, muy educado, que preguntó a Barnaby sobre 'lugares donde la gente es más feliz'. Tomó notas en un libro azul oscuro. Cuando se fue, el cielo empezó a perder color. También tiene hierbas medicinales que pueden curar 1d6 PG — las entrega si el grupo promete volver con noticias. Casi al pasar, menciona algo más: hace algunas noches vio sombras entrando y saliendo de la casa de cometas abandonada. Se lo guardó para sí misma porque nadie más en el pueblo parecía notar nada raro (ver MS-1E)",
      "No abro la puerta porque soy maleducada. La abro cuando alguien me da una raz\u00f3n que valga la pena"
    ),

    ...npcBlock(
      "Emmer Campanario",
      "Campanero del pueblo, encargado de las campanas del festival",
      "45 años, manos llenas de callos y quemaduras viejas de fundición, delantal de cuero gastado. Pelo atado con un cordón alguna vez festivo, ahora deslucido",
      "En estado eufórico: golpea la misma campana agrietada sin parar, convencido de que el próximo golpe va a sonar bien. No se frustra — simplemente no procesa que no funciona, y vuelve a intentar con la misma alegría exacta cada vez",
      "N/A en estado actual. Normal: artesano orgulloso, trata cada campana como si tuviera una historia propia que merece respeto",
      "Si recupera la cordura, se avergüenza un poco de cuánto tiempo perdió con esa campana en particular — y explica que nunca debió estar entre las campanas de fiesta: la fundió su padre para un funeral, y se coló por error hace años. Agradecido, la repara como corresponde y se la deja lista al grupo para cuando la necesiten otra vez",
      "Esta vez va a sonar. Esta vez sí. [golpe] ...esta vez. [golpe]"
    ),
    pEmpty(140),

    h2("4.5 El Ritual de Enraizamiento"),
    p("Barnaby explica que la Escama Amarilla generó un 'exceso de frecuencia' — demasiada alegría suelta sin ancla. El ritual de enraizamiento requiere crear un contrapeso: algo que recuerde a la alegría que tiene límites, que necesita contraste para existir."),
    pEmpty(80),

    h3("Preparación del ritual (Investigación previa)"),
    cdBox([
      ["Inteligencia (Arcanos) para entender la naturaleza mágica del efecto","13","Barnaby debe explicar más (toma tiempo extra)"],
      ["Religión para reconocer el patrón como magia de dominio emocional","15","Identifican un atajo: el ritual puede acortarse si alguien canaliza energía divina"],
    ]),
    pEmpty(80),

    h3("Paso 0 — Las Tres Anclas"),
    p("A mitad de la preparación, Barnaby se detiene, incómodo: 'Esto es distinto. La Escama no está debilitada, está ausente del todo. Un círculo simple no alcanza.' Necesita tres objetos que representen un final, un límite — algo que le recuerde a la magia que la alegría también termina. El grupo tiene que conseguirlos de tres vecinos, todavía atrapados en sus loops."),
    pEmpty(80),
    numBullet("De Sella: el hilo cortado de la primera cometa que hizo con su madre — nunca voló, lo guarda como recuerdo sin saberlo mientras está atrapada en el loop"),
    numBullet("De Donto: la primera copa que sirvió el día que abrió la posada, guardada en un estante alto de la cocina, fuera del caos de vasos vacíos"),
    numBullet("De Emmer: la campana rajada que golpea sin parar contra su mazo — no está guardada en ningún lado, hay que sacársela mientras sigue en movimiento"),
    pEmpty(80),
    cdBox([
      ["Persuasión o Perspicacia para que Sella suelte el hilo un momento","14","Lo suelta pero lo persigue el resto de la escena — tarda un turno extra en calmarse"],
      ["Investigación para encontrar la copa de Donto entre el caos de vasos","13","Necesitan además Atletismo CD 11 para alcanzar el estante alto"],
    ]),
    pEmpty(80),

    h3("Emmer — Tres Formas de Sacarle la Campana"),
    p("A diferencia de Sella (persuasión) y Donto (investigación), Emmer no está quieto: balancea un mazo pesado contra la campana en swings amplios y constantes, en un taller chico. Acercarse mal significa exponerse al mazo, o arriesgar que la campana —ya rajada— termine de romperse si alguien la agarra en el momento equivocado. Ninguno de los tres caminos es automático."),
    pEmpty(80),
    cdBox([
      ["Timing — Percepción o Perspicacia para leer el patrón de sus swings, luego Destreza (Acrobacias o Juego de Manos) para sacarla en la ventana correcta","13, después 13","1d6 de daño contundente (el mazo de refilón) Y tirada extra para ver si la campana sobrevive intacta"],
      ["Calmarlo primero — Persuasión o Interpretación, igualando su ritmo o cantando en el mismo compás hasta que baja la velocidad solo","14","No baja la velocidad todavía — se puede reintentar sin penalización, es solo más lento"],
      ["Fuerza o magia (sujetarlo, atarlo, dormirlo) — sigue siendo válido y rápido, pero ya no es gratis: reducirlo de golpe a mitad de swing arriesga la campana","Destreza CD 12 para ver si la campana cae limpia o se estrella y se rompe","Si se rompe, aplica la regla general de 'si se destruye un ancla' (sección más abajo)"],
    ]),
    pEmpty(80),

    h3("El ritual — Tres pasos"),
    numBullet("Barnaby coloca las tres anclas en tres puntos alrededor del círculo y empieza a dibujar la sal. El grupo debe proteger el círculo, las anclas Y a Barnaby durante 3 rondas de combate contra 6 Sombras de Duda y una Sombra de Duda Mayor que las lidera — todas atraídas por la energía repentina de las anclas"),
    numBullet("Alguien del grupo debe compartir un recuerdo feliz en voz alta. Si lo hace un jugador real (no el personaje), el ritual funciona con Ventaja. Si prefieren que sea el personaje, funciona normalmente"),
    numBullet("Angelus, como Clérigo de la Muerte, canaliza energía divina para 'ponerle fin' a la euforia excesiva — demostrando que la alegría necesita saber que termina para ser valiosa"),
    pEmpty(80),
    cdBox([
      ["Angelus — Canalización Divina (Turno sin límites)","Automático si tiene usos disponibles","Sin canalización: CD 14 Religión para completar el paso 3"],
      ["Proteger el círculo y las anclas — Tirada de ataque o CA en combate","vs CA 12 (Sombras) / CA 15 (Sombra Mayor)","Si una Sombra pasa un turno entero junto a un ancla sin ser interrumpida, la destruye"],
    ]),
    pEmpty(80),
    noteBox("SI SE DESTRUYE UN ANCLA","El ritual funciona igual — Barnaby improvisa sobre la marcha. Pero el objeto se pierde para siempre, y el NPC dueño no llega a tener su pequeño gesto de cierre en el epílogo (ver sección 4.4). Ninguna consecuencia mecánica dura: es puramente emocional, para que las 3 rondas de combate se sientan con algo en juego además de los PG del grupo.","FFF8E7",C.goldDeep),
    pEmpty(80),

    ...stat("Sombra de Duda Mayor", "CR 3 — variante de élite del enemigo de viaje, sección 3.4", "Una Sombra de Duda que se alimentó de la euforia concentrada de todo el pueblo antes de llegar a la plaza — más grande, casi con rostro, con una voluntad propia que las Sombras normales no tienen. No ataca al azar: dirige activamente a las demás hacia las anclas y protege su propia integridad con la misma frialdad.",
      [["CA / PG / Vel","15 / 92 / 0, vuela 12 m (incorpórea)"],
       ["Atributos","FUE +1, DES +4, CON +3, INT +2, SAB +2, CAR +4"],
       ["Resistencias / Inmunidades","Resistencia a contundente, perforante y cortante de armas no mágicas; inmune a asustado"],
       ["Sentidos / Idiomas","Percepción pasiva 12 / entiende Común, no habla"]],
      [["Multiataque","3 Toques de Duda: +7 al impacto, 1d8+4 psíquico cada uno"],
       ["Oleada de Duda (recarga 5-6)","Estalla en un radio de 3 m: CD 15 Sabiduría o 2d8 psíquico y Desventaja en el próximo ataque; con éxito, la mitad de daño y sin la desventaja"],
       ["Golpe Fantasma (acción adicional fuera de su turno, 1/ronda)","Cuando otra Sombra de Duda es destruida, puede hacer de inmediato un Toque de Duda gratis contra un objetivo a su alcance, como si absorbiera lo que quedaba de ella"],
       ["Dirige el Enjambre (rasgo)","Al inicio de su turno, puede ordenar a hasta 2 Sombras de Duda normales moverse y atacar un ancla, sin que estas gasten su reacción"],
       ["Corta la Concentración (rasgo)","Si impacta a Barnaby o a cualquiera concentrando un efecto, la concentración se pierde automáticamente, sin tirada de salvación"],
       ["Debilidad","El daño radiante ignora su resistencia y le hace el doble. La luz de antorcha reduce su velocidad a 6 m"]]),

    warningBox("No presiones si nadie quiere compartir un recuerdo real. La opción del personaje es igualmente válida. El punto no es conseguir la confesión — es que la pregunta exista en el espacio de juego. Si el jugador de 11 años quiere compartir algo, escúchalo con la misma seriedad que tendrías con cualquier jugador."),
    pEmpty(140),

    h2("4.6 La Pista del Coleccionista"),
    p("Cuando el ritual termina y la Escama Amarilla aparece, Nira (si se ganaron su confianza) comparte su testimonio: el hombre del libro azul oscuro tomó notas durante horas antes de llevarse 'algo que no se veía pero que hacía que el sol pareciera más brillante'. Logos registra esto y traduce la descripción como 'extracción de frecuencia 580 nanómetros. Operación quirúrgica. Este sujeto sabe lo que hace.'"),
    pEmpty(80),
    loreBox("Primera confirmación importante: el Coleccionista no actuó al azar. Estudió cada zona antes de extraer. Tiene un plan y lleva tiempo ejecutándolo. Logos, al registrar esto, hace una pausa inusualmente larga antes de continuar."),
    pEmpty(140),

    h2("4.7 Misiones Secundarias de la Zona"),

    h3("MS-1B: La Olla de Donto"),
    p("La cocina de la posada está a punto de incendiarse (ver sección de lugares). El grupo tiene que elegir cómo actuar: apagarla con agua es rápido, pero moja (y puede arruinar) la 'lista de clientes especiales' guardada en un estante junto al fuego; sofocarla con cuidado (una manta, arena, cortar el fuego de la base) protege el registro, pero exige mantener la calma bajo presión mientras el humo se espesa."),
    pEmpty(80),
    cdBox([
      ["Opción rápida — Atletismo para tirar agua sin quemarse","13","1d4 de daño de fuego en la mano; la lista de clientes queda empapada e ilegible en partes"],
      ["Opción cuidadosa — Destreza para sofocar el fuego sin agua","15","Si fallan: pierden un turno extra y casi se les escapa de las manos — Constitución CD 12 o tosen con Desventaja en la próxima tirada"],
    ]),
    pEmpty(80),
    p("Si el grupo lo previene (de cualquiera de las dos formas), Donto al recuperar la cordura les muestra su lista de clientes especiales (completa, si eligieron la opción cuidadosa) — un registro de viajeros notables. El Coleccionista aparece registrado hace 3 meses como 'El Geógrafo Azul'. Pagó en monedas antiguas que Donto no reconoció — nunca las gastó, precisamente por eso, y si se las piden se las da sin problema: para él no son más que curiosidades sin valor (ver sección 9.1 para qué puede pasar si las llevan a Neverwinter)."),
    pEmpty(80),
    noteBox("GANCHO — EL ENCARGO A NEVERWINTER","Si salvaste la cocina, Donto, agradecido, le pide al grupo un favor sencillo: tiene un primo (Garrick, posadero también) que dirige una posada en Neverwinter y hace meses que no tiene noticias de él, con todo el caos de la Niebla. Le pide que le lleven una carta y un pequeño paquete (provisiones secas, nada de valor) 'para asegurarse de que esté bien'. Es la excusa perfecta de pueblo chico para mandar al grupo a la ciudad grande: ningún misterio, ninguna trampa, solo buena vecindad. Si el grupo acepta, tiene un motivo concreto para entrar a Neverwinter apenas termine esta zona. Al llegar dentro de un margen razonable (1-2 zonas de demora), Garrick está bien y agradece con info útil: dónde comprar suministros, y un comentario casual de que 'el mercado anda raro desde que un tal Dax empezó a vender cosas que no debería tener'.","FFF8E7",C.goldDeep),
    pEmpty(80),
    warningBox("RELOJ NARRATIVO — SI TARDAN MUCHO EN ENTREGAR EL ENCARGO: si el grupo acepta la carta de Donto pero tarda más de 2-3 zonas en llegar a Neverwinter a entregarla, la crisis de la Niebla termina afectando el negocio de Garrick de todos modos — no por algo dramático, sino por simple mala suerte económica acumulada. Cuando finalmente llegan, encuentran la posada cerrada y a Garrick empacando para irse, ya resignado. Sigue vivo y agradecido por la carta tardía, pero ya no es un recurso activo en Neverwinter — perdieron ese contacto. Es una consecuencia suave, pensada para que noten que el mundo no espera, sin que duela tanto como las de Dwin o Korrund."),
    pEmpty(80),
    warningBox("SI LA COCINA SE QUEMA: si el grupo no llega a tiempo (o falla ambas tiradas), el fuego daña una parte real de la cocina. Donto sigue vivo y agradecido de que lo hayan intentado, pero la posada queda cerrada unos días para reparaciones — pierde su lista de clientes (se quema con el resto) y ya no puede ofrecerle al grupo alojamiento gratis en el futuro. El gancho de Neverwinter todavía puede darse (Donto lo pide igual, angustiado por su primo), pero sin la pista del 'Geógrafo Azul'."),
    pEmpty(80),

    h3("MS-1C: El Diario de Nira"),
    p("Nira lleva un diario de todo lo que observó desde su ventana durante los días del caos. Compartirlo no es automático: incluye una entrada incómoda y personal — sobre una noche en que sintió que alguien entraba a robar en la casa de al lado y no hizo nada por miedo (ver MS-1E). Nira no la escribió pensando que alguien más la leería."),
    pEmpty(80),
    cdBox([
      ["Persuasión o Perspicacia para que confíe lo suficiente y preste el diario completo","14","Presta una versión resumida de palabra, sin la entrada incómoda — información parcial"],
    ]),
    pEmpty(80),
    p("El diario completo contiene 8 entradas detalladas del comportamiento de los aldeanos — información suficiente para que Logos elabore una teoría sobre el mecanismo de vaciado. Esta teoría anticipa una mecánica que verán en el Pantano de los Muertos (el siguiente destino sugerido). Si el grupo insiste en leer la entrada incómoda en voz alta frente a ella en vez de respetarla en privado, Nira se cierra: sigue ayudando, pero no vuelve a confiar del todo en el grupo."),
    pEmpty(80),

    h3("MS-1E: Los Saqueadores de la Risa (Combate Opcional)"),
    p("Nira, si se ganó su confianza, menciona que hace algunas noches vio sombras entrando y saliendo de la casa de cometas abandonada, al otro lado del pueblo. Nadie más lo notó: la euforia artificial vuelve a los demás ciegos a cualquier cosa fuera de su loop. Es una banda de saqueadores comunes (sin relación con la Escama) aprovechando el caos para robar a los aldeanos delante de sus narices. Su escondite es un sótano de 3 salas bajo la casa abandonada — encuentro, mapa de salas y botín completos en la sección 11.2 ('Saqueadores de la Risa'). Entre lo robado: varias de las cometas de Sella (MS-1A) y un objeto sentimental de Nira (devolverlo refuerza su confianza, ver MS-1C)."),
    pEmpty(80),
    noteBox("ENCUENTRO OPCIONAL Y AUTOCONTENIDO","Esta es la primera oportunidad de combate 'de verdad' de la campaña sin conexión directa con la Escama — un conflicto mundano en medio de uno mágico. El grupo puede ignorarlo por completo sin perder progreso en la trama principal. Si lo persiguen, encuentran oro real (hasta acá, la zona no daba tesoro material) y refuerzan el cierre feliz de Sella y Nira.","FFF8E7",C.goldDeep),
    pEmpty(140),

    h2("4.8 Recompensas de la Zona"),
    xpBox([
      ["Completar el ritual de enraizamiento (cualquier método)", "Hito", "Sube a nivel 6 (ver sección 1.6)"],
      ["MS-1A: El Festival Roto", "Secundaria (Aftermath, ver sección 4.9)", "Diseños de cometas de la madre de Sella + Cometas de Sella (reduce daño de caída a la mitad, 1/descanso largo)"],
      ["MS-1B: Salvar la cocina de Donto", "Secundaria", "Lista de clientes especiales + pista del 'Geógrafo Azul'"],
      ["MS-1C: Obtener el diario de Nira", "Secundaria", "Adelanto narrativo: Logos predice la mecánica del Pantano"],
      ["MS-1D: La Campana que Nunca Sonó", "Secundaria (Aftermath, ver sección 4.9)", "Campana reparada (recuerdo) + cierre compartido con Nira"],
      ["MS-1E: Derrotar o ahuyentar a los Saqueadores de la Risa", "Secundaria (opcional)", "Botín completo (ver sección 11.2) + refuerza los cierres de Sella y Nira"],
      ["Salvar a los 4 NPCs sin perder ninguno", "Bonus de rol", "Inspiración para cada jugador en la próxima sesión"],
    ]),
    pEmpty(140),

    h2("4.9 Aftermath — El Día Después"),
    p("Pensada para arrancar la sesión siguiente si el ritual se completó al final de la sesión anterior. No es solo una lista de recompensas — es la escena que le da cierre emocional a la zona. Usá las variantes según lo que efectivamente pasó en mesa."),
    pEmpty(80),

    h3("Escena General — El Pueblo Despierta"),
    voiceBox("\"El cambio no es gradual. Es un instante: la euforia se corta como una cuerda tensa que se suelta de golpe. Sella deja de perseguir la cometa a mitad de zancada y se queda mirando el hilo cortado en sus manos, confundida. Donto, con una bandeja vacía en alto, la baja despacio, mirando la cocina como si la viera por primera vez. Los objetos que vibraban se quedan quietos. Alguien, en algún lugar de la plaza, empieza a llorar — no de tristeza, simplemente porque hace días que no siente nada de verdad y el cuerpo no sabe qué hacer con la emoción real. Otros se ríen, aturdidos, de golpes que se dieron días atrás y recién ahora duelen. El pueblo entero tarda varios minutos en volver a moverse con naturalidad.\""),
    pEmpty(140),

    h3("Barnaby — El Efecto Secundario que Nadie Esperaba"),
    p("Volver todo a la normalidad tiene un costo pequeño y agridulce: Barnaby también vuelve a la normalidad — y su normalidad nunca fue la cordura. La lucidez que lo definió durante toda la zona no era su estado natural, era la ausencia forzada de algo (ver 'Cómo Sabe lo que Sabe', sección 4.4). Restaurada la Escama, ya no tiene nada de qué protegerse con la duda, y esa armadura deja de hacer falta."),
    pEmpty(80),
    voiceBox("\"Barnaby parpadea. Se ríe — una risa real, la primera de toda la zona, sorprendida de sí misma. 'Un momento. Un momento. ¿Saben qué? Tenía razón. El cielo ES de queso gouda. ¿Cómo no lo vi antes? ¡Miren esa nube, tiene forma de gouda añejo!' Lo dice con una alegría total, sin ironía, sin la precisión fría de antes. Si alguien le pregunta por lo que dijo hace un rato —el hombre del libro azul, su teoría de la duda— Barnaby ladea la cabeza, genuinamente intentando recordar. 'Dije... ¿eso dije? Sí, suena a algo que diría. Qué inteligente era yo hace un rato. Lástima que ya no me sirve de nada serlo.'\""),
    pEmpty(80),
    secretBox("QUÉ SIGNIFICA ESTO PARA EL DM: Barnaby no se vuelve inútil ni hostil — se vuelve exactamente lo que ya estaba anotado en su npcBlock (sección 4.4): su locura habitual, pero más consciente. Ya no es un narrador confiable en el sentido estricto (mezcla datos reales con delirios felices sin darse cuenta), pero sigue siendo cálido y sigue queriendo al grupo. Si vuelven a Cuerda-Floja más adelante, o lo encuentran después en Neverwinter vendiendo sus 'mapas del queso del cielo', la información útil sigue ahí — solo que codificada dentro de su nueva forma de ver el mundo, y el grupo tiene que aprender a traducirlo. Es un cambio de tono, no una pérdida de utilidad. Y hay algo genuinamente agridulce en esto: por un rato, Barnaby fue necesario, preciso, escuchado. Ahora vuelve a ser 'el loco del pueblo' — feliz de nuevo, pero también un poco más solo."),
    pEmpty(140),

    h3("Sella y MS-1A: El Festival Roto"),
    p("Si el ancla del hilo sobrevivió intacta: llora de verdad por primera vez frente al grupo, sosteniendo el hilo cortado — el duelo por la cometa que nunca voló por fin tiene espacio para existir. Si el ancla se destruyó durante el combate del ritual: el llanto es el mismo, pero queda una pieza sin cerrar — lo menciona una vez, sin reproche, y sigue con su vida. Si el grupo hizo MS-1E y recuperó las cometas robadas, Sella las cuelga esa misma tarde, en silencio, una por una."),
    pEmpty(80),
    p("Con la cabeza clara, Sella quiere ordenar el taller — las cometas que quedaron dispersas por el pueblo durante el caos, las telas enredadas, todo. No hace falta resolver esto persiguiendo cometas una por una: es una tarde de trabajo compartido. Una sola tirada de Percepción o Investigación (la más alta del grupo) determina cuánto tardan y qué tan bien va."),
    pEmpty(80),
    voiceBox("\"Sella se ríe de sí misma, todavía un poco avergonzada. '¿Me ayudan a poner esto en orden? No... no sé ni por dónde empezar. Es raro no estar persiguiendo nada.' Señala el desastre de telas, hilos y varillas repartido por todo el taller. 'Prometo que no hay nada acá que vaya a salir volando solo. Eso creo.'\""),
    pEmpty(80),
    cdBox([
      ["Percepción o Investigación (una sola tirada, la más alta del grupo) para ayudar a ordenar el taller","12","Tardan toda la tarde en vez de un par de horas — sin otra consecuencia"],
    ]),
    pEmpty(80),
    p("Mientras ordenan, aparece un compartimento secreto bajo el mostrador con los diseños originales de cometas de la madre de Sella. Uno está sin terminar — el patrón de nudos que la madre le estaba enseñando el día que murió."),
    pEmpty(80),
    voiceBox("\"Sella se queda mirando el diseño largo rato antes de hablar. 'Nunca aprendí a terminarlo. Ella me estaba enseñando esto mismo el día que... y después ya no hubo más lecciones. Llevo cerrando esta tienda sola todos estos años, y nunca me animé a intentarlo por miedo a arruinarlo. Sé que suena raro pedirle esto a un grupo de aventureros, pero... ¿me ayudan a terminarlo? Necesito más manos de las que tengo.'\""),
    pEmpty(80),

    h3("Terminar el Patrón — Mecánica de Grupo"),
    p("No es un desafío de una sola tirada: el patrón de la madre de Sella tiene pasos distintos, y cada uno se presta mejor a una habilidad distinta. La idea es que participen varios personajes, cada uno aportando lo suyo — incluida su magia o su compañero, si lo tienen. Ningún paso está reservado para un personaje específico; son sugerencias de quién brilla en cada uno, no obligaciones."),
    pEmpty(80),
    cdBox([
      ["Paso 1 — Leer el patrón incompleto y entender qué falta. Arcanos (natural para Hola, por su entrenamiento en Conjuración) o Investigación para cualquiera","13","Sella tiene que explicarlo de nuevo, más despacio — no se pierde nada, solo tiempo"],
      ["Paso 2 — Sostener varios hilos en tensión al mismo tiempo, más puntos de los que dos manos alcanzan. Fuerza o Atletismo — el golem de Hola o la quimera de Greyskull pueden sostener puntos extra sin tirada, liberando manos del grupo","12 (o automático si usan un aliado con múltiples miembros)","Un hilo se tensa mal y hay que reiniciar ese tramo — sin daño, solo repetir"],
      ["Paso 3 — Anudar con precisión la parte final. Destreza (Herramientas o Juego de Manos)","14","El nudo queda flojo — Sella lo nota enseguida y lo rehace ella misma, sin problema"],
      ["Paso 4 — Cerrar el patrón con intención, no solo con técnica. Religión, Interpretación o Perspicacia (el momento natural de Angelus, como Clérigo de la Muerte, para darle a esto el peso de un cierre real)","11","Se completa igual, técnicamente perfecto — pero Sella siente que falta algo, y lo dice en voz alta sin reprochárselo a nadie"],
    ]),
    pEmpty(80),
    p("No hay forma de fallar del todo — el patrón siempre se termina, y Sella siempre tiene su cierre emocional. Lo que varía con la cantidad de tiradas exitosas (de las 4) es qué tan bien sale el trabajo, y eso se refleja en la recompensa:"),
    pEmpty(80),
    infoTable([
      ["Éxitos (de 4)","Cómo sale el patrón","Recompensa"],
      ["0","Sale frágil — Sella no se rinde y lo termina igual, pero se deshace apenas la usan una vez","Sin objeto utilizable. Queda colgada en el taller como pieza decorativa — el cierre emocional de Sella pasa igual, sin cambios"],
      ["1","Sale débil pero entera — aguanta, aunque no como una cometa de verdad","Un amuleto trenzado con los hilos sobrantes (sin efecto mecánico): quien lo lleva tiene Ventaja en la próxima tirada de Carisma con cualquier NPC de Cuerda-Floja"],
      ["2","Más tosco de lo que a Sella le hubiera gustado, pero funcional — agradece igual, sabiendo que no quedó perfecto","Una 'Cometa de Sella' con efecto reducido: reduce el daño de una caída en 1d6, 1 vez por descanso largo"],
      ["3","Casi perfecto — Sella nota un detalle fuera de lugar y lo menciona sin remordimiento, satisfecha igual","Una 'Cometa de Sella' con efecto completo: reduce el daño de una caída a la mitad, 1 vez por descanso largo"],
      ["4","Queda perfecto — Sella llora de alivio, no de tristeza, al verlo terminado","Par completo de 'Cometas de Sella': cada una reduce el daño de una caída a la mitad, 1 vez por descanso largo (para repartir entre dos personajes)"],
    ], 2400, 5200, 5600),
    pEmpty(80),
    p("Un objeto de zona feliz, sin ninguna pretensión de ser una pista sobre el Coleccionista — este es un momento que es solo de Sella."),
    pEmpty(80),

    h3("Donto"),
    p("Si la cocina se salvó sin daño: organiza esa misma noche una cena gratis para el grupo con lo poco que tiene, insiste en que no es opcional. Si se salvó pero la lista de clientes quedó dañada por el agua: agradece igual, pero lamenta en voz alta no poder leerle bien la mitad de los nombres — un pequeño costo narrativo, no mecánico. Si la cocina se quemó: la posada está cerrada por reparaciones; Donto igual sale a saludar al grupo, agradecido pero visiblemente cansado, y pide disculpas por no poder ofrecerles ni un té."),
    pEmpty(80),

    h3("Emmer y MS-1D: La Campana que Nunca Sonó"),
    p("Ya lúcido, Emmer se acerca por primera vez a mirar bien la campana que llevaba días golpeando — no para usarla, solo para verla. Si el grupo está cerca, puede pedirles ayuda: hay un nombre grabado en el borde interior, gastado casi hasta desaparecer. Ni él lo reconoce, y tampoco tiene forma de averiguarlo solo — su familia no es de acá, aprendió el oficio de su padre en otro pueblo antes de instalarse en Cuerda-Floja."),
    pEmpty(80),
    cdBox([
      ["Investigación para leer el nombre gastado en el borde de la campana","13","Se lee a medias — hace falta preguntar en el pueblo para confirmarlo"],
    ]),
    pEmpty(80),
    p("Con el nombre en mano, hay dos caminos para identificar de quién se trata — ninguno obliga a pensar en Nira específicamente, el grupo llega ahí investigando, no por corazonada:"),
    pEmpty(80),
    cdBox([
      ["Preguntarle a Barnaby (50 años en la plaza, conoce la historia chica del pueblo) — Historia o Persuasión","12","Se queda pensando un largo rato: 'Ese nombre... me suena de hace mucho. Puede que se lo pregunten a Nira — ella es la que más tiempo lleva acá'"],
      ["Revisar los registros del templo (los mismos que ya tienen las dos entradas contradictorias) buscando ese nombre específico","14","Encuentran la entrada exacta: 'sobrevivido por su esposa, Nira Cendal' — ya no hace falta adivinar cuál de las dos entradas es la correcta"],
    ]),
    pEmpty(80),
    p("Si el grupo no sigue ninguno de los dos caminos, la misión simplemente no avanza — Emmer se queda con una curiosidad sin resolver, y no hay ninguna consecuencia por dejarlo así. Si la siguen, el nombre, mostrado a Nira, la deja pálida: es su esposo, perdido hace décadas. La campana se fundió para ese funeral, pero nunca llegó a instalarse donde correspondía: se mezcló por error con el stock de campanas de fiesta del padre de Emmer, y terminó sonando en festivales durante años sin que nadie lo supiera."),
    pEmpty(80),
    noteBox("EL DILEMA — DOS PERSONAS, NO UNA","Esto ya no es solo 'cómo decírselo a Emmer' — ahora hay dos personas de por medio. Contárselo a Emmer de golpe puede hacer que él mismo corra a disculparse con Nira sin cuidado, reabriendo una herida que ella no eligió mostrar. Manejarlo con calma puede convertirse en un cierre compartido entre los dos: la campana sonando una sola vez, correctamente, para quien Nira perdió — no como reparación de un error, sino como el funeral que nunca terminó de pasar.","FFF8E7",C.goldDeep),
    pEmpty(80),
    cdBox([
      ["Persuasión o Perspicacia para manejar la revelación con cuidado (con cualquiera de los dos, antes de que hablen entre sí)","13","Uno de los dos se entera primero por su cuenta, sin el contexto completo, y la escena sale más torpe de lo necesario"],
    ]),
    pEmpty(80),
    p("Si el grupo llega al cierre compartido, Angelus (si está en la mesa) tiene un momento natural para oficiar: como Clérigo de la Muerte, puede ser quien haga sonar la campana una última vez, correctamente, cerrando algo que llevaba décadas sin cerrarse. No hace falta ninguna decisión difícil de su parte — solo el gesto, ya ganado por el resto del grupo."),
    pEmpty(80),

    h3("Nira"),
    p("Si confía plenamente en el grupo (diario completo, sin forzar la entrada incómoda): abre la puerta de par en par por primera vez en la zona, los invita a pasar, y les entrega las hierbas medicinales sin condiciones. Si se cerró un poco (leyeron la entrada incómoda frente a ella, o nunca hicieron MS-1E para recuperar su objeto sentimental): sigue agradecida por el ritual, pero habla desde el umbral, no desde adentro — la puerta se queda entreabierta, no de par en par. Si además se resolvió MS-1D con cuidado, esta es la escena donde más se abre de las dos versiones posibles — el cierre de la campana pesa más que cualquier tensión anterior."),
    pEmpty(80),

    h3("Cierre y Gancho"),
    p("Antes de irse del pueblo, Logos hace un resumen breve y personal — el primero de la campaña con este tono: 'Registro cerrado: Cuerda-Floja. Nivel de euforia: normalizado. Nota adicional, fuera de protocolo: el sujeto Barnaby experimentó lo que los humanos llamarían alivio, seguido de inmediato por algo que no tengo clasificado. Sospecho que se acerca a la felicidad. No sé por qué eso me parece relevante registrarlo.' Si hicieron el encargo de Donto a Neverwinter (sección 4.7, MS-1B), ese es el gancho natural hacia la próxima escena — ya tienen un motivo concreto para salir del pueblo con destino a la ciudad."),
    pEmpty(140),

    pageBreak(),
  ];
}
module.exports = { cap4 };