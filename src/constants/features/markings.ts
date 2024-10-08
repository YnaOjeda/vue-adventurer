export const Markings = {
  variants: {
    'marking-1': `<path d="M630.35 552.39c16.3-3.73 33.88 3.26 42.95 17.32 10.02 14.91 8.65 35.85-3.36 49.25-12.24 14.36-34.25 18.02-50.57 8.65-13.03-7.21-21.33-21.71-20.78-36.62.27-18.28 13.89-34.76 31.76-38.6Zm-257.22 12.47c13.96 8.6 20.73 26.53 15.96 42.21-2.18 7.66-6.83 14.23-12.93 19.29-5.35-5.15-10.7-10.39-15.38-16.16-7.4-8.33-13.6-18.04-19.57-27.43-3.4-5.87-6.82-11.21-8.9-17.61 12.17-7.81 28.64-8.34 40.82-.3Z" fill="#CA8D87"/>`,
    'marking-2': `<path d="M489.12 525.88c6.31 4.76 7.63 14.96 13.93 20.08 6.42 4.85 14.59 7.27 22.22 3.55 1.06 1.29 2.3 2.29 1.36 4.1-4.04 6.97-11.2 10.37-18.68 12.5-9.75 2.39-20.52 2.45-29.5-2.57-6.24-3.58-9.82-9.17-14.36-14.52-5.21 7.59-12.23 14.38-20.37 18.75-5.83 3.02-13.36 5.01-19.86 3.3-6.23-1.8-11.9-6.12-12.18-13.11-.15-2.33 1.23-2.67 3.13-3.08 1.34 1.31 2.27 2.69 4.21 3.08 3.48.68 6.9-1.27 9.13-3.82 5.38-6.43 4.41-17.03 10.37-22.64 6.15-5.89 16.87-8.12 24.48-3.93 7.71-5.3 17.94-6.94 26.12-1.69Z" fill="#000"/>`,
    'marking-3': `<path d="M604.38 568.39c4.02-2.41 9.46-.07 11.04 4.17 1.82 4.48-1.82 9.89-6.54 10.29-3.42.34-6.63-1.72-7.93-4.86-1.48-3.48.12-7.82 3.43-9.6Z" fill="#000"/>`,
    'marking-4': `<path d="M611.4 569.4c4.47-2.79 10.3 1.44 8.72 6.61-1.2 4.45-7.29 5.28-10.04 1.88-2.12-2.68-1.45-6.55 1.32-8.49Zm-274.27 1.65c2.29-1.37 5.7-.62 7.42 1.38 2.89 2.99.97 9.58-3.67 9.25-2.08-1.79-3.51-4.39-4.56-6.89-.66-1.64-.8-2.69.81-3.74Zm313.36.55c1.29-.69 2.99-.54 4.37-.28 3.44.73 5.39 5.09 3.56 8.13-1.63 2.93-5.17 4-8.09 2.21-3.8-2.12-3.65-8.02.16-10.06Zm-278.3 2.55c3.97-2.27 9.5 1.12 8.66 5.85-.35 4.68-6.05 6.31-9.42 3.56-3.03-2.48-2.53-7.38.76-9.41Zm260.31 17.48c4.17-1.54 8.85 1.79 8 6.42-.71 4.93-7.11 6.27-10.11 2.55-2.56-3-1.25-7.27 2.11-8.97Zm-274.46 2.17c3.69.36 6.33 4.51 4.71 7.95-1.19 2.54-3.23 3.14-5.74 3.85-1.61-2.19-3.71-4.28-4.86-6.75-.82-3.21 3.02-5.68 5.89-5.05Z" fill="#7A624E"/>`,
  },
  defaultVariant: 'marking-1',
  defaultColor: undefined,
};

export type MarkingType = keyof typeof Markings.variants;
