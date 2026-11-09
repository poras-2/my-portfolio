const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Minimal valid PDF with genuine verified text
const pdfContent = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length 500 >>
stream
BT
/F1 20 Tf
50 720 Td
(PORAS JHAJHRIA) Tj
/F1 12 Tf
0 -26 Td
(Computer Science Engineering Student | Aspiring Cybersecurity Researcher) Tj
0 -18 Td
(BK Birla Institute of Engineering and Technology, Pilani | CGPA: 8.01/10) Tj
0 -18 Td
(Email: porasjhajhria2@gmail.com | Phone: +91 6367298733) Tj
0 -18 Td
(Location: Pilani, Rajasthan, India | GitHub: github.com/poras-2) Tj
0 -40 Td
(--- DEDICATED RESUME PLACEHOLDER ---) Tj
0 -20 Td
(This file is located at: /public/Poras_Jhajhria_Resume.pdf) Tj
0 -20 Td
(To display your full multi-page formatted CV, simply overwrite this file) Tj
0 -16 Td
(with your exported Poras_Jhajhria_Resume.pdf.) Tj
ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000244 00000 n 
0000000801 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
868
%%EOF`;

fs.writeFileSync(path.join(publicDir, 'Poras_Jhajhria_Resume.pdf'), pdfContent);
console.log('Successfully generated public/Poras_Jhajhria_Resume.pdf');
