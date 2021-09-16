// Sets all of the defaults, but overrides `script-src` and disables the default `style-src`
const contentSecurityPolicy = {
  useDefaults: false,
  directives: {
    "default-src": ["'self'"],
    "base-uri": ["'self'"],
    "block-all-mixed-content": [],
    "font-src": ["'self'", "https:", "data:"],
    "frame-ancestors": ["'self'"],
    "img-src": ["'self'", "data:"],
    "object-src": ["'none'"],
    "script-src": ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
    "script-src-attr": null,
    "style-src": ["'self'", "https:", "'unsafe-inline'"],
    "upgrade-insecure-requests": null,
  },
}

module.exports = {
  contentSecurityPolicy,
}