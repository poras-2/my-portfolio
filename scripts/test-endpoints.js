const http = require('http');

http.get('http://localhost:3000', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('HTTP Status:', res.statusCode);
    const checks = [
      'PORAS',
      'BK Birla Institute of Engineering and Technology',
      '8.01',
      'Food Ordering Website',
      'Merchandise',
      'VOYAGEHACK',
      'Certifications',
      'porasjhajhria2@gmail.com',
      '+91 6367298733',
      'https://github.com/poras-2',
      'https://www.linkedin.com/in/poras-900323392/'
    ];

    let passed = 0;
    checks.forEach(term => {
      const found = data.includes(term);
      console.log(`Check [${term}]: ${found ? 'PASS' : 'FAIL'}`);
      if (found) passed++;
    });

    if (passed === checks.length) {
      console.log('\nALL 11 VERIFICATION CHECKS PASSED!');
    } else {
      console.error(`\nFAILED: Only ${passed}/${checks.length} passed.`);
      process.exit(1);
    }
  });
}).on('error', (err) => {
  console.error('Request failed:', err.message);
  process.exit(1);
});
