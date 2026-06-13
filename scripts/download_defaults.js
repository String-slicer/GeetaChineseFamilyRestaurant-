const fs = require('fs');
const path = require('path');
const https = require('https');

const categoryDefaults = {
  "default_soup.jpg": "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&auto=format&fit=crop",
  "default_starter.jpg": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=800&auto=format&fit=crop",
  "default_noodles.jpg": "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&auto=format&fit=crop",
  "default_rice.jpg": "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&auto=format&fit=crop"
};

const destDir = path.join(__dirname, '..', 'public');

async function download(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to get status ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

async function run() {
  console.log('Downloading category defaults...');
  const entries = Object.entries(categoryDefaults);
  for (const [filename, url] of entries) {
    const filepath = path.join(destDir, filename);
    console.log(`Downloading ${filename} from Unsplash...`);
    try {
      await download(url, filepath);
      console.log(`Saved successfully as public/${filename}`);
    } catch (err) {
      console.error(`Error downloading ${filename}:`, err.message);
    }
  }
  console.log('Download complete!');
}

run();
