const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  HeadingLevel, AlignmentType, BorderStyle, WidthType, ShadingType,
  LevelFormat, TableOfContents, VerticalAlign
} = require('docx');

const C = {
  purpleDeep : "2D1B69",
  purpleMid  : "5B3FA6",
  purpleLight: "9B72CF",
  goldDeep   : "8B6914",
  grayDark   : "2C2C2C",
  grayMid    : "555555",
  white      : "FFFFFF",
  redDark    : "8B1A1A",
  blueDark   : "1A3A6B",
  greenDark  : "1A5C2A",
  yellowDark : "8B6914",
  blackDark  : "1A1A1A",
  tealDark   : "0D5C63",
};

const border = (color = C.purpleLight, size = 1) => ({ style: BorderStyle.SINGLE, size, color });
const cellBorders = (color) => ({ top: border(color), bottom: border(color), left: border(color), right: border(color) });
const noBorder = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const noAllBorders = { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder };

const p = (text, opts = {}) => new Paragraph({
  children: [new TextRun({ text, font: "Arial", size: opts.size || 22, bold: opts.bold||false, italics: opts.italic||false, color: opts.color||C.grayDark })],
  alignment: opts.align || AlignmentType.LEFT,
  spacing: { before: opts.spaceBefore||80, after: opts.spaceAfter||80 },
  indent: opts.indent ? { left: opts.indent } : undefined,
});

const pEmpty = (space = 120) => new Paragraph({ children: [new TextRun("")], spacing: { before: 0, after: space } });

const h1 = (text) => new Paragraph({
  heading: HeadingLevel.HEADING_1,
  children: [new TextRun({ text, font: "Arial", size: 40, bold: true, color: C.purpleDeep })],
  spacing: { before: 400, after: 200 },
  border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: C.goldDeep, space: 4 } },
});

const h2 = (text, color = C.purpleMid) => new Paragraph({
  heading: HeadingLevel.HEADING_2,
  children: [new TextRun({ text, font: "Arial", size: 30, bold: true, color })],
  spacing: { before: 280, after: 140 },
});

const h3 = (text, color = C.purpleLight) => new Paragraph({
  heading: HeadingLevel.HEADING_3,
  children: [new TextRun({ text, font: "Arial", size: 24, bold: true, color })],
  spacing: { before: 200, after: 100 },
});

const bullet = (text, bold=false, color=C.grayDark, level=0) => new Paragraph({
  numbering: { reference: "bullets", level },
  children: [new TextRun({ text, font: "Arial", size: 22, bold, color })],
  spacing: { before: 60, after: 60 },
});

const numBullet = (text, bold=false) => new Paragraph({
  numbering: { reference: "numbers", level: 0 },
  children: [new TextRun({ text, font: "Arial", size: 22, bold })],
  spacing: { before: 60, after: 60 },
});

const infoTable = (rows, ...colWidths) => {
  const numCols = rows[0].length;
  const TOTAL_WIDTH = 9360;
  let widths;
  if (colWidths.length >= numCols) {
    // Ya nos pasaron un ancho por columna (o de mas) - usamos los primeros numCols
    widths = colWidths.slice(0, numCols);
  } else if (colWidths.length === 0) {
    // Sin anchos especificados: primera columna angosta, el resto reparte el resto
    const first = 2400;
    const rest = numCols > 1 ? Math.floor((TOTAL_WIDTH - first) / (numCols - 1)) : TOTAL_WIDTH;
    widths = [first, ...Array(numCols - 1).fill(rest)];
  } else {
    // Nos dieron algunos anchos pero no todos: usamos los dados y repartimos el resto entre las columnas faltantes
    const given = colWidths.reduce((a, b) => a + b, 0);
    const missing = numCols - colWidths.length;
    const rest = Math.max(Math.floor((TOTAL_WIDTH - given) / missing), 800);
    widths = [...colWidths, ...Array(missing).fill(rest)];
  }
  return new Table({
  width: { size: 9360, type: WidthType.DXA },
  columnWidths: widths,
  rows: rows.map((row, i) => new TableRow({
    children: row.map((cell, j) => new TableCell({
      borders: cellBorders(C.purpleLight),
      width: { size: widths[j], type: WidthType.DXA },
      shading: i===0 ? { fill: C.purpleDeep, type: ShadingType.CLEAR } : j===0 ? { fill: "F0EBF8", type: ShadingType.CLEAR } : { fill: C.white, type: ShadingType.CLEAR },
      margins: { top: 80, bottom: 80, left: 150, right: 150 },
      verticalAlign: VerticalAlign.CENTER,
      children: [new Paragraph({ children: [new TextRun({ text: cell, font: "Arial", size: 22, bold: i===0||j===0, color: i===0 ? C.white : C.grayDark })], spacing: { before: 40, after: 40 } })],
    })),
  })),
});
};

const noteBox = (label, text, bgColor="F0EBF8", borderColor=C.purpleMid) => new Table({
  width: { size: 9360, type: WidthType.DXA },
  columnWidths: [9360],
  rows: [new TableRow({ children: [new TableCell({
    borders: { top: border(borderColor,6), bottom: border(borderColor,6), left: border(borderColor,18), right: border(borderColor,6) },
    width: { size: 9360, type: WidthType.DXA },
    shading: { fill: bgColor, type: ShadingType.CLEAR },
    margins: { top: 100, bottom: 100, left: 200, right: 200 },
    children: [
      new Paragraph({ children: [new TextRun({ text: label, font: "Arial", size: 20, bold: true, color: borderColor })], spacing: { before: 0, after: 60 } }),
      new Paragraph({ children: [new TextRun({ text, font: "Arial", size: 20, italics: true, color: C.grayDark })], spacing: { before: 0, after: 0 } }),
    ],
  })]})],
});

const cdBox = (checks) => new Table({
  width: { size: 9360, type: WidthType.DXA },
  columnWidths: [4680, 2340, 2340],
  rows: [
    new TableRow({ children: [
      new TableCell({ borders: cellBorders(C.tealDark), width:{size:4680,type:WidthType.DXA}, shading:{fill:C.tealDark,type:ShadingType.CLEAR}, margins:{top:70,bottom:70,left:150,right:150},
        children:[new Paragraph({children:[new TextRun({text:"Tirada / Desaf\u00edo",font:"Arial",size:20,bold:true,color:C.white})],spacing:{before:30,after:30}})] }),
      new TableCell({ borders: cellBorders(C.tealDark), width:{size:2340,type:WidthType.DXA}, shading:{fill:C.tealDark,type:ShadingType.CLEAR}, margins:{top:70,bottom:70,left:150,right:150},
        children:[new Paragraph({children:[new TextRun({text:"CD",font:"Arial",size:20,bold:true,color:C.white})],spacing:{before:30,after:30}})] }),
      new TableCell({ borders: cellBorders(C.tealDark), width:{size:2340,type:WidthType.DXA}, shading:{fill:C.tealDark,type:ShadingType.CLEAR}, margins:{top:70,bottom:70,left:150,right:150},
        children:[new Paragraph({children:[new TextRun({text:"Consecuencia si falla",font:"Arial",size:20,bold:true,color:C.white})],spacing:{before:30,after:30}})] }),
    ]}),
    ...checks.map(([tirada, cd, fallo]) => new TableRow({ children: [
      new TableCell({ borders: cellBorders(C.tealDark), width:{size:4680,type:WidthType.DXA}, shading:{fill:"E8F8F8",type:ShadingType.CLEAR}, margins:{top:70,bottom:70,left:150,right:150},
        children:[new Paragraph({children:[new TextRun({text:tirada,font:"Arial",size:20,color:C.grayDark})],spacing:{before:30,after:30}})] }),
      new TableCell({ borders: cellBorders(C.tealDark), width:{size:2340,type:WidthType.DXA}, shading:{fill:"E8F8F8",type:ShadingType.CLEAR}, margins:{top:70,bottom:70,left:150,right:150},
        children:[new Paragraph({children:[new TextRun({text:cd,font:"Arial",size:20,bold:true,color:C.tealDark})],spacing:{before:30,after:30},alignment:AlignmentType.CENTER})] }),
      new TableCell({ borders: cellBorders(C.tealDark), width:{size:2340,type:WidthType.DXA}, shading:{fill:"E8F8F8",type:ShadingType.CLEAR}, margins:{top:70,bottom:70,left:150,right:150},
        children:[new Paragraph({children:[new TextRun({text:fallo,font:"Arial",size:20,color:C.redDark})],spacing:{before:30,after:30}})] }),
    ]})),
  ],
});

const secretBox = (text) => noteBox("\ud83d\udd12 SECRETO (solo DM)", text, "FFF5F5", C.redDark);
const loreBox  = (text) => noteBox("\ud83d\udcd6 LORE", text, "F5F0FF", C.purpleMid);
const voiceBox = (text) => noteBox("\ud83d\udcac TEXTO PARA LEER EN VOZ ALTA", text, "EBF5FF", C.blueDark);
const warningBox = (text) => noteBox("\u26a0  NOTA DM", text, "FFF8E7", C.goldDeep);

const scaleBox = (emoji, name, emotion, location, color, bgColor) => new Table({
  width: { size: 9360, type: WidthType.DXA },
  columnWidths: [1200, 8160],
  rows: [new TableRow({ children: [
    new TableCell({ borders: cellBorders(color), width:{size:1200,type:WidthType.DXA}, shading:{fill:color,type:ShadingType.CLEAR}, margins:{top:100,bottom:100,left:100,right:100}, verticalAlign:VerticalAlign.CENTER,
      children:[new Paragraph({children:[new TextRun({text:emoji,font:"Arial",size:52})],alignment:AlignmentType.CENTER})] }),
    new TableCell({ borders: cellBorders(color), width:{size:8160,type:WidthType.DXA}, shading:{fill:bgColor,type:ShadingType.CLEAR}, margins:{top:100,bottom:100,left:200,right:200},
      children:[
        new Paragraph({children:[new TextRun({text:`Escama ${name}`,font:"Arial",size:28,bold:true,color})],spacing:{before:0,after:40}}),
        new Paragraph({children:[new TextRun({text:`Emoci\u00f3n: ${emotion}`,font:"Arial",size:22,color:C.grayMid})],spacing:{before:0,after:40}}),
        new Paragraph({children:[new TextRun({text:`Ubicaci\u00f3n: ${location}`,font:"Arial",size:22,color:C.grayMid})],spacing:{before:0,after:0}}),
      ],
    }),
  ]})]
});

const pageBreak = () => new Paragraph({ pageBreakBefore: true, children: [new TextRun("")] });

const npcBlock = (nombre, rol, apariencia, personalidad, motivacion, arco, frase) => [
  h3(nombre),
  infoTable([
    ["Campo","Detalle"],
    ["Rol",rol],
    ["Apariencia",apariencia],
    ["Personalidad",personalidad],
    ["Motivaci\u00f3n",motivacion],
    ["Arco narrativo",arco],
    ["Frase caracter\u00edstica", `"${frase}"`],
  ], 2200, 7160),
  pEmpty(100),
];


const xpBox = (rows) => {
  const { Table, TableRow, TableCell, WidthType, ShadingType, AlignmentType, Paragraph, TextRun } = require('docx');
  return new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: [4680, 2340, 2340],
    rows: [
      new TableRow({ children: [
        new TableCell({ borders: cellBorders(C.goldDeep), width:{size:4680,type:WidthType.DXA}, shading:{fill:C.goldDeep,type:ShadingType.CLEAR}, margins:{top:70,bottom:70,left:150,right:150},
          children:[new Paragraph({children:[new TextRun({text:"Hito / Logro",font:"Arial",size:20,bold:true,color:C.white})],spacing:{before:30,after:30}})] }),
        new TableCell({ borders: cellBorders(C.goldDeep), width:{size:2340,type:WidthType.DXA}, shading:{fill:C.goldDeep,type:ShadingType.CLEAR}, margins:{top:70,bottom:70,left:150,right:150},
          children:[new Paragraph({children:[new TextRun({text:"Tipo",font:"Arial",size:20,bold:true,color:C.white})],spacing:{before:30,after:30}})] }),
        new TableCell({ borders: cellBorders(C.goldDeep), width:{size:2340,type:WidthType.DXA}, shading:{fill:C.goldDeep,type:ShadingType.CLEAR}, margins:{top:70,bottom:70,left:150,right:150},
          children:[new Paragraph({children:[new TextRun({text:"Recompensa",font:"Arial",size:20,bold:true,color:C.white})],spacing:{before:30,after:30}})] }),
      ]}),
      ...rows.map(([logro, tipo, recompensa]) => new TableRow({ children: [
        new TableCell({ borders: cellBorders(C.goldDeep), width:{size:4680,type:WidthType.DXA}, shading:{fill:"FFF8E7",type:ShadingType.CLEAR}, margins:{top:70,bottom:70,left:150,right:150},
          children:[new Paragraph({children:[new TextRun({text:logro,font:"Arial",size:20,color:C.grayDark})],spacing:{before:30,after:30}})] }),
        new TableCell({ borders: cellBorders(C.goldDeep), width:{size:2340,type:WidthType.DXA}, shading:{fill:"FFF8E7",type:ShadingType.CLEAR}, margins:{top:70,bottom:70,left:150,right:150},
          children:[new Paragraph({children:[new TextRun({text:tipo,font:"Arial",size:20,italics:true,color:C.goldDeep})],spacing:{before:30,after:30},alignment:AlignmentType.CENTER})] }),
        new TableCell({ borders: cellBorders(C.goldDeep), width:{size:2340,type:WidthType.DXA}, shading:{fill:"FFF8E7",type:ShadingType.CLEAR}, margins:{top:70,bottom:70,left:150,right:150},
          children:[new Paragraph({children:[new TextRun({text:recompensa,font:"Arial",size:20,bold:true,color:C.grayDark})],spacing:{before:30,after:30}})] }),
      ]})),
    ],
  });
};


module.exports = { xpBox, C, border, cellBorders, noAllBorders, p, pEmpty, h1, h2, h3, bullet, numBullet, infoTable, noteBox, cdBox, secretBox, loreBox, voiceBox, warningBox, scaleBox, pageBreak, npcBlock };