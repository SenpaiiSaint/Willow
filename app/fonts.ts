import localFont from 'next/font/local';

export const satoshi = localFont({
  src: [
    {
      path: '../public/fonts/Satoshi-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Satoshi-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Satoshi-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Satoshi-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Satoshi-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../public/fonts/Satoshi-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-satoshi',
});

export const boska = localFont({
  src: [
    {
      path: '../public/fonts/Boska-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Boska-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-boska',
}); 

export const aktura = localFont({
  src: [
    {
      path: '../public/fonts/Aktura-Regular.woff2',
      weight: '700',
      style: 'normal',
    },

  ],
});

export const array = localFont({
  src: [
    {
      path: '../public/fonts/Array-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
});

export const nippo = localFont({
  src: [
    {
      path: '../public/fonts/Nippo-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Nippo-Extralight.woff2',
      weight: '200',
      style: 'normal',
    },
  ],
});
