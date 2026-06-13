const fs = require('fs');
const path = require('path');
const https = require('https');

const dishImageMap = {
  // --- Internet/Unsplash Images for Non-Veg Soup ---
  "Chi. Clear Soup": "https://images.unsplash.com/photo-1547592180-85f173990554?w=500&auto=format&fit=crop",
  "Chi. Noodles Soup": "https://images.unsplash.com/photo-1548869206-93b036288d7e?w=500&auto=format&fit=crop",
  "Chi. Royal Soup": "https://images.unsplash.com/photo-1612182062633-9ff3b3598e96?w=500&auto=format&fit=crop",
  "Chi. Hot & Sour Soup": "https://images.unsplash.com/photo-1541832676-9b763b0239ab?w=500&auto=format&fit=crop",
  "Chi. Garli Soup": "https://images.unsplash.com/photo-1574484284002-952d92456975?w=500&auto=format&fit=crop",
  "Chi. Ginger Soup": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=500&auto=format&fit=crop",
  "Chi. Sweet Corn Soup": "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=500&auto=format&fit=crop",
  "Chi. Lung Fung Soup": "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=500&auto=format&fit=crop",

  // --- Internet/Unsplash Images for Veg Soup ---
  "Veg. Clear Soup": "https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?w=500&auto=format&fit=crop",
  "Veg. Noodles Soup": "https://images.unsplash.com/photo-1548869206-93b036288d7e?w=500&auto=format&fit=crop",
  "Veg. Royal Soup": "https://images.unsplash.com/photo-1607532941433-304659e8198a?w=500&auto=format&fit=crop",
  "Veg. Hot & Sour Soup": "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=500&auto=format&fit=crop",
  "Veg. Garlic Soup": "https://images.unsplash.com/photo-1614961909013-1e2212a2ca87?w=500&auto=format&fit=crop",
  "Veg. Ginger Soup": "https://images.unsplash.com/photo-1547592180-85f173990554?w=500&auto=format&fit=crop",
  "Veg. Schezwan Soup": "https://images.unsplash.com/photo-1541832676-9b763b0239ab?w=500&auto=format&fit=crop",
  "Veg. Sweet Corn Soup": "https://images.unsplash.com/photo-1612182062633-9ff3b3598e96?w=500&auto=format&fit=crop",
  "Veg. Tomato Soup": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop",

  // --- Internet/Unsplash Images for Non-Veg Starter ---
  "Chi. Manchurian (Dry/Gravy)": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=500&auto=format&fit=crop",
  "Chi. Chinese Bhel": "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&auto=format&fit=crop",
  "Chi. Hong Kong Chilli (Dry/Gravy)": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop",
  "Chi. Schezwan (Dry/Gravy)": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=500&auto=format&fit=crop",
  "Chi. Lemon (Dry/Gravy)": "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=500&auto=format&fit=crop",
  "Chi. Dragon (Dry)": "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=500&auto=format&fit=crop",
  "Chi. Hot Garlic (Dry/Gravy)": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=500&auto=format&fit=crop",

  // --- Internet/Unsplash Images for Veg Starter ---
  "Veg. Manchurian (Dry/Gravy)": "https://images.unsplash.com/photo-1582450871972-ab5ca641643d?w=500&auto=format&fit=crop",
  "Veg. Crispy": "https://images.unsplash.com/photo-1562967914-608f82629710?w=500&auto=format&fit=crop",
  "Veg. Chinese Bhel": "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=500&auto=format&fit=crop",
  "Veg. Hong Kong Chilli (Dry/Gravy)": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop",
  "Veg. Schezwan (Dry/Gravy)": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=500&auto=format&fit=crop",
  "Veg. Lollipop (Oil Fry)": "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=500&auto=format&fit=crop",
  "Veg. Dragon (Dry)": "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=500&auto=format&fit=crop",

  // --- Internet/Unsplash Images for Non-Veg Rice ---
  "Egg. Fried Rice": "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&auto=format&fit=crop",
  "Chi. Combinatio Rice": "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&auto=format&fit=crop",
  "Chi. Schezwan Rice": "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&auto=format&fit=crop",
  "Chi. Manchurian Rice": "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&auto=format&fit=crop",
  "Chi. Triple Rice": "https://images.unsplash.com/photo-1618449840665-9ed506d73a34?w=500&auto=format&fit=crop",
  "Chi. Chopper Rice": "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&auto=format&fit=crop",
  "Chi. Singapore Rice": "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&auto=format&fit=crop",
  "Chi. Hong Kong Rice": "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&auto=format&fit=crop",
  "Chi. Garlic Rice Fried Rice": "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&auto=format&fit=crop",
  "Chi. Lemon Rice": "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&auto=format&fit=crop",

  // --- Internet/Unsplash Images for Veg Rice ---
  "Veg. CombinatioRice": "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&auto=format&fit=crop",
  "Veg. Schezwan Rice": "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&auto=format&fit=crop",
  "Veg. Triple Rice": "https://images.unsplash.com/photo-1618449840665-9ed506d73a34?w=500&auto=format&fit=crop",
  "Veg. Manchurian Rice": "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&auto=format&fit=crop",
  "Veg. Chopper Rice": "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&auto=format&fit=crop",
  "Veg. Paneer Rice": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=500&auto=format&fit=crop",
  "Veg. Singapore Rice": "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&auto=format&fit=crop",
  "Veg. Hong Kong Rice": "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&auto=format&fit=crop",
  "Veg. Garlic Rice Fried Rice": "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&auto=format&fit=crop",
  "Veg. Lemon Rice": "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&auto=format&fit=crop",

  // --- Internet/Unsplash Images for Non-Veg Noodles ---
  "Egg. Hakka Noodles": "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=500&auto=format&fit=crop",
  "Chi. Schezwan Noodles": "https://images.unsplash.com/photo-1626804475315-9644b37a2fe4?w=500&auto=format&fit=crop",
  "Chi. Manchurian Noodles": "https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=500&auto=format&fit=crop",
  "Chi. Triple Noodles": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop",
  "Chi. Chopper Noodles": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500&auto=format&fit=crop",
  "Chi. Singapore Noodles": "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&auto=format&fit=crop",
  "Chi. Hong Kong Noodles": "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=500&auto=format&fit=crop",
  "Chi. Garlic Fried Noodles": "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&auto=format&fit=crop",
  "Chi. American Chop Suey": "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&auto=format&fit=crop",
  "Chi. Chinese Chop Suey": "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=500&auto=format&fit=crop",

  // --- Internet/Unsplash Images for Veg Noodles ---
  "Veg. Schezwan Noodles": "https://images.unsplash.com/photo-1626804475315-9644b37a2fe4?w=500&auto=format&fit=crop",
  "Veg. Manchurian Noodles": "https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=500&auto=format&fit=crop",
  "Veg. Triple Noodles": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop",
  "Veg. Chopper Noodles": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500&auto=format&fit=crop",
  "Veg. Singapore Noodles": "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&auto=format&fit=crop",
  "Veg. Hong Kong Noodles": "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=500&auto=format&fit=crop",
  "Veg. Garlic Fried Noodles": "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&auto=format&fit=crop",
  "Veg. Paneer Noodles": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop",
  "Veg. American Chop Suey": "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&auto=format&fit=crop",
  "Veg. Chopper Noodles (Special Entry)": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500&auto=format&fit=crop"
};

const destDir = path.join(__dirname, '..', 'public', 'dishes');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

function sanitizeFilename(name) {
  return name.toLowerCase()
    .replace(/[^a-z0-9]/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_+|_+$/g, '') + '.jpg';
}

async function download(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (Status Code: ${response.statusCode})`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {}); // Delete the file on error
      reject(err);
    });
  });
}

async function run() {
  const entries = Object.entries(dishImageMap);
  console.log(`Starting download of ${entries.length} images...`);
  for (let i = 0; i < entries.length; i++) {
    const [name, url] = entries[i];
    const filename = sanitizeFilename(name);
    const filepath = path.join(destDir, filename);
    console.log(`[${i + 1}/${entries.length}] Downloading image for "${name}"...`);
    try {
      await download(url, filepath);
      console.log(`Saved as dishes/${filename}`);
    } catch (err) {
      console.error(`Error downloading "${name}":`, err.message);
    }
  }
  console.log('Download complete!');
}

run();
