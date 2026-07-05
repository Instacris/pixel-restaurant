import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';
import { 
  Utensils, 
  Coffee, 
  IceCream, 
  Wine, 
  Pizza, 
  Sandwich,
  ShoppingCart,
  Star,
  Clock,
  DollarSign,
  Zap,
  Gamepad2,
  GlassWater
} from 'lucide-react';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('entradas');
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = [
    { id: 'entradas', name: 'ENTRADAS', icon: Utensils, color: '#ff6b6b' },
    { id: 'principales', name: 'PRINCIPALES', icon: Pizza, color: '#4ecdc4' },
    { id: 'bebidas', name: 'BEBIDAS', icon: Coffee, color: '#45b7d1' },
    { id: 'postres', name: 'JUEGOS', icon: Gamepad2, color: '#f9ca24' },
    { id: 'especiales', name: 'vasos', icon: GlassWater, color: '#f0932b' }
  ];

  const menuItems = {
entradas: [
  {
    id: 1,
    name: 'Tabla Frita',
    description: 'Disfruta nuestra tablas para compartir mientras te sumerges en emocionantes vieojuegos en Arcade Bar',
    price: 10990,
    image: '/images/Entrada1.png',
    difficulty: 'MEDIUM',
    time: '6 MIN',
  ingredients: [
    'papas fritas',
    'Aros de cebolla (3u)',
    'Empanadas de queso (5u)',
    'trago incluido (2u)',
    'Carne mechada',
    'Tequeños (2u)',
    'Uso de consolas incluidas'
  ]
  },
  {
    id: 2,
    name: 'Tabla kid',
    description: 'Prepara tu paladar picotear mientras disfrutas de épicas batallas en tus consolas favoritas 🕹️🎉',
    price: 7990,
    image: '/images/Entrada2.png',
    difficulty: 'EASY',
    time: '6 MIN',
  ingredients: [
    'Empanas de queso (20u)',
    'aros de cebolla (9u)',
    'Salsa a eleccion (aparte)',
    'Uso de consolas incluidas'
  ]
  }
],

principales: [
  {
    id: 3,
    name: 'Mario Burger',
    description: 'Salta al mundo del sabor con nuestra increíble Mario Burger! 🍔🍄🌟 ',
    price: 18990,
    image: '/images/Principal1.png',
    difficulty: 'HARD',
    time: '15 MIN',
  ingredients: [
    'Palta',
    'Tomate Fresco',
    'Mayo Casera',
    'Papas fritas',
    'Salsas a eleccion (2u)'
  ]
  },
  {
    id: 4,
    name: 'Mechada Luigi',
    description: 'Nivel de sabor desbloqueado en Arcade Bar! Prueba nuestro sándwich Mechada Luigi 🕹️🍔',
    price: 16990,
    image: '/images/Principal2.png',
    difficulty: 'MEDIUM',
    time: '13 MIN',
  ingredients: [
    'Palta',
    'Tomate Fresco',
    'Mayo Casera',
    'Papas fritas',
    'Carne Mechada de la casa',
    'Salsas a eleccion (2u)'
  ]
  },
  {
    id: 5,
    name: 'BOWSER BURGER',
    description: 'Adelante, valientes exploradores de sabores! 🍔💥 La Bowser Burger es la joya del Reino Champiñón ¡DOBLE TODO!🧀🥓🌱',
    price: 14990,
    image: '/images/Principal3.png',
    difficulty: 'HARD',
    time: '18 MIN',
  ingredients: [
    'Doble Burger',
    'Doble queso',
    'Doble aros de cebolla',
    'Doble tocino',
    'Salsa BBQ',
    'Lechuga Fresca'
  ]
  },
    {
    id: 6,
    name: 'SONIC BURGER',
    description: 'Acelera al máximo con nuestra Sonic Speed Burger 💙🧀',
    price: 14990,
    image: '/images/Principal5.png',
    difficulty: 'EASY',
    time: '13 MIN',
  ingredients: [
    'Carne Vacuno',
    'Doble cheddar',
    'Cebolla crispy',
    'Salsa aparte (mayo + mostaza + toque BBQ)',
    'Salsa aparte Queso Cheddar'
  ]
  },
    {
    id: 7,
    name: '💚 TRIFORCE VEGAN BURGER',
    description: 'Despierta el poder de Hyrule con sus mejores cultivos🌿⚔️',
    price: 14990,
    image: '/images/Principal4.png',
    difficulty: 'MEDIUM',
    time: '18 MIN',
  ingredients: [
    'Medallon Vegetal crujiente',
    'Queso Vegano Fundido',
    'Mix lechuga (verde + morada)',
    'Pimiento asado',
    'Hamburguesa vegetal industrial tipo Beyond'
  ]
  },
    {
    id: 8,
    name: 'MECHADA SLUG',
    description: 'Carne mechada jugosa, gouda fundido y cebolla caramelizada. Lista para subir de nivel',
    price: 14990,
    image: '/images/Principal6.png',
    difficulty: 'MEDIUM',
    time: '18 MIN',
  ingredients: [
    'Mechada de la casa',
    'Queso Vegano Fundido',
    'Tomate Asado',
    'Papas Fritas',
    'Salsa Mayo Ajo',
    'Salsa tartara'
  ]
  },
    {
    id: 9,
    name: '¡WAKA-WAKA-WAKA!',
    description: 'Una delicia tan poderosa que ni los fantasmas se atreven a acercarse.',
    price: 14990,
    image: '/images/Principal7.png',
    difficulty: 'MEDIUM',
    time: '18 MIN',
  ingredients: [
    'Mechada de la casa',
    'Queso Gouda Fundido',
    'Mix de champiñones ahumados salteados',
    'Cebolla salteada',
    'Mayonesa casera',
    'Dip aparte (cheddar o salsa burger)',
    'Papas fritas clásicas'
  ]
  },
    {
    id: 10,
    name: '🟣BALANCE BURGER',
    description: 'Poder infinito en cada mordida. Perfectamente equilibrada… como todo debería estar',
    price: 14990,
    image: '/images/Principal8.png',
    difficulty: 'MEDIUM',
    time: '18 MIN',
  ingredients: [
    'Triple hamburguesa de vacuno',
    'Triple queso cheddar fundido',
    'Pepinillos',
    'Cebolla morada',
    'Lechuga',
    '🍟 Papas hilo dentro de la burger',
    'Mayo casera',
    'Papas fritas clásicas',
    '2 dips (mostaza y salsa burger)'
  ]
  },
    {
    id: 11,
    name: '🦖T-REX KRISPY BURGER',
    description: 'Crujiente filete de pollo krispy, cheddar fundido y salsa especial en pan brioche. Listo para dominar la isla del sabor.',
    price: 14990,
    image: '/images/Principal10.png',
    difficulty: 'MEDIUM',
    time: '18 MIN',
  ingredients: [
    'Filete de pollo crispy (pollo krispy)',
    'Queso cheddar fundido',
    'Coleslaw (repollo morado + blanco con salsa)',
    'Pepinillos',
    'Cebolla morada',
    'Papas fritas clásicas'
  ]
  }


],

bebidas: [
  {
    id: 6,
    name: 'Coctel Adulto',
    description: 'hasta las creaciones más originales y exóticas de nuestra carta de autor. 😍🍹',
    price: 4990,
    image: '/images/bebida1.png',
    difficulty: 'EASY',
    time: '1 MIN',
  ingredients: [
    'Mojito',
    'Margarita',
    'Piña Colada',
    'Caipirionha',
    'Frutos en el trago'
  ]
  },
  {
    id: 7,
    name: 'Jugos Naturales',
    description: 'Jugos Naturales frescos para este verano.',
    price: 6990,
    image: '/images/bebida2.png',
    difficulty: 'EASY',
    time: '3 MIN',
  ingredients: [
    'Mango',
    'Piña',
    'Frutos del bosque',
    'Maraculla'
  ]
  },
  {
    id: 8,
    name: 'Ronkey Kong',
    description: 'Descubre el sabor único de la jungla con nuestro fascinante trago temático Ronkey Kong.',
    price: 7990,
    image: '/images/bebida3.png',
    difficulty: 'EASY',
    time: '4 MIN',
  ingredients: [
    'Ron macerado en platano',
    'Jugo de Limon'
  ]
  },
  {
    id: 8,
    name: 'Kirby Dream',
    description: 'Prueba nuestro refrescante trago temático Kirby Dream.🕹️🍹',
    price: 7990,
    image: '/images/bebida4.png',
    difficulty: 'EASY',
    time: '4 MIN',
  ingredients: [
    'Vodka',
    'Pimiento sichuan',
    'Pure de lychee'
  ]
  },
  {
    id: 8,
    name: 'Summer Luigi',
    description: 'Sumérgete en un oasis de frescura con nuestro nuevo trago temático Summer Luigi🍹🍏',
    price: 7990,
    image: '/images/bebida5.png',
    difficulty: 'MEDIUM',
    time: '4 MIN',
  ingredients: [
    'gin infusionado en albahaca',
    'licor de manzana verde',
    'zumo de naranja',
    'syrup de manzana verde',
    'toque efervescente del espumante'
  ]
  },
  {
    id: 8,
    name: 'Summer Mario',
    description: '¡Nuestro trago Summer Mario es tan delicioso que hasta Bowser reconsideraría sus malvados planes para disfrutarlo! 🍄🍹',
    price: 7990,
    image: '/images/bebida6.png',
    difficulty: 'MEDIUM',
    time: '4 MIN',
  ingredients: [
    'Pisco',
    'licor de frutilla',
    'zumo de naranja',
    'almíbar de piña',
    'zumo de maracuyá'
  ]
  },
  {
    id: 8,
    name: 'Pacman Cítric',
    description: 'Prepárate para saborear el poder amarillo de nuestro Pacman Cítric sin alcohol! 🍊🍋🍓🕹️',
    price: 7990,
    image: '/images/bebida7.png',
    difficulty: 'EASY',
    time: '4 MIN',
  ingredients: [
    'naranja',
    'Limon',
    'Pomelo',
    'Maracuya',
    'Ginger ale',
    'toque dulce del syrup de frutilla'
  ]
  },
  {
    id: 8,
    name: 'Sweet Peach',
    description: 'Prepárense para un viaje delicioso con nuestro trago temático Sweet Peach 🍑💖',
    price: 7990,
    image: '/images/bebida8.png',
    difficulty: 'EASY',
    time: '4 MIN',
  ingredients: [
    'naranja',
    'Limon',
    'Pomelo',
    'Maracuya',
    'Ginger ale',
    'toque dulce del syrup de frutilla'
  ]
  }

  


],

postres: [
  {
    id: 9,
    name: 'Nintendo Switch',
    description: 'Disfruta de la mejor consola de nintendo actualmente',
    price: 7990,
    image: '/images/Switch.webp',
    difficulty: 'easy',
    time: '1 HRS',
  ingredients: [
    'º',
    'º',
    'º',
    'º'
  ]
  },
  {
    id: 10,
    name: 'Xbox One',
    description: 'Cantidad y Calidad es lo que ofrece XBOX para nuestros clientes',
    price: 9990,
    image: '/images/XboxOne.jpg',
    difficulty: 'MEDIUM',
    time: '1 HRS',
  ingredients: [
    'º',
    'º',
    'º',
    'º'
  ]
  }
],

especiales: [
  {
    id: 11,
    name: 'Deadpool 🟥⬛',
    description: 'Rompe las reglas, bébelo todo… y si sobrevives, repite',
    price: 29990,
    image: '/images/baso1.png',
    difficulty: 'LEGENDARY',
    time: '45 MIN',
    ingredients: [
      'º',
      'º',
      'º',
      'º'
    ]
  },
  {
    id: 12,
    name: 'Pikachu ⚡',
    description: 'Una chispa, un sorbo… y la fiesta se electrifica.',
    price: 6990,
    image: '/images/baso2.png',
    difficulty: 'LEGENDARY',
    time: '1 MIN',
    ingredients: [
      'Plástico resistente',
      'Diseño pixel',
      'Capacidad gamer',
      'Edición retro'
    ]
  },
  {
    id: 13,
    name: 'Iron Man 🟥🟡',
    description: 'Activa tu modo héroe… este trago viene con reactor incluido',
    price: 7990,
    image: '/images/baso3.png',
    difficulty: 'LEGENDARY',
    time: '1 MIN',
    ingredients: [
      'Material premium',
      'Gráficos power-up',
      'Antiderrame',
      'Edición limitada'
    ]
  },
  {
    id: 14,
    name: 'Mario 🍄',
    description: 'Un sorbo y subes de nivel… ¡aquí no hay Game Over!',
    price: 8990,
    image: '/images/baso4.png',
    difficulty: 'LEGENDARY',
    time: '2 MIN',
    ingredients: [
      'Cerámica',
      'Arte arcade',
      'Alta resistencia',
      'Coleccionable'
    ]
  },
  {
    id: 15,
    name: 'Sonic 💙',
    description: 'Tómalo rápido… o se te escapa a velocidad supersónica.',
    price: 9990,
    image: '/images/baso5.png',
    difficulty: 'LEGENDARY',
    time: '2 MIN',
    ingredients: [
      'Plástico translúcido',
      'Colores neón',
      'Estilo futurista',
      'Edición gamer'
    ]
  },
  {
    id: 16,
    name: 'Majin Buu🍬',
    description: 'Dulce, poderoso… y peligroso si te confías',
    price: 12990,
    image: '/images/baso6.png',
    difficulty: 'LEGENDARY',
    time: '3 MIN',
    ingredients: [
      'Vidrio templado',
      'Grabado premium',
      'Edición PRO',
      'Alta durabilidad'
    ]
  },
  {
    id: 17,
    name: 'Gengar 👻',
    description: 'Aparece de la nada… y desaparece en un solo trago.',
    price: 14990,
    image: '/images/baso7.png',
    difficulty: 'LEGENDARY',
    time: '3 MIN',
    ingredients: [
      'Material exclusivo',
      'Diseño final boss',
      'Coleccionista',
      'Ultra resistente'
    ]
  },
    {
    id: 18,
    name: 'Capitán América 🛡️',
    description: 'Clásico, fuerte y directo… como un verdadero héroe.',
    price: 14990,
    image: '/images/baso8.png',
    difficulty: 'LEGENDARY',
    time: '3 MIN',
    ingredients: [
      'Material exclusivo',
      'Diseño final boss',
      'Coleccionista',
      'Ultra resistente'
    ]
  },

      {
    id: 18,
    name: 'Charmander 🔥',
    description: 'Pequeño, ardiente… y listo para encender la noche',
    price: 14990,
    image: '/images/baso10.png',
    difficulty: 'LEGENDARY',
    time: '3 MIN',
    ingredients: [
      'Material exclusivo',
      'Diseño final boss',
      'Coleccionista',
      'Ultra resistente'
    ]
  },

      {
    id: 18,
    name: 'Psyduck 🐤',
    description: 'No sabes qué está pasando… pero este trago igual te pega.',
    price: 14990,
    image: '/images/baso11.png',
    difficulty: 'LEGENDARY',
    time: '3 MIN',
    ingredients: [
      'Material exclusivo',
      'Diseño final boss',
      'Coleccionista',
      'Ultra resistente'
    ]
  },

      {
    id: 18,
    name: 'Bulbasaur 🌱',
    description: 'Relajado al inicio… pero crece fuerte con cada sorbo.',
    price: 14990,
    image: '/images/baso12.png',
    difficulty: 'LEGENDARY',
    time: '3 MIN',
    ingredients: [
      'Material exclusivo',
      'Diseño final boss',
      'Coleccionista',
      'Ultra resistente'
    ]
  },

      {
    id: 18,
    name: 'Super Saiyajin (Goku) ⚡',
    description: 'Siente el poder subir… este trago no es nivel humano.',
    price: 14990,
    image: '/images/baso13.png',
    difficulty: 'LEGENDARY',
    time: '3 MIN',
    ingredients: [
      'Material exclusivo',
      'Diseño final boss',
      'Coleccionista',
      'Ultra resistente'
    ]
  },

      {
    id: 18,
    name: 'Sonic (torso)💙',
    description: 'Rápido, intenso… no todos pueden seguirle el ritmo.',
    price: 14990,
    image: '/images/baso14.png',
    difficulty: 'LEGENDARY',
    time: '3 MIN',
    ingredients: [
      'Material exclusivo',
      'Diseño final boss',
      'Coleccionista',
      'Ultra resistente'
    ]
  },

        {
    id: 18,
    name: 'Princesa Peach 👑',
    description: 'Dulce por fuera… pero con carácter de reina.',
    price: 14990,
    image: '/images/baso15.png',
    difficulty: 'LEGENDARY',
    time: '3 MIN',
    ingredients: [
      'Material exclusivo',
      'Diseño final boss',
      'Coleccionista',
      'Ultra resistente'
    ]
  },

        {
    id: 18,
    name: 'Pac-Man 🟡',
    description: 'Un clásico que nunca falla… ¡waka waka hasta el fondo!',
    price: 14990,
    image: '/images/baso16.png',
    difficulty: 'LEGENDARY',
    time: '3 MIN',
    ingredients: [
      'Material exclusivo',
      'Diseño final boss',
      'Coleccionista',
      'Ultra resistente'
    ]
  },

        {
    id: 18,
    name: 'Luigi 🟢',
    description: 'El underdog que sorprende… este trago viene con bonus oculto.',
    price: 14990,
    image: '/images/baso17.png',
    difficulty: 'LEGENDARY',
    time: '3 MIN',
    ingredients: [
      'Material exclusivo',
      'Diseño final boss',
      'Coleccionista',
      'Ultra resistente'
    ]
  },
  

]


  };

  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(cartItem => cartItem.id === item.id);
      if (existing) {
        return prev.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    
    toast({
      title: "¡ITEM AÑADIDO!",
      description: `${item.name} agregado al carrito`,
      duration: 2000,
    });
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'EASY': return '#22c55e';
      case 'MEDIUM': return '#f59e0b';
      case 'HARD': return '#ef4444';
      case 'LEGENDARY': return '#8b5cf6';
      default: return '#22c55e';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 retro-grid opacity-20"></div>
      
      {/* Scanlines Effect */}
      <div className="absolute inset-0 scanlines crt-flicker"></div>

      {/* Floating Pixels */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.header 
          className="text-center py-8 px-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-green-400 pixel-text mb-4"
            animate={{ 
              textShadow: [
                '2px 2px 0 #22c55e',
                '4px 4px 0 #16a34a',
                '2px 2px 0 #22c55e'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            PIXEL RESTAURANT
          </motion.h1>
          <motion.p 
            className="text-green-300 text-sm md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            ¡COMIDA RETRO PARA GAMERS LEGENDARIOS!
          </motion.p>
        </motion.header>

        {/* Cart Button */}


        {/* Cart Sidebar */}


        {/* Category Navigation */}
        <motion.nav 
          className="flex flex-wrap justify-center gap-4 px-4 mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`pixel-button p-4 flex flex-col items-center gap-2 min-w-[120px] ${
                  selectedCategory === category.id ? 'pixel-glow' : ''
                }`}
                style={{
                  borderColor: category.color,
                  boxShadow: selectedCategory === category.id ? `0 0 20px ${category.color}` : ''
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                <IconComponent 
                  className="w-8 h-8" 
                  style={{ color: category.color }}
                />
                <span 
                  className="text-xs font-bold"
                  style={{ color: category.color }}
                >
                  {category.name}
                </span>
              </motion.button>
            );
          })}
        </motion.nav>

        {/* Menu Items */}
        <motion.div 
          className="max-w-6xl mx-auto px-4 pb-8"
          layout
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {menuItems[selectedCategory]?.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="bg-gray-800 neon-border p-6 menu-item-hover relative overflow-hidden flex flex-col"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Item Image */}
                  <div className="mb-4 relative">
<img  
  className="w-full h-48 object-contain bg-black pixel-border"

  src={item.image}
  alt={item.name}
/>

                    
                    {/* Difficulty Badge */}
                    <div 
                      className="absolute top-2 right-2 px-2 py-1 text-xs font-bold neon-border"
                      style={{ 
                        backgroundColor: getDifficultyColor(item.difficulty),
                        color: 'white'
                      }}
                    >
                      {item.difficulty}
                    </div>
                  </div>

                  {/* Item Info */}
                  <h3 className="text-xl font-bold text-green-400 pixel-text mb-2">
                    {item.name}
                  </h3>
                  
                  <p className="text-green-300 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Stats */}
                  <div className="flex justify-between items-center mb-4 text-xs">
                    {!['especiales', 'postres'].includes(selectedCategory) && (
  <div className="flex items-center gap-1 text-yellow-400">
    <Clock className="w-4 h-4" />
    {item.time}
  </div>
)}

{selectedCategory !== 'especiales' && (
  <div className="flex items-center gap-1 text-green-400">
    <DollarSign className="w-4 h-4" />
    {'$' + item.price.toLocaleString('es-CL')}
  </div>
)}
                  </div>

                  {/* Add to Cart Button */}
{!['especiales', 'postres'].includes(selectedCategory) && (
  <div className="mt-auto">
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Button
        onClick={() => setSelectedItem(item)}
        className="w-full pixel-button pixel-glow"
        size="lg"
      >
        VER INGREDIENTES
      </Button>
    </motion.div>
  </div>
)}



                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/10 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Footer */}

        <AnimatePresence>
  {selectedItem && (
    <motion.div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-gray-900 neon-border max-w-md w-full p-6 relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
      >
        {/* Cerrar */}
        <button
          onClick={() => setSelectedItem(null)}
          className="absolute top-2 right-2 text-green-400 font-bold text-lg"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-green-400 pixel-text mb-4">
          INGREDIENTES
        </h2>

<div className="text-green-300 space-y-1 text-sm">
  {selectedItem.ingredients?.map((ing, index) => (
    <p key={index}>{ing}</p>
  ))}
</div>

      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

        <motion.footer 
          className="text-center py-8 px-4 border-t border-green-400/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-green-400 text-sm">
            © 2024 PIXEL RESTAURANT - GAME OVER HUNGER!
          </p>
          <div className="flex justify-center gap-4 mt-4">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-green-400"
                animate={{
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.footer>
      </div>

      <Toaster />
    </div>
  );
};

export default App;