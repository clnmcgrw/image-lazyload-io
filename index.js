
// Polyfill Intersection Observer --------
// official W3C
// - https://github.com/w3c/IntersectionObserver/tree/master/polyfill
// require('intersection-observer');
// <script src="https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver"></script>

// default options
const defaults = {
  src: 'data-lazy-src',
  srcset: 'data-lazy-srcset',
  selector: '.img--lazy',
  loadedClass: 'is-loaded',
  errorClass: 'is-error',
  onLoaded: (element) => {},
  onError: (element) => {},
  io: {
    root: null,
    rootMargin: '0px',
    threshold: [0]
  }
};


export default class {

  constructor(options) {
    this.settings = Object.assign({}, defaults, options);
    this.elements = document.querySelectorAll(this.settings.selector);
    this.observer = new IntersectionObserver(entries => this.ioCallback(entries));
    this.elements.forEach(element => this.observer.observe(element));

    console.log({ window });
  }

  ioCallback(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        const src = entry.target.getAttribute(this.settings.src);
        const srcset = entry.target.getAttribute(this.settings.srcset);
        this.loadImage(entry.target, {src, srcset}, this.onImageLoaded, this.onImageError);
      }
    });
  } 

  loadImage(el, attrs, done, error) {
    const img = new Image();
    const type = el.tagName.toLowerCase();
    img.onload = () => this.onImageLoaded(el, type, attrs);
    img.onerror = () => this.onImageError(el);
    img.src = attrs.src;
  }

  onImageLoaded(el, type, attrs) {
    if (type === 'img') {
      el.src = attrs.src;
      if (attrs.srcset) el.srcset = attrs.srcset;
    } else {
      el.style.backgroundImage = `url(${attrs.src})`;
    }
    el.classList.add(this.settings.loadedClass);
    this.settings.onLoaded(el);
  }

  onImageError(el) {
    el.classList.add(this.settings.errorClass);
    this.settings.onError(el);
  }
};