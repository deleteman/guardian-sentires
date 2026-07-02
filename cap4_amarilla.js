const { p, pEmpty, h1, h2, h3, bullet, numBullet, infoTable, noteBox, secretBox, loreBox, voiceBox, warningBox, cdBox, xpBox, scaleBox, pageBreak, npcBlock, C } = require('./helpers');

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
    voiceBox("\"El pueblo de Cuerda-Floja deber\u00eda ser la clase de lugar donde los ni\u00f1os corren y los vendedores gritan los precios de sus mercanc\u00edas. Y de hecho, eso es exactamente lo que ven. Gente corriendo \u2014 pero tropezando entre s\u00ed sin re\u00edrse del golpe. Vendedores gritando \u2014 pero los mismos precios una y otra vez, sin variaci\u00f3n. Una mujer baila sola en la plaza. Un hombre construye una torre de sombreros frente a una zapater\u00eda cerrada. Todos tienen los ojos abiertos. Ninguno parece ver nada.\""),
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

    h2("4.4 NPCs de la Zona"),

    ...npcBlock(
      "Barnaby el 'Cuerdo'",
      "Gu\u00eda principal y fuente de informaci\u00f3n",
      "50 a\u00f1os. Barba desordenada. Ropa impecable (hoy). Calcetines en los bolsillos, no en las orejas \u2014 se los sac\u00f3 cuando se volvi\u00f3 l\u00facido porque 'ya no tiene sentido'",
      "Ir\u00f3nico y ligeramente melanc\u00f3lico de estar cuerdo. Habla con precisi\u00f3n inusual. Extra\u00f1a su propia locura y lo dice abiertamente",
      "Restaurar la Escama Amarilla para volver a ser \u00e9l mismo. Considera que la locura alegre es m\u00e1s honesta que la cordura",
      "Durante la sesi\u00f3n act\u00faa como gu\u00eda. Si el ritual funciona, recupera su locura habitual pero m\u00e1s consciente. Reaparece en Neverwinter en sesiones posteriores vendiendo 'mapas del queso del cielo' que en realidad tienen informaci\u00f3n \u00fatil codificada",
      "El cielo sigue siendo de queso gouda. Ahora que soy cuerdo, ya nadie me cree \u2014 pero tampoco puedo demostrarlo, lo cual es mucho peor"
    ),

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
      "Si el grupo se gana su confianza, comparte lo que vio: un hombre mayor, muy educado, que pregunt\u00f3 a Barnaby sobre 'lugares donde la gente es m\u00e1s feliz'. Tom\u00f3 notas en un libro azul oscuro. Cuando se fue, el cielo empez\u00f3 a perder color. Tambi\u00e9n tiene hierbas medicinales que pueden curar 1d6 PG \u2014 las entrega si el grupo promete volver con noticias",
      "No abro la puerta porque soy maleducada. La abro cuando alguien me da una raz\u00f3n que valga la pena"
    ),
    pEmpty(140),

    h2("4.5 El Ritual de Enraizamiento"),
    p("Barnaby explica que la Escama Amarilla gener\u00f3 un 'exceso de frecuencia' \u2014 demasiada alegr\u00eda suelta sin ancla. El ritual de enraizamiento requiere crear un contrapeso: algo que recuerde a la alegr\u00eda que tiene l\u00edmites, que necesita contraste para existir."),
    pEmpty(80),

    h3("Preparaci\u00f3n del ritual (Investigaci\u00f3n previa)"),
    cdBox([
      ["Inteligencia (Arcanos) para entender la naturaleza m\u00e1gica del efecto","13","Barnaby debe explicar m\u00e1s (toma tiempo extra)"],
      ["Religi\u00f3n para reconocer el patr\u00f3n como magia de dominio emocional","15","Identifican un atajo: el ritual puede acortarse si alguien canaliza energ\u00eda divina"],
    ]),
    pEmpty(80),

    h3("El ritual \u2014 Tres pasos"),
    numBullet("Barnaby dibuja un c\u00edrculo de sal en la plaza. El grupo debe protegerlo mientras \u00e9l trabaja (2 rondas de combate contra 4 Sombras de Duda que intentan interrumpir)"),
    numBullet("Alguien del grupo debe compartir un recuerdo feliz en voz alta. Si lo hace un jugador real (no el personaje), el ritual funciona con Ventaja. Si prefieren que sea el personaje, funciona normalmente"),
    numBullet("Angelus, como Cl\u00e9rigo de la Muerte, canaliza energ\u00eda divina para 'ponerle fin' a la euforia excesiva \u2014 demostrando que la alegr\u00eda necesita saber que termina para ser valiosa"),
    pEmpty(80),
    cdBox([
      ["Angelus \u2014 Canalizaci\u00f3n Divina (Turno sin l\u00edmites)","Autom\u00e1tico si tiene usos disponibles","Sin canalizaci\u00f3n: CD 14 Religi\u00f3n para completar el paso 3"],
      ["Proteger el c\u00edrculo \u2014 Tirada de ataque o CA en combate","vs CA 12 (Sombras)","Si el c\u00edrculo se rompe: reiniciar desde paso 1"],
    ]),
    pEmpty(80),
    warningBox("No presiones si nadie quiere compartir un recuerdo real. La opci\u00f3n del personaje es igualmente v\u00e1lida. El punto no es conseguir la confesi\u00f3n \u2014 es que la pregunta exista en el espacio de juego. Si el jugador de 11 a\u00f1os quiere compartir algo, esc\u00fachalo con la misma seriedad que tendr\u00edas con cualquier jugador."),
    pEmpty(140),

    h2("4.6 La Pista del Coleccionista"),
    p("Cuando el ritual termina y la Escama Amarilla aparece, Nira (si se ganaron su confianza) comparte su testimonio: el hombre del libro azul oscuro tomó notas durante horas antes de llevarse 'algo que no se veía pero que hacía que el sol pareciera más brillante'. Logos registra esto y traduce la descripción como 'extracción de frecuencia 580 nanómetros. Operación quirúrgica. Este sujeto sabe lo que hace.'"),
    pEmpty(80),
    loreBox("Primera confirmación importante: el Coleccionista no actuó al azar. Estudió cada zona antes de extraer. Tiene un plan y lleva tiempo ejecutándolo. Logos, al registrar esto, hace una pausa inusualmente larga antes de continuar."),
    pEmpty(140),

    h2("4.7 Misiones Secundarias de la Zona"),

    h3("MS-1A: El Festival Roto"),
    p("Las cometas de Sella están volando libres por el pueblo y causando accidentes menores. Si el grupo las recoge todas (12 cometas, algunas en lugares difíciles), Sella — cuando recupere la cordura — les da acceso al compartimento secreto de su taller donde guarda los diseños originales de cometas de su madre. Uno de los diseños tiene anotaciones en un idioma que Logos no reconoce inmediatamente — tarda hasta la próxima sesión en traducirlas. La traducción menciona 'el archivista que preguntó por los vientos más alegres'."),
    pEmpty(80),
    cdBox([
      ["Acrobacias para atrapar la cometa en el tejado de la posada","14","Caída de 3m: 1d6 de daño"],
      ["Percepción para encontrar la cometa escondida en la copa del árbol central","13","Se necesita trepar: Atletismo CD 11"],
    ]),
    pEmpty(80),

    h3("MS-1B: La Olla de Donto"),
    p("La cocina de la posada está a punto de incendiarse (ver sección de lugares). Si el grupo lo previene, Donto al recuperar la cordura les muestra su 'lista de clientes especiales' — un registro de viajeros notables. El Coleccionista aparece registrado hace 3 meses como 'El Geógrafo Azul'. Pagó en monedas antiguas que Donto no reconoció."),
    pEmpty(80),
    noteBox("GANCHO — EL ENCARGO A NEVERWINTER","Si salvaste la cocina, Donto, agradecido, le pide al grupo un favor sencillo: tiene un primo (Garrick, posadero también) que dirige una posada en Neverwinter y hace meses que no tiene noticias de él, con todo el caos de la Niebla. Le pide que le lleven una carta y un pequeño paquete (provisiones secas, nada de valor) 'para asegurarse de que esté bien'. Es la excusa perfecta de pueblo chico para mandar al grupo a la ciudad grande: ningún misterio, ninguna trampa, solo buena vecindad. Si el grupo acepta, tiene un motivo concreto para entrar a Neverwinter apenas termine esta zona. Al llegar dentro de un margen razonable (1-2 zonas de demora), Garrick está bien y agradece con info útil: dónde comprar suministros, y un comentario casual de que 'el mercado anda raro desde que un tal Dax empezó a vender cosas que no debería tener'.","FFF8E7",C.goldDeep),
    pEmpty(80),
    warningBox("RELOJ NARRATIVO — SI TARDAN MUCHO EN ENTREGAR EL ENCARGO: si el grupo acepta la carta de Donto pero tarda más de 2-3 zonas en llegar a Neverwinter a entregarla, la crisis de la Niebla termina afectando el negocio de Garrick de todos modos — no por algo dramático, sino por simple mala suerte económica acumulada. Cuando finalmente llegan, encuentran la posada cerrada y a Garrick empacando para irse, ya resignado. Sigue vivo y agradecido por la carta tardía, pero ya no es un recurso activo en Neverwinter — perdieron ese contacto. Es una consecuencia suave, pensada para que noten que el mundo no espera, sin que duela tanto como las de Dwin o Korrund."),
    pEmpty(80),

    h3("MS-1C: El Diario de Nira"),
    p("Nira lleva un diario de todo lo que observó desde su ventana durante los días del caos. Si el grupo se lo pide y se gana su confianza, se los presta. El diario contiene 8 entradas detalladas del comportamiento de los aldeanos — información suficiente para que Logos elabore una teoría sobre el mecanismo de vaciado. Esta teoría anticipa una mecánica que verán en el Pantano de los Muertos (el siguiente destino sugerido)."),
    pEmpty(140),

    h2("4.8 Recompensas de la Zona"),
    xpBox([
      ["Completar el ritual de enraizamiento (cualquier método)", "Hito", "Sube a nivel 6 (ver sección 1.6)"],
      ["MS-1A: Recuperar las 12 cometas de Sella", "Secundaria", "Diseños de cometas + traducción de pista (Coleccionista)"],
      ["MS-1B: Salvar la cocina de Donto", "Secundaria", "Lista de clientes especiales + pista del 'Geógrafo Azul'"],
      ["MS-1C: Obtener el diario de Nira", "Secundaria", "Adelanto narrativo: Logos predice la mecánica del Pantano"],
      ["Salvar a los 3 NPCs sin perder ninguno", "Bonus de rol", "Inspiración para cada jugador en la próxima sesión"],
    ]),
    pageBreak(),
  ];
}
module.exports = { cap4 };