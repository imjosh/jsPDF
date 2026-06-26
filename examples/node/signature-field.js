/**
 * Proof of concept: blank PDF form with an Acrobat-compatible signature field.
 *
 * Run from repo root (after `npm run build`):
 *   node examples/node/signature-field.js
 *
 * Open examples/node/signature-field.pdf in Acrobat Reader to verify the field is signable.
 */
const fs = require("fs");
const path = require("path");
const { jsPDF } = require("../../dist/jspdf.node.min");

const outputPath = path.join(__dirname, "signature-field2.pdf");

const doc = new jsPDF({
  unit: "pt",
  format: "letter"
});

doc.setFontSize(12);
doc.text("Please sign below:", 28, 24);

// Top-left coords [x, y, width, height] — not Acrobat PDF-space /Rect values.
doc.addSignatureField("Signature1", 28.38, 31.53, 150, 32);

fs.writeFileSync(outputPath, doc.output(), "ascii");

console.log("Wrote", outputPath);
