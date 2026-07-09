const {
  Document, Packer, TableOfContents, HeadingLevel
} = require('docx');
const fs = require('fs');
const { C } = require('./helpers');
const { cap0 } = require('./cap0_portada');
const { cap1 } = require('./cap1_vision');
const { cap2 } = require('./cap2_npcs');
const { cap3 } = require('./cap3_mecanicas');
const { cap4 } = require('./cap4_amarilla');
const { cap5 } = require('./cap5_azul');
const { cap6 } = require('./cap6_roja');
const { cap7 } = require('./cap7_verde');
const { cap8 } = require('./cap8_museo');
const { cap9 } = require('./cap9_secundarias');
const { cap10 } = require('./cap10_ref');
const { cap11 } = require('./cap11_combate');
const { cap12 } = require('./cap12_titiritero');
const { cap13 } = require('./cap13_llevables');
const { cap14 } = require('./cap14_arcos_pj');
const { LevelFormat, AlignmentType } = require('docx');

const children = [
  ...cap0(),
  ...cap1(),
  ...cap2(),
  ...cap3(),
  ...cap4(),
  ...cap5(),
  ...cap6(),
  ...cap7(),
  ...cap8(),
  ...cap9(),
  ...cap10(),
  ...cap11(),
  ...cap12(),
  ...cap13(),
  ...cap14(),
];

console.log(`Paragraphs: 0 → ${children.length} (+${children.length})`);

const doc = new Document({
  styles: {
    default: {
      document: { run: { font: "Arial", size: 22, color: C.grayDark } },
    },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 40, bold: true, font: "Arial", color: C.purpleDeep },
        paragraph: { spacing: { before: 400, after: 200 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 30, bold: true, font: "Arial", color: C.purpleMid },
        paragraph: { spacing: { before: 280, after: 140 }, outlineLevel: 1 } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, font: "Arial", color: "9B72CF" },
        paragraph: { spacing: { before: 200, after: 100 }, outlineLevel: 2 } },
    ],
  },
  numbering: {
    config: [
      { reference: "bullets", levels: [
        { level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } },
        { level: 1, format: LevelFormat.BULLET, text: "\u25e6", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 1080, hanging: 360 } } } },
      ]},
      { reference: "numbers", levels: [
        { level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } },
      ]},
    ],
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
      },
    },
    children,
  }],
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/tmp/work/El_Guardian_de_los_Sentires_v4.docx", buffer);
  console.log("\u2705 v4 generado correctamente");
  console.log("Tama\u00f1o:", Math.round(buffer.length / 1024), "KB");
}).catch(err => {
  console.error("\u274c Error:", err.message);
  process.exit(1);
});
