import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Angel',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Engel',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'LONA DE LENO',
      slug: 'lona-de-leno',
      category: 'LONAS',
      image: '/images/lona.jpg', //679 x 829
      price: 260,
      countInStock: 15,
      brand: 'Aoking',
      rating: 4.5,
      numReviews: 20,
      description: 'Lona de leno uso pesado',
    },
    {
      // _id: '2',
      name: 'RUEDA PARA DIABLO',
      slug: 'rueda-para-diablo',
      category: 'RUEDAS',
      image: '/images/rueda.jpg',
      price: 85,
      countInStock: 10,
      brand: 'HOD',
      rating: 4.5,
      numReviews: 35,
      description: 'Rueda tipo rayo 12x3',
    },
    {
      // _id: '3',
      name: 'RODAJA FIJA',
      slug: 'rodaja-fija',
      category: 'RODAJAS',
      image: '/images/rodaja.jpg',
      price: 200,
      countInStock: 0,
      brand: 'HOD',
      rating: 4.0,
      numReviews: 20,
      description: 'Rodaja fija uso pesado',
    },
    {
      // _id: '4',
      name: 'ESTANTERÍA DE ALAMBRE',
      slug: 'estanteria-de-alambre',
      category: 'ESTANTERÍA',
      image: '/images/estante.jpg',
      price: 800,
      countInStock: 19,
      brand: 'HOD',
      rating: 4.5,
      numReviews: 42,
      description: 'Estantería de alambre multiusos',
    },
  ],
};

export default data;
