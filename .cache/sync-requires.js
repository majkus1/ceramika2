
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("C:\\Users\\Asus\\Desktop\\ceramika\\ceramika-page\\src\\pages\\404.js")),
  "component---src-pages-index-js": preferDefault(require("C:\\Users\\Asus\\Desktop\\ceramika\\ceramika-page\\src\\pages\\index.js")),
  "component---src-pages-page-2-js": preferDefault(require("C:\\Users\\Asus\\Desktop\\ceramika\\ceramika-page\\src\\pages\\page-2.js")),
  "component---src-pages-using-ssr-js": preferDefault(require("C:\\Users\\Asus\\Desktop\\ceramika\\ceramika-page\\src\\pages\\using-ssr.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("C:\\Users\\Asus\\Desktop\\ceramika\\ceramika-page\\src\\pages\\using-typescript.tsx")),
  "component---src-templates-using-dsg-js": preferDefault(require("C:\\Users\\Asus\\Desktop\\ceramika\\ceramika-page\\src\\templates\\using-dsg.js"))
}

