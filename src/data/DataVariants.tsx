const VariantYtoTop = {
  hidden: {
    y: -200,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 90 },
  },
};

const VarianttoTop = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120 },
  },
};

const VariantYtoBottom = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 90 },
  },
};

const VariantOpacity = {
  hidden: {
  
  opacity: 0,
  },
  visible: {
   
    opacity: 1,
    transition: { type: 'spring', stiffness: 60 },
  },
}

export { VariantYtoTop, VariantYtoBottom, VariantOpacity, VarianttoTop };
