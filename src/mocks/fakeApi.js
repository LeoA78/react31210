const products = [
  { id: 1, category: 'hombre', title: 'Campera', price: 6800, description: 'Campera capucha Hoddie', pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_970892-MLA31077285725_062019-W.webp', stock: 20 },
  { id: 2, category: 'hombre', title: 'Zapatillas Topper', price: 11899, description: 'Topper Gordor II Hombre Adultos', pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_875526-MLA49201325445_022022-W.webp', stock: 10 },
  { id: 3, category: 'mujer', title: 'Jeans', price: 6500, description: 'Jeans Mujer Elastizado Tiro Medio Alto', pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_879978-MLA49630309704_042022-W.webp', stock: 30 },
  { id: 4, category: 'deportivo', title: 'Remera Deportiva', price: 6400, description: 'Remera Deportiva Mujer GDO Fit Running Ciclista', pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_762111-MLA40003691898_122019-W.webp', stock: 17 },
  { id: 5, category: 'deportivo', title: 'Zapatillas Adidas', price: 16900, description: 'Adidas Galaxy 5 Hombre Adultos', pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_801371-MLA49850442171_052022-W.webp', stock: 20 },
  { id: 6, category: 'hombre', title: 'Jogging', price: 8690, description: 'Jogging Hombre Sport 154 - Con Cierre - Ghy Polo Club', pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_975859-MLA46489359055_062021-W.webp', stock: 60 },
  { id: 7, category: 'hombre', title: 'Campera', price: 10999, description: 'Parka de abrigo con corderito negra y verde militar', pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_721899-MLA49503487315_032022-W.webp', stock: 24 },
  { id: 8, category: 'hombre', title: 'Pantalon Pampero', price: 6499, description: 'Pantalon Pampero Cargo de Trabajo Reforzado', pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_754706-MLA48174872438_112021-W.webp', stock: 54 },
  { id: 9, category: 'mujer', title: 'Babucha Jogger', price: 3599, description: 'Babucha Jogger Mujer Casual Frisa Pantalón Elástico Friza', pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_851855-MLA46130258721_052021-O.webp', stock: 17 },
  { id: 10, category: 'mujer', title: 'Pantuflas corderito', price: 7220, description: 'Pantuflas De Cuero Lanar Corderito Capellada', pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_912994-MLA46740337158_072021-O.webp', stock: 19 },
  { id: 11, category: 'deportivo', title: 'Short De Running', price: 1800, description: 'Short De Running - Unisex - Gdo Running Flow', pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_826572-MLA45272142297_032021-O.webp', stock: 46 },
  { id: 12, category: 'mujer', title: 'Canguro Peluche', price: 4590, description: 'Pack X 2 Canguro Peluche Bifaz De Mujer Oferta Envío Gratis', pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_989964-MLA45256400565_032021-O.webp', stock: 24 },
  { id: 13, category: 'deportivo', title: 'Bolso Grande', price: 5900, description: 'Bolso Grande Unisex Deportivo Reforzado Impermeable', pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_945535-MLA46881919606_072021-O.webp', stock: 37 },
  { id: 14, category: 'mujer', title: 'Cuello Térmico Multifunción', price: 900, description: 'Cuello Térmico Multifunción Tapaboca Moto Running Bici Sky', pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_797364-MLA46099601150_052021-O.webp', stock: 99 },
  { id: 15, category: 'mujer', title: 'Pijama Kigurumi', price: 6890, description: 'Pijama Kigurumi Unicornios Animales Mameluco Disfraz', pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_600331-MLA49736535058_042022-O.webp', stock: 32 },
  { id: 16, category: 'hombre', title: 'Buzos De Frisa', price: 5400, description: 'Buzos De Tela Frisa Algodón 100% Primera Calidad.', pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_886526-MLA46565296785_062021-O.webp', stock: 14 },
  { id: 17, category: 'infantil', title: 'Pijama Kigurumi', price: 6000, description: 'Pijama Kigurumi Niños Unicornios Animales Mameluco Disfraz', pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_628121-MLA49694646676_042022-O.webp', stock: 9 },
  { id: 18, category: 'mujer', title: 'Campera Inflable', price: 12000, description: 'Campera Inflable De Mujer Con Polar Y Capucha.', pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_782588-MLA41798847937_052020-O.webp', stock: 19 },
  { id: 19, category: 'infantil', title: 'Pijamas Stitch', price: 4300, description: 'Pijamas Personajes - Vexin Moda Infantil Stitch', pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_837075-MLA43208315484_082020-O.webp', stock: 36 },
  { id: 20, category: 'deportivo', title: 'Mochila Puma', price: 4700, description: 'Mochila Puma Deck Mini Messenger Clásica Negra Unisex', pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_846811-MLA49139878940_022022-O.webp', stock: 32 },
  { id: 21, category: 'infantil', title: 'Pijama León', price: 6600, description: 'Pijama Kigurumi Importado 2811 León Infantil De 110 A 140 Cm', pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_985472-MLA46183082050_052021-O.webp', stock: 11 },
  { id: 22, category: 'infantil', title: 'Medias Largas Infantiles', price: 1930, description: 'Pack X 6 Pares Medias Largas Infantiles Elemento Nene Nena', pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_830863-MLA49332904035_032022-O.webp', stock: 12 },
  { id: 23, category: 'hombre', title: 'Set Sweaters', price: 10000, description: 'Sweater Polera Hombre Slim Fit Premium Pack X 4u', pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_630203-MLA49886137753_052022-O.webp', stock: 44 },
  { id: 24, category: 'deportivo', title: 'Gorra Deportiva', price: 3200, description: 'Gorra Deportiva Running Oslo Unisex', pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_937200-MLA48883807543_012022-O.webp', stock: 67 },
  { id: 25, category: 'mujer', title: 'Campera Puffer', price: 12990, description: 'Campera Dama Puffer Mujer Metalizada Impermeable Premium', pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_815436-MLA49014444071_022022-O.webp', stock: 54 },
  { id: 26, category: 'infantil', title: 'Baberos Bandanas', price: 2650, description: 'Combo X 6 Baberos Bandanas Impermeables En El Reverso Nene', pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_682690-MLA50252521241_062022-O.webp', stock: 23 },
  { id: 27, category: 'hombre', title: 'Sweater Pullover', price: 6500, description: 'Sweater Hombre Medio Cierre Pullover De Lana Excelente', pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_804658-MLA50255124042_062022-O.webp', stock: 36 },
  { id: 28, category: 'infantil', title: 'Pantuflas Cars', price: 1900, description: 'Pantuflas Chicos Cars Rayo Mc Queen Personajes Infantiles', pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_856444-MLA49279438503_032022-O.webp', stock: 39 },
  { id: 29, category: 'deportivo', title: 'Calza Corta', price: 6700, description: 'Calza Corta Deportiva Bolsillos Unisex Fit Trail Running X2', pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_686581-MLA49714321882_042022-O.webp', stock: 76 },
  { id: 30, category: 'infantil', title: 'Pantuflas De Stitch', price: 1690, description: 'Pantuflas De Stitch Peluche Niños Chicos Infantil Invierno', pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_923628-MLA49266866393_032022-O.webp', stock: 88 },
  { id: 31, category: 'infantil', title: 'Pijama Dinosaurio', price: 5590, description: 'Pijama Kigurumi Niños Animales Mameluco Disfraz', pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_650925-MLA45788789615_052021-O.webp', stock: 63 },
  { id: 32, category: 'deportivo', title: 'Guantes Neoprene', price: 1100, description: 'Guantes De Neoprene Para Gimnasio Unisex', pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_618609-MLA46364450144_062021-O.webp', stock: 52 },
];

export const getData = (idCategory) => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        idCategory 
        ? resolve(products.filter(product => product.category === idCategory))
        : resolve(products);
      }, 2000);
    } else {
      reject("Ocurrió un error! no pudimos cargar los productos");
    }
  });
};

export const getItem = (productId) => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve(products.find(product => product.id === parseInt(productId)));
      }, 2000);
    } else {
      reject("Ocurrió un error! no pudimos cargar los productos");
    }
  });
};