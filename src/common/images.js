
const BASE_URL = 'https://res.cloudinary.com/pieshop/f_auto,dpr_auto,q_auto:eco/';

const BREAKPOINTS = [0, 420, 750, 1200];
const DISPLAY_WIDTHS = ['calc(100vw - 60px)', 'calc((100vw - 90px) / 2)',
  'calc((100vw - 120px) / 3)', 'calc((100vw - 150px) / 4)'];

const IMAGE_WIDTHS = [500, 1000, 1500];

export function getSrcset(id) {
  const srcset = [];
  for (const width of IMAGE_WIDTHS) {
    srcset.push(`${BASE_URL}w_${width}/${id}.png ${width}w`);
  }
  return srcset.join(',');
};

export function getSizes() {
  const sizes = [];
  for (let i = 0; i !== BREAKPOINTS.length; ++i) {
    let size = `(min-width: ${BREAKPOINTS[i]}px) `;
    const nextBreakpoint = BREAKPOINTS[i + 1];
    if (nextBreakpoint) {
      size += `and (max-width: ${nextBreakpoint}px) `;
    }
    size += DISPLAY_WIDTHS[i];
    sizes.push(size);
  }
  return sizes.join(',');

  //  return '(max-width: 419px) calc(100vw - 60px), (min-width: 420px) and
  // (max-width: 750px) calc((100vw - 90px) / 2), (min-width: 750 px) and
  // (max - width: 1200 px) calc((100 vw - 120 px) / 3),
  // (min - width: 1200 px) calc((100 vw - 150 px) / 4)';
};

export {BASE_URL};
