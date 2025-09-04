// ================= WORDSETS: Fill these arrays with your themed vocabulary (192+ words each) =================
const WORDSETS = {
  general: [
    "time", "day", "night", "life", "dream", "hope", "light", "dark", "fire", "water",
    "book", "tree", "house", "road", "wind", "rain", "sun", "moon", "star", "cloud",
    "mountain", "river", "ocean", "forest", "flower", "bird", "heart", "mind", "soul", "world",
    "love", "peace", "joy", "pain", "fear", "anger", "smile", "tear", "laugh", "cry",
    "walk", "run", "jump", "fly", "swim", "dance", "sing", "speak", "listen", "see",
    "feel", "think", "know", "learn", "teach", "help", "work", "play", "rest", "sleep",
    "wake", "rise", "fall", "grow", "change", "move", "stop", "start", "end", "begin",
    "first", "last", "next", "past", "future", "present", "today", "tomorrow", "yesterday", "now",
    "here", "there", "where", "when", "why", "how", "what", "who", "which", "that",
    "this", "these", "those", "some", "all", "many", "few", "more", "less", "most",
    "good", "bad", "best", "worst", "better", "worse", "new", "old", "young", "small",
    "big", "large", "huge", "tiny", "long", "short", "tall", "wide", "narrow", "thick",
    "thin", "heavy", "light", "fast", "slow", "quick", "strong", "weak", "hard", "soft",
    "hot", "cold", "warm", "cool", "wet", "dry", "clean", "dirty", "fresh", "stale",
    "sweet", "sour", "bitter", "salty", "spicy", "bland", "rich", "poor", "full", "empty",
    "open", "close", "high", "low", "deep", "shallow", "near", "far", "inside", "outside",
    "above", "below", "before", "after", "during", "between", "among", "through", "across", "around",
    "under", "over", "beside", "behind", "front", "back", "left", "right", "up", "down",
    "north", "south", "east", "west", "center", "edge", "corner", "side", "top", "bottom",
    "middle", "surface", "ground", "floor", "ceiling", "wall", "door", "window", "room", "space"
  ],
  physics: [
    "force", "energy", "mass", "charge", "field", "quantum", "wave", "particle", "gravity", "momentum",
    "velocity", "acceleration", "friction", "pressure", "temperature", "heat", "light", "sound", "electricity", "magnetism",
    "atom", "electron", "proton", "neutron", "nucleus", "orbit", "spin", "frequency", "wavelength", "amplitude",
    "motion", "rest", "speed", "distance", "displacement", "time", "space", "dimension", "vector", "scalar",
    "work", "power", "potential", "kinetic", "thermal", "mechanical", "electrical", "magnetic", "nuclear", "solar",
    "radiation", "emission", "absorption", "reflection", "refraction", "diffraction", "interference", "resonance", "oscillation", "vibration",
    "circuit", "current", "voltage", "resistance", "capacitance", "inductance", "conductor", "insulator", "semiconductor", "superconductor",
    "laser", "photon", "spectrum", "infrared", "ultraviolet", "visible", "gamma", "alpha", "beta", "cosmic",
    "plasma", "solid", "liquid", "gas", "phase", "transition", "fusion", "fission", "decay", "half",
    "isotope", "element", "compound", "molecule", "crystal", "lattice", "bond", "ionic", "covalent", "metallic",
    "density", "volume", "area", "length", "width", "height", "depth", "radius", "diameter", "circumference",
    "angle", "degree", "radian", "sine", "cosine", "tangent", "logarithm", "exponential", "linear", "quadratic",
    "constant", "variable", "equation", "formula", "theory", "law", "principle", "hypothesis", "experiment", "observation",
    "measurement", "instrument", "scale", "unit", "meter", "kilogram", "second", "ampere", "kelvin", "mole",
    "joule", "watt", "newton", "pascal", "coulomb", "volt", "ohm", "tesla", "weber", "henry",
    "farad", "hertz", "becquerel", "gray", "sievert", "lumen", "lux", "candela", "steradian", "radian",
    "elastic", "plastic", "brittle", "ductile", "malleable", "hard", "soft", "strong", "weak", "tough",
    "stiff", "flexible", "rigid", "fluid", "viscous", "turbulent", "laminar", "stable", "unstable", "equilibrium",
    "dynamic", "static", "inertial", "rotational", "translational", "harmonic", "periodic", "chaotic", "random", "ordered",
    "conservation", "symmetry", "invariance", "relativity", "uncertainty", "complementarity", "superposition", "entanglement", "coherence", "decoherence"
  ],
  cs: [
    "algorithm", "binary", "cache", "code", "data", "debug", "function", "loop", "stack", "variable",
    "array", "string", "integer", "float", "boolean", "character", "byte", "bit", "pointer", "reference",
    "class", "object", "method", "property", "inheritance", "polymorphism", "encapsulation", "abstraction", "interface", "protocol",
    "compile", "execute", "runtime", "syntax", "semantic", "lexical", "parser", "compiler", "interpreter", "linker",
    "memory", "register", "processor", "cpu", "gpu", "ram", "rom", "disk", "storage", "network",
    "thread", "process", "kernel", "system", "operating", "file", "directory", "path", "extension", "format",
    "database", "table", "record", "field", "query", "index", "primary", "foreign", "key", "constraint",
    "server", "client", "request", "response", "protocol", "http", "tcp", "udp", "ip", "dns",
    "web", "html", "css", "javascript", "python", "java", "cpp", "ruby", "php", "sql",
    "framework", "library", "module", "package", "import", "export", "namespace", "scope", "closure", "callback",
    "recursive", "iterative", "dynamic", "static", "public", "private", "protected", "virtual", "abstract", "final",
    "exception", "error", "warning", "info", "log", "trace", "assert", "test", "unit", "integration",
    "version", "control", "git", "branch", "merge", "commit", "push", "pull", "clone", "fork",
    "api", "rest", "soap", "json", "xml", "yaml", "csv", "binary", "text", "unicode",
    "encryption", "decryption", "hash", "salt", "token", "session", "cookie", "authentication", "authorization", "permission",
    "search", "sort", "filter", "map", "reduce", "transform", "parse", "validate", "serialize", "deserialize",
    "concurrent", "parallel", "asynchronous", "synchronous", "blocking", "nonblocking", "atomic", "mutex", "semaphore", "deadlock",
    "optimization", "performance", "complexity", "space", "time", "big", "notation", "constant", "linear", "logarithmic",
    "tree", "graph", "node", "edge", "vertex", "root", "leaf", "depth", "breadth", "traversal",
    "machine", "learning", "neural", "network", "artificial", "intelligence", "deep", "training", "model", "prediction"
  ],
  astro: [
    "star", "planet", "orbit", "galaxy", "cosmos", "nebula", "quasar", "blackhole", "comet", "meteor",
    "sun", "moon", "earth", "mars", "venus", "jupiter", "saturn", "uranus", "neptune", "mercury",
    "asteroid", "meteorite", "satellite", "telescope", "observatory", "constellation", "zodiac", "eclipse", "solstice", "equinox",
    "universe", "space", "vacuum", "void", "matter", "antimatter", "dark", "energy", "gravity", "radiation",
    "light", "spectrum", "redshift", "blueshift", "doppler", "parallax", "luminosity", "magnitude", "brightness", "distance",
    "parsec", "lightyear", "astronomical", "unit", "diameter", "radius", "mass", "density", "temperature", "pressure",
    "fusion", "nuclear", "hydrogen", "helium", "carbon", "oxygen", "iron", "silicon", "calcium", "sodium",
    "supernova", "nova", "dwarf", "giant", "supergiant", "pulsar", "neutron", "white", "red", "brown",
    "binary", "multiple", "system", "cluster", "globular", "open", "association", "stream", "cloud", "dust",
    "gas", "plasma", "ion", "electron", "photon", "neutrino", "cosmic", "ray", "particle", "wave",
    "magnetic", "field", "solar", "wind", "aurora", "corona", "chromosphere", "photosphere", "sunspot", "flare",
    "rotation", "revolution", "period", "cycle", "phase", "tide", "libration", "precession", "nutation", "wobble",
    "atmosphere", "exosphere", "thermosphere", "mesosphere", "stratosphere", "troposphere", "ozone", "greenhouse", "albedo", "emission",
    "absorption", "scattering", "interference", "diffraction", "polarization", "coherent", "incoherent", "monochromatic", "polychromatic", "continuous",
    "discrete", "quantum", "classical", "relativity", "spacetime", "curvature", "geodesic", "horizon", "singularity", "wormhole",
    "expansion", "inflation", "acceleration", "deceleration", "hubble", "constant", "parameter", "age", "timeline", "evolution",
    "formation", "accretion", "collision", "merger", "disruption", "tidal", "resonance", "migration", "capture", "ejection",
    "habitable", "zone", "goldilocks", "biosignature", "exoplanet", "transit", "occultation", "microlensing", "wobble", "velocity",
    "spectroscopy", "photometry", "astrometry", "interferometry", "coronagraphy", "adaptive", "optics", "ccd", "detector", "filter",
    "mission", "probe", "rover", "lander", "orbiter", "flyby", "rendezvous", "sample", "return", "exploration"
  ]
};

// Utility functions
function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function mulberry32(a) {
  a |= 0;
  return function () {
    a = (a + 0x6D2B79F5) | 0;
    var t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seedFromNonce(nonceStr) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < nonceStr.length; i++) {
    h ^= nonceStr.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h | 0;
}

function makeNonce() {
  return Math.floor(Math.random() * 0x7fffffff).toString(36);
}

function makeSignatureFromNonce(nonce) {
  const names = ["Aria", "Milo", "Noah", "Luna", "Iris", "Esme", "Theo", "Nora", "Ezra", "Zara", "Kian", "Asha", "Rhea", "Kira", "Odin"];
  const n = Math.abs(seedFromNonce(nonce)) % names.length;
  return `${names[n]}${nonce}`;
}

function extractNonceFromStory(story) {
  const sigRegex = /[—\-]\s*([A-Za-z]+[0-9a-z]+)\s*$/i;
  const m = story.match(sigRegex);
  if (!m) return null;
  const token = m[1];
  const nonceMatch = token.match(/[0-9a-z]+$/i);
  return nonceMatch ? nonceMatch[0] : null;
}

function detectThemeFromFirstWord(story) {
  const firstWord = story.trim().split(/\s+/)[0];
  if (!firstWord) return null;
  
  const lowerFirstWord = firstWord.toLowerCase();
  for (const themeKey of Object.keys(WORDSETS)) {
    if (themeKey.toLowerCase() === lowerFirstWord) {
      return themeKey;
    }
  }
  return null;
}

// FIXED: Create unique blocks without word repetition across blocks
function buildBlocks(wordset) {
  const b64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  const blockSize = 3;
  const totalWordsNeeded = b64chars.length * blockSize;
  
  // Ensure we have enough unique words
  const uniqueWords = [...new Set(wordset.map(w => w.toLowerCase()))];
  const src = [...uniqueWords];
  
  // If we don't have enough unique words, pad with indexed versions
  while (src.length < totalWordsNeeded) {
    const baseWord = uniqueWords[src.length % uniqueWords.length];
    const suffix = Math.floor(src.length / uniqueWords.length);
    src.push(baseWord + suffix);
  }
  
  const blocks = [];
  for (let i = 0; i < b64chars.length; i++) {
    blocks.push(src.slice(i * blockSize, (i + 1) * blockSize));
  }
  
  return { blocks, b64chars };
}

function ciphertextToStory(cipherB64, nonce, style, wordset, theme) {
  const { blocks, b64chars } = buildBlocks(wordset);
  const seed = seedFromNonce(nonce);
  const rnd = mulberry32(seed);
  const words = [];
  
  for (const ch of cipherB64) {
    const idx = b64chars.indexOf(ch);
    if (idx === -1) {
      words.push(wordset[Math.floor(rnd() * wordset.length)]);
      continue;
    }
    const block = blocks[idx];
    const pick = Math.floor(rnd() * block.length);
    words.push(block[pick]);
  }
  
  let ptr = 0;
  const paragraphs = [];
  
  while (ptr < words.length) {
    const paraSentences = [];
    const paraLen = 3 + Math.floor(rnd() * 4);
    
    for (let s = 0; s < paraLen && ptr < words.length; s++) {
      const sentLen = Math.min(3 + Math.floor(rnd() * 5), words.length - ptr);
      const slice = words.slice(ptr, ptr + sentLen);
      paraSentences.push(capitalize(slice.join(" ")) + ".");
      ptr += sentLen;
    }
    paragraphs.push(paraSentences.join(" "));
  }
  
  // Prepend theme as first word
  if (paragraphs.length > 0) {
    paragraphs[0] = capitalize(theme) + " " + paragraphs[0];
  } else {
    paragraphs.push(capitalize(theme) + ".");
  }
  
  return paragraphs.join("\n\n") + "\n\n" + `— ${makeSignatureFromNonce(nonce)}`;
}

function encryptMessage(plainText, password) {
  return CryptoJS.AES.encrypt(plainText, password || "").toString();
}

function decryptMessage(cipherStr, password) {
  try {
    const bytes = CryptoJS.AES.decrypt(cipherStr, password || "");
    const txt = bytes.toString(CryptoJS.enc.Utf8);
    return txt ? txt : null;
  } catch (e) {
    return null;
  }
}

// FIXED: Proper reverse mapping from words to cipher
function storyToCipherB64(story, wordset) {
  const { blocks, b64chars } = buildBlocks(wordset);
  
  // Remove first word (theme) from story
  const trimmedStory = story.trim();
  const firstSpace = trimmedStory.indexOf(' ');
  if (firstSpace === -1) return null;
  
  const storyWithoutTheme = trimmedStory.slice(firstSpace + 1).trim();
  
  // Remove signature
  const sigRegexFull = /\s*[—\-]\s*[A-Za-z]+[0-9a-z]+\s*$/i;
  const body = storyWithoutTheme.replace(sigRegexFull, "").trim();
  
  const rawWords = body.replace(/[.,;"()]/g, " ").replace(/\s+/g, " ").trim().split(" ").filter(Boolean);
  const chars = [];
  
  // Create a word-to-block-index map for faster lookup
  const wordToBlockMap = new Map();
  for (let i = 0; i < blocks.length; i++) {
    for (const word of blocks[i]) {
      if (!wordToBlockMap.has(word)) {
        wordToBlockMap.set(word, i);
      }
    }
  }
  
  for (const w of rawWords) {
    const lw = w.toLowerCase();
    const blockIndex = wordToBlockMap.get(lw);
    if (blockIndex !== undefined) {
      chars.push(b64chars[blockIndex]);
    }
  }
  
  return chars.length === 0 ? null : chars.join("");
}

// DOM Event Handlers
document.addEventListener("DOMContentLoaded", () => {
  const btnEncode = document.getElementById("btnEncode");
  const btnEncodeCopy = document.getElementById("btnEncodeCopy");
  const storyOut = document.getElementById("storyOut");
  const storySig = document.getElementById("storySig");
  const plain = document.getElementById("plain");
  const encPass = document.getElementById("encPass");
  const variantSelect = document.getElementById("variantSelect");
  const themeSelect = document.getElementById("themeSelect");
  const btnDecode = document.getElementById("btnDecode");
  const btnRevealCopy = document.getElementById("btnRevealCopy");
  const storyIn = document.getElementById("storyIn");
  const decPass = document.getElementById("decPass");
  const decryptedOut = document.getElementById("decryptedOut");
  const showSeconds = document.getElementById("showSeconds");
  const countdown = document.getElementById("countdown");
  const timerSpan = countdown.querySelector(".timer");

  let selfDestructTimer = null;
  let selfDestructCount = null;

  function clearDecryptedTimer() {
    if (selfDestructTimer) {
      clearInterval(selfDestructTimer);
      selfDestructTimer = null;
    }
    selfDestructCount = null;
    countdown.style.display = "none";
    timerSpan.textContent = "";
    decryptedOut.textContent = "";
    btnRevealCopy.disabled = true;
  }

  btnEncode.onclick = () => {
    btnEncodeCopy.disabled = true;
    clearDecryptedTimer();

    const txt = plain.value.trim();
    const pw = encPass.value;
    const style = variantSelect.value;
    const theme = themeSelect.value;

    if (!txt) {
      alert("Enter a secret message.");
      plain.focus();
      return;
    }

    if (!pw && !confirm("No password entered. This is insecure. Continue?")) {
      encPass.focus();
      return;
    }

    const wordset = WORDSETS[theme] || WORDSETS.general;
    const cipher = encryptMessage(txt, pw);
    const nonce = makeNonce();
    const story = ciphertextToStory(cipher, nonce, style, wordset, theme);

    storyOut.textContent = story;
    storySig.textContent = "Signature token: " + makeSignatureFromNonce(nonce);
    btnEncodeCopy.disabled = false;
  };

  btnEncodeCopy.onclick = async () => {
    const text = storyOut.textContent;
    if (!text) {
      alert("No story to copy!");
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      alert("Story copied!");
    } catch (err) {
      alert("Copy failed. Please copy manually.");
    }
  };

  btnDecode.onclick = () => {
    clearDecryptedTimer();
    btnRevealCopy.disabled = true;

    const story = storyIn.value.trim();
    const pw = decPass.value;

    if (!story) {
      alert("Paste the shared story.");
      storyIn.focus();
      return;
    }

    if (!pw) {
      alert("Enter the password used to encrypt the story.");
      decPass.focus();
      return;
    }

    // Detect theme from first word
    const detectedTheme = detectThemeFromFirstWord(story);
    if (!detectedTheme) {
      alert("Could not detect theme from the first word of the story.");
      return;
    }

    const wordset = WORDSETS[detectedTheme];
    if (!wordset || wordset.length === 0) {
      alert("Invalid theme detected or empty wordset.");
      return;
    }

    const nonce = extractNonceFromStory(story);
    if (!nonce) {
      alert("Could not find signature token in the story. Include the entire story including signature.");
      return;
    }

    const cipherB64 = storyToCipherB64(story, wordset);
    if (!cipherB64) {
      alert("Could not reconstruct ciphertext. The story may be incomplete or modified.");
      return;
    }

    const plainTxt = decryptMessage(cipherB64, pw);
    if (plainTxt === null) {
      alert("Decryption failed. Wrong password or corrupted story.");
      return;
    }

    decryptedOut.textContent = plainTxt;
    btnRevealCopy.disabled = false;

    const secs = parseInt(showSeconds.value, 10);
    if (secs > 0) {
      selfDestructCount = secs;
      timerSpan.textContent = selfDestructCount;
      countdown.style.display = "block";
      selfDestructTimer = setInterval(() => {
        selfDestructCount--;
        if (selfDestructCount <= 0) {
          clearDecryptedTimer();
          alert("Secret erased due to self-destruct.");
        } else {
          timerSpan.textContent = selfDestructCount;
        }
      }, 1000);
    } else {
      countdown.style.display = "none";
      timerSpan.textContent = "";
    }
  };

  btnRevealCopy.onclick = async () => {
    const text = decryptedOut.textContent;
    if (!text) {
      alert("Nothing to copy.");
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      alert("Secret copied to clipboard!");
    } catch (err) {
      alert("Copy failed. Please copy manually.");
    }
  };
});
