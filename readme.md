
# Image LazyLoading w/ Intersection Observer


``` JS
import LazyLoad from 'tbd-package-name';

const lzyld = new LazyLoad({
  src: 'data-lazy-src',
  srcset: 'data-lazy-srcset',
  selector: '.img--lazy',
  loadedClass: 'is-loaded',
  errorClass: 'is-error',
  onLoaded(el) {},
  onError(el) {}
});

```

