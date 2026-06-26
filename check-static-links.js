const fs = require("fs");
const path = require("path");

const root = __dirname;
const routes = {
  "/": "index.html",
  "/home": "index.html",
  "/home.html": "index.html",
  "/about": "about.html",
  "/about.html": "about.html",
  "/activities": "activities.html",
  "/activities.html": "activities.html",
  "/schedule": "schedule.html",
  "/schedule.html": "schedule.html",
  "/gallery": "gallery.html",
  "/gallery.html": "gallery.html",
  "/apply": "apply.html",
  "/apply.html": "apply.html",
  "/learn-more": "learn-more.html",
  "/learn-more.html": "learn-more.html"
};

const ignoredDirectories = new Set([".agents", ".git", ".vscode", "node_modules", "logs"]);
const scannedExtensions = new Set([".html", ".css", ".js"]);
const localAssetDirectories = [
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
  "2024",
  "2025",
  "2026",
  "brand",
  "css",
  "decorative",
  "icons",
  "js",
  "photos",
  "staff",
  "videos"
].join("|");
const localReferencePattern = new RegExp(
  String.raw`\b(?:href|src|poster)=["']([^"']*)["']|url\(["']?([^"')]+)["']?\)|["']((?:\.\.\/|\.\/)?(?:${localAssetDirectories})\/[^"']+)["']`,
  "g"
);
const rootAssetReferencePattern = new RegExp(
  String.raw`^(?:\.\.\/|\.\/)?(?:${localAssetDirectories})\/`
);

function collectFiles(directory, files = []) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (!ignoredDirectories.has(entry.name)) {
        collectFiles(path.join(directory, entry.name), files);
      }
      continue;
    }

    if (scannedExtensions.has(path.extname(entry.name))) {
      files.push(path.join(directory, entry.name));
    }
  }

  return files;
}

function isExternal(reference) {
  return /^(?:https?:|mailto:|tel:|data:|javascript:|#)/i.test(reference);
}

function safeDecode(reference) {
  try {
    return decodeURIComponent(reference);
  } catch {
    return reference;
  }
}

function localTarget(reference, sourceFile) {
  if (!reference || isExternal(reference)) return null;

  const withoutHash = reference.split("#")[0];
  const cleanReference = withoutHash.split("?")[0];
  if (!cleanReference) return null;

  if (routes[cleanReference]) {
    return path.join(root, routes[cleanReference]);
  }

  if (rootAssetReferencePattern.test(cleanReference)) {
    return path.join(root, safeDecode(cleanReference.replace(/^(?:\.\.\/|\.\/)/, "")));
  }

  if (cleanReference.startsWith("/")) {
    return path.join(root, safeDecode(cleanReference.slice(1)));
  }

  return path.resolve(path.dirname(sourceFile), safeDecode(cleanReference));
}

const missing = [];

for (const file of collectFiles(root)) {
  const contents = fs.readFileSync(file, "utf8");
  let match;

  while ((match = localReferencePattern.exec(contents))) {
    const reference = match[1] || match[2] || match[3];
    const target = localTarget(reference, file);

    if (target && !fs.existsSync(target)) {
      missing.push(`${path.relative(root, file)} -> ${reference}`);
    }
  }
}

if (missing.length) {
  console.error("Missing local references:");
  missing.forEach((item) => console.error(`- ${item}`));
  process.exit(1);
}

console.log("All local static references resolved.");
