const formatRp = (angka) => {
  const newFormat = Number(angka).toLocaleString('id', {
    style: 'currency',
    currency: 'IDR',
  });

  return newFormat;
};

export default formatRp;
