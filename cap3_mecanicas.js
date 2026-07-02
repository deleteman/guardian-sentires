const { p, pEmpty, h1, h2, h3, bullet, numBullet, infoTable, noteBox, secretBox, loreBox, voiceBox, warningBox, cdBox, pageBreak, C } = require('./helpers');

function cap3() {
  return [
    h1("3. Mec\u00e1nicas de Viaje \u2014 El Sextante de Cromaticidad"),

    p("Logos despliega un mapa hologr\u00e1fico de la Costa de la Espada. El mapa es completamente gris y est\u00e1tico, con cinco puntos de interferencia que parpadean con distintas frecuencias. Para viajar hacia cada escama, el grupo realiza tres tiradas de Navegaci\u00f3n."),
    pEmpty(100),

    voiceBox("\"La unidad Logos despliega un holograma desde su lente central. Un mapa de la Costa de la Espada aparece suspendido en el aire \u2014 pero todo es gris, como si el color hubiera sido drenado del propio mapa. Cinco puntos parpadean con se\u00f1ales d\u00e9biles. 'Cinco anomal\u00edas detectadas. Clasificaci\u00f3n: Agujeros de Realidad. Causa: extracci\u00f3n de datos emocionales primarios. Recomendaci\u00f3n: recuperaci\u00f3n de escamas en orden de menor a mayor inestabilidad. Procedan, unidades biol\u00f3gicas.'\""),
    pEmpty(140),

    h2("3.1 Las Tres Tiradas de Navegaci\u00f3n"),
    p("Cada vez que el grupo viaje hacia una nueva zona, realiza estas tiradas en orden. Los fallos no bloquean el progreso \u2014 lo complican."),
    pEmpty(100),

    h3("Paso 1 \u2014 El Escaneo de Frecuencia (Angelus)"),
    p("Angelus calibra el Sextante. Como Cl\u00e9rigo, su conexi\u00f3n con la vida y la muerte le permite 'diagnosticar' el mundo."),
    cdBox([
      ["Sabidur\u00eda (Supervivencia)", "12", "Encuentro con Sombras de Duda en el camino"],
      ["Sabidur\u00eda (Medicina) \u2014 alternativa", "12", "Llegan desorientados: -1 a Percepci\u00f3n al llegar"],
    ]),
    pEmpty(100),
    noteBox("\u00c9XITO", "Logos: 'Frecuencia detectada. El rastro es n\u00edtido.' \u2014 Viaje tranquilo.", "E8F8F8", C.tealDark),
    pEmpty(100),

    h3("Paso 2 \u2014 La Estabilizaci\u00f3n de Magia (Hola)"),
    p("Hola usa conjuraci\u00f3n para crear un t\u00fanel de realidad estable a trav\u00e9s de la niebla."),
    cdBox([
      ["Inteligencia (Arcanos)", "12", "Cansancio Gris: -1 a iniciativa en el pr\u00f3ximo combate"],
    ]),
    pEmpty(100),
    noteBox("\u00c9XITO","Logos: 'Optimizaci\u00f3n de ruta completada. Tiempo de llegada reducido en 23%.'","E8F8F8",C.tealDark),
    pEmpty(100),

    h3("Paso 3 \u2014 La Defensa del Vector (Greyskull + DM)"),
    p("Mientras los otros operan el Sextante, Greyskull y el P\u00edcaro mantienen el rumbo f\u00edsico y defienden el grupo de obst\u00e1culos que Logos no puede detectar."),
    cdBox([
      ["Atletismo o Acrobacias (obst\u00e1culo f\u00edsico)", "13", "1d4 da\u00f1o contundente al grupo por colisi\u00f3n"],
      ["Tirada de ataque (cuervos grises)", "vs CA 12", "Los cuervos roban un objeto peque\u00f1o del inventario"],
      ["Percepci\u00f3n (trampa de niebla)", "14", "El grupo se desv\u00eda: tirada extra de encuentro"],
    ]),
    pEmpty(140),

    h2("3.2 Tabla de Resultados"),
    infoTable([
      ["\u00c9xitos totales","Resultado"],
      ["3 de 3 \u2014 Vuelo Perfecto","Llegan descansados. El primer ataque de cada jugador en la zona tiene +2"],
      ["2 de 3 \u2014 Ruta Est\u00e1ndar","Llegan sin contratiempos. Clima opresivo pero sin penalizadores"],
      ["1 de 3 \u2014 Desv\u00edo por la Niebla","Encuentro de combate contra Sombras de Duda (CR 1/2 cada una, 2 por jugador) antes de llegar"],
      ["0 de 3 \u2014 P\u00e9rdida de Se\u00f1al","Llegan agotados (-1 nivel de Agotamiento). El Coleccionista les roba un objeto menor durante el sue\u00f1o"],
    ]),
    pEmpty(140),

    h2("3.3 Regla de Sincron\u00eda"),
    noteBox("\u26a1 REGLA ESPECIAL \u2014 CONEXI\u00d3N",
      "Si Angelus y Hola se ayudan mutuamente durante la navegaci\u00f3n \u2014 uno describe c\u00f3mo le pasa algo al otro, c\u00f3mo combinan sus acciones \u2014 AMBOS lanzan con Ventaja. Esta regla existe para que la cooperaci\u00f3n tenga recompensa mec\u00e1nica real. La mec\u00e1nica de que Angelus necesite poner su mano sobre la de otro para estabilizar la se\u00f1al refuerza esto f\u00edsicamente.",
      "FFF8E7", C.goldDeep),
    pEmpty(140),

    h2("3.4 Las Sombras de Duda \u2014 Enemigo de Viaje"),
    p("Criaturas formadas por la niebla gris. No tienen forma fija \u2014 parecen siluetas borrosas de algo familiar para quien las mira. Cada jugador ve algo distinto."),
    pEmpty(80),
    infoTable([
      ["Estad\u00edstica","Valor"],
      ["CR","1/2"],
      ["PG","13 (3d6+3)"],
      ["CA","12"],
      ["Velocidad","30 ft, vuelo 30 ft"],
      ["Ataque","Toque de Duda: +4 para impactar, 1d6+2 ps\u00edquico"],
      ["Debilidad","Da\u00f1o radiante doble. La luz de antorcha las ralentiza (velocidad reducida a 15 ft)"],
      ["Habilidad especial","Si impactan, el objetivo tiene Desventaja en su pr\u00f3xima tirada de salvaci\u00f3n de Sabidur\u00eda"],
      ["Nota narrativa","Logos las llama 'interferencia de datos emocionales negativos'. No sabe qu\u00e9 son realmente"],
    ]),
    pEmpty(140),

    h3("La Sombra que Pregunta — Variante Única"),
    p("Una vez en la campaña — solo una, idealmente en el viaje hacia la zona 3 (Hotenow) o la 4 (Bosque), cuando el grupo ya lleva dos escamas y se siente seguro en el procedimiento — una Sombra se comporta diferente. En lugar de atacar, se detiene frente a un personaje y habla."),
    pEmpty(80),
    voiceBox("\"La sombra no tiene forma de nada reconocible. Está quieta. Y luego habla — no con una voz de fuera, sino con algo que suena como el interior de tu cabeza: '¿Estás seguro de que restaurar esto es lo correcto? Cada vez que ayudáis a alguien a soltar su dolor, ese dolor vuelve al mundo. La Vieja Raíz soltó su duelo. ¿Adónde fue ese duelo? ¿Quién lo carga ahora? ¿Y si el anciano del libro tenía razón?'\""),
    pEmpty(80),
    p("El grupo puede atacarla — desaparece igual que las demás, sin resistencia adicional. Pueden ignorarla. Pueden responderle. No hay tirada. No hay consecuencia mecánica. Pero la pregunta queda en el aire, y es la pregunta correcta un par de sesiones antes del clímax."),
    pEmpty(80),
    secretBox("CONEXIÓN CON EL ACTO III: si el grupo llega al Archivo y confronta a Mnemós, él puede mencionar esto directamente — 'Las sombras son el único artefacto honesto que dejé en el mundo. No las hice para atacar. Las hice para preguntar. El problema es que a veces atacan de todos modos.' Esto revela retroactivamente que las Sombras de Duda no son accidentales: son el argumento de Mnemós hecho criatura. No son un enemigo de viaje — son una idea que aprendió a moverse. Si el grupo prestó atención a la Sombra que pregunta, llegan al Archivo con esa pregunta sin responder — y Mnemós la responde en el peor momento posible."),
    pageBreak(),
  ];
}
module.exports = { cap3 };