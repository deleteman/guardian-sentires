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
    numBullet("De Emmer: la campana silenciosa retirada, guardada en el altillo de su taller"),
    pEmpty(80),
    cdBox([
      ["Persuasión o Perspicacia para que Sella suelte el hilo un momento","14","Lo suelta pero lo persigue el resto de la escena — tarda un turno extra en calmarse"],
      ["Investigación para encontrar la copa de Donto entre el caos de vasos","13","Necesitan además Atletismo CD 11 para alcanzar el estante alto"],
      ["Atletismo para subir la escalera de mano de Emmer sin que ceda","11","Caen 1.5 m: 1d4 de daño"],
      ["Percepción para identificar la campana correcta entre varias campanas viejas","13","Bajan la equivocada — Emmer los corrige con una pista y deben volver a intentarlo"],
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

    h3("MS-1A: El Festival Roto"),
    p("Las cometas de Sella están volando libres por el pueblo y causando accidentes menores. Si el grupo las recoge todas (12 cometas, algunas en lugares difíciles), Sella — cuando recupere la cordura — les da acceso al compartimento secreto de su taller donde guarda los diseños originales de cometas de su madre. Uno de los diseños tiene anotaciones en un idioma que Logos no reconoce inmediatamente — tarda hasta la próxima sesión en traducirlas. La traducción menciona 'el archivista que preguntó por los vientos más alegres'."),
    pEmpty(80),
    cdBox([
      ["Acrobacias para atrapar la cometa en el tejado de la posada","14","Caída de 3m: 1d6 de daño"],
      ["Percepción para encontrar la cometa escondida en la copa del árbol central","13","Se necesita trepar: Atletismo CD 11"],
      ["Percepción para notar que faltan más cometas de las que deberían — alguien se las llevó a propósito","14","No conectan los puntos todavía: la pista de los saqueadores queda para más tarde (ver MS-1E)"],
    ]),
    pEmpty(80),
    warningBox("SI FALLAN FEO: si el grupo abandona la búsqueda a mitad de camino o falla varias tiradas seguidas, una de las cometas termina destrozada contra las rocas del río antes de que puedan llegar. Sella igual recupera la cordura y agradece el esfuerzo, pero esa cometa en particular — la última que voló con su madre — no vuelve a existir. Sella lo nota, y ese pequeño duelo extra queda sin cerrar del todo."),
    pEmpty(80),

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

    h3("MS-1D: La Campana que Nunca Sonó"),
    p("Independiente de si se usó como ancla del ritual, Emmer menciona — a quien lo escuche con paciencia — que esa campana rajada en particular nunca debió estar en su taller de festival. Los registros del templo, sin embargo, son confusos: hay dos entradas contradictorias sobre a qué familia perteneció la campana, con veinte años de diferencia entre ellas. Confirmar cuál es la correcta requiere cruzar la información con alguien más del pueblo."),
    pEmpty(80),
    cdBox([
      ["Historia o Investigación para encontrar los registros del templo","13","Encuentran las dos entradas contradictorias, sin saber cuál es real"],
      ["Persuasión con Barnaby o Nira para que confirmen cuál de las dos familias tuvo un funeral esos años","12","Ninguno de los dos recuerda con certeza — el grupo debe elegir a cuál versión creerle"],
    ]),
    pEmpty(80),
    p("Una vez que creen tener la respuesta correcta, queda la parte difícil: cómo decírselo a Emmer. Decírselo con delicadeza (dándole tiempo, dejando que él saque sus propias conclusiones) hace que lo tome con calma y agradecimiento. Decírselo de golpe, aunque sea con buenas intenciones, lo hiere — se avergüenza profundamente de haber usado por años una campana de duelo para alegrar festivales."),
    pEmpty(80),
    cdBox([
      ["Persuasión para dar la noticia con tacto","13","Emmer la toma mal: agradece la verdad pero no repara la campana ni queda como contacto — solo pide que lo dejen solo"],
    ]),
    pEmpty(80),

    h3("MS-1E: Los Saqueadores de la Risa (Combate Opcional)"),
    p("Nira, si se ganó su confianza, menciona que hace algunas noches vio sombras entrando y saliendo de la casa de cometas abandonada, al otro lado del pueblo. Nadie más lo notó: la euforia artificial vuelve a los demás ciegos a cualquier cosa fuera de su loop. Es una banda de saqueadores comunes (sin relación con la Escama) aprovechando el caos para robar a los aldeanos delante de sus narices. Su escondite es un sótano de 3 salas bajo la casa abandonada — encuentro, mapa de salas y botín completos en la sección 11.2 ('Saqueadores de la Risa'). Entre lo robado: varias de las cometas de Sella (MS-1A) y un objeto sentimental de Nira (devolverlo refuerza su confianza, ver MS-1C)."),
    pEmpty(80),
    noteBox("ENCUENTRO OPCIONAL Y AUTOCONTENIDO","Esta es la primera oportunidad de combate 'de verdad' de la campaña sin conexión directa con la Escama — un conflicto mundano en medio de uno mágico. El grupo puede ignorarlo por completo sin perder progreso en la trama principal. Si lo persiguen, encuentran oro real (hasta acá, la zona no daba tesoro material) y refuerzan el cierre feliz de Sella y Nira.","FFF8E7",C.goldDeep),
    pEmpty(140),

    h2("4.8 Recompensas de la Zona"),
    xpBox([
      ["Completar el ritual de enraizamiento (cualquier método)", "Hito", "Sube a nivel 6 (ver sección 1.6)"],
      ["MS-1A: Recuperar las 12 cometas de Sella", "Secundaria", "Diseños de cometas + traducción de pista (Coleccionista)"],
      ["MS-1B: Salvar la cocina de Donto", "Secundaria", "Lista de clientes especiales + pista del 'Geógrafo Azul'"],
      ["MS-1C: Obtener el diario de Nira", "Secundaria", "Adelanto narrativo: Logos predice la mecánica del Pantano"],
      ["MS-1D: Ayudar a Emmer con la campana", "Secundaria", "Campana reparada (recuerdo) + contacto de confianza para futuras zonas"],
      ["MS-1E: Derrotar o ahuyentar a los Saqueadores de la Risa", "Secundaria (opcional)", "Botín completo (ver sección 11.2) + refuerza los cierres de Sella y Nira"],
      ["Salvar a los 4 NPCs sin perder ninguno", "Bonus de rol", "Inspiración para cada jugador en la próxima sesión"],
    ]),
    pageBreak(),
  ];
}
module.exports = { cap4 };