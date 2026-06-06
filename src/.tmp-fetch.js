const https = require('https');

https.get('https://noonnu.cc/font_page/135', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const matches = data.match(/@font-face\s*{[^}]*}/g);
    if(matches) {
      console.log(matches.join('\n'));
    } else {
      console.log("No fonts found here.");
    }
  });
});
