export type MenuCategory =
  | "Appetizers"
  | "Burritos"
  | "Taco Salad"
  | "Sopas"
  | "Quesadillas"
  | "Tacos"
  | "Drinks"
  | "Desserts"

export type GalleryCategory = "Food" | "Drinks" | "Interior"

export type MenuItem = {
  name: string
  description: string
  price: string
  category: MenuCategory
  tags?: string[]
}

export const site = {
  name: "Taqueria El Buchon",
  shortName: "El Buchon",
  description:
    "A polished Staten Island taqueria experience built around authentic Mexican street food, house-made flavor, and a warm neighborhood welcome.",
  address: "841 Castleton Ave, Staten Island, NY 10310",
  phone: "(718) 210-1875",
  phoneRaw: "7182101875",
  hours: [
    { label: "Sunday - Thursday", value: "11AM - 10PM" },
    { label: "Friday - Saturday", value: "11AM - 11PM" },
  ],
  heroTitle: "Authentic Mexican Street Food, Elevated",
  heroTagline:
    "Handmade tortillas, bold flavors, and a warm dining room crafted for memorable Staten Island nights.",
  story:
    "Taqueria El Buchon brings the vibrant flavors of Mexico to Staten Island with traditional recipes, high-quality ingredients, and a hospitality-first atmosphere that feels both celebratory and deeply rooted.",
  storyExtended:
    "Every dish is designed to capture the spirit of Mexican street food while offering a more polished, welcoming experience. From slow-cooked birria and sizzling tacos to house-made aguas frescas and late-night comfort favorites, the menu balances authenticity, color, and generosity in every course.",
  orderUrl: "https://order.taqueriaelbuchonsi.com/",
  sourceUrl: "https://taqueriaelbuchonsi.com/",
  mapEmbedUrl:
    "https://www.google.com/maps?q=841%20Castleton%20Ave%2C%20Staten%20Island%2C%20NY%2010310&z=15&output=embed",
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=841+Castleton+Ave,+Staten+Island,+NY+10310",
  cateringUrl: "https://taqueriaelbuchonsi.com/catering",
  socialLinks: [
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "TikTok", href: "https://www.tiktok.com/" },
    { label: "Facebook", href: "https://www.facebook.com/" },
  ],
} as const

export const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact & Catering" },
]

export const featuredDishes = [
  {
    name: "Quesabirria",
    description:
      "Short ribs, melted chihuahua cheese, and a rich side of consome for dipping.",
    price: "$16",
    image: "/taqueria-el-buchon-foods-04.jpg",
  },
  {
    name: "Ribeye Taco",
    description:
      "Grilled ribeye with guacamole, Oaxaca cheese, and caramelized onion on handmade tortillas.",
    price: "$5.5",
    image: "/tacos.jpg",
  },
  {
    name: "Housemade Horchata",
    description:
      "A smooth, cooling rice drink that balances the heat and richness of the menu beautifully.",
    price: "$6",
    image: "/drink.jpg",
  },
]

export const testimonials = [
  {
    quote:
      "I came with my compadre to have a good time with my friend Rey, a good friend for years, owner of El Buchon. The truth is we had a great time, the treatment with the boys and cooks was very friendly, I really recommend the octopus tacos and the nachos with chorizo, the fresh waters especially the horchata one, you will not be disappointed, thank you very much Friend Rey, we will see you there very soon another day.",
    name: "Carmen R.",
  },
  {
    quote:
      "First time going there I had a grilled chicken ceaser salad. It was fresh and the chicken was delicious and soft. I would go back",
    name: "Claire L.",
  },
  {
    quote:
      "Nice cozy environment….very friendly!! Food was good. Had bacon egg and cheese on everything bagel with coffee. Prices ate good …..took my mother and environment was good fir her.",
    name: "Cynthia Cofano",
  },
  {
    quote:
      "Food is So good! employees are very nice And the whole place is Amazing Really Recommend to go Here",
    name: "Denise G",
  },
  {
    quote:
      "Cute place. Good prices and the food was well made. Service was kind and helpful.",
    name: "Dee S.",
  },
  {
    quote: "Best spot around",
    name: "Tony S.",
  },
]

export const galleryImages: Array<{
  src: string
  alt: string
  category: GalleryCategory
}> = [
  { src: "/taqueria-el-buchon-foods-01.jpg", alt: "Fresh tacos plated for service", category: "Food" },
  { src: "/taqueria-el-buchon-foods-02.jpg", alt: "Colorful Mexican dishes on a warm table setting", category: "Food" },
  { src: "/taqueria-el-buchon-foods-03.jpg", alt: "Signature tacos with vibrant toppings", category: "Food" },
  { src: "/taqueria-el-buchon-foods-04.jpg", alt: "Quesabirria and consome", category: "Food" },
  { src: "/taqueria-el-buchon-foods-05.jpg", alt: "Mexican street food spread", category: "Food" },
  { src: "/taqueria-el-buchon-foods-06.jpg", alt: "Close-up of tacos and garnishes", category: "Food" },
  { src: "/taqueria-el-buchon-foods-07.jpg", alt: "Premium plated Mexican specialties", category: "Food" },
  { src: "/taqueria-el-buchon-foods-08.jpg", alt: "Restaurant ambiance and plated dishes", category: "Interior" },
  { src: "/taqueria-el-buchon-foods-09.jpg", alt: "Warm dining scene with featured dishes", category: "Interior" },
  { src: "/taqueria-el-buchon-foods-11.jpg", alt: "Richly styled restaurant meal", category: "Food" },
  { src: "/taqueria-el-buchon-foods-13.jpg", alt: "Dining room flavor story image", category: "Interior" },
  { src: "/taqueria-el-buchon-foods-14.jpg", alt: "Signature dish and premium plating", category: "Food" },
  { src: "/burritos.jpg", alt: "Loaded burritos", category: "Food" },
  { src: "/quesadillas.jpg", alt: "Golden quesadillas", category: "Food" },
  { src: "/soup.jpg", alt: "Hearty soup and consome", category: "Food" },
  { src: "/tacos.jpg", alt: "Street tacos", category: "Food" },
  { src: "/salad.jpg", alt: "Fresh taco salad", category: "Food" },
  { src: "/drink.jpg", alt: "Refreshing house drink", category: "Drinks" },
]

export const menuCategories: MenuCategory[] = [
  "Appetizers",
  "Burritos",
  "Taco Salad",
  "Sopas",
  "Quesadillas",
  "Tacos",
  "Drinks",
  "Desserts",
]

export const menuItems: MenuItem[] = [
  { category: "Appetizers", name: "Chips and salsa", description: "", price: "$6", tags: ["Vegetarian"] },
  { category: "Appetizers", name: "Guacamole with chips", description: "", price: "$10", tags: ["Vegetarian", "Gluten-Free"] },
  { category: "Appetizers", name: "Empanadas", description: "Camarón or Birria; salsa verde or chipotle mayo.", price: "$4" },
  { category: "Appetizers", name: "Flautas - Queso", description: "Served with fresh crema, lettuce, cotija cheese.", price: "$10", tags: ["Vegetarian"] },
  { category: "Appetizers", name: "Flautas - Papá con chorizo", description: "Served with fresh crema, lettuce, cotija cheese.", price: "$10" },
  { category: "Appetizers", name: "Flautas - Birria", description: "Served with fresh crema, lettuce, cotija cheese.", price: "$12" },
  { category: "Appetizers", name: "Nachos (base)", description: "Pinto beans, chihuahua cheese, pico de gallo, crema, cotija cheese.", price: "$12", tags: ["Vegetarian"] },
  { category: "Appetizers", name: "Nachos - Steak", description: "", price: "$16" },
  { category: "Appetizers", name: "Nachos - Shrimp", description: "", price: "$16" },
  { category: "Appetizers", name: "Nachos - Chicken", description: "", price: "$14" },
  { category: "Appetizers", name: "Nachos - Carnitas", description: "", price: "$14" },
  { category: "Appetizers", name: "Nachos - Chorizo", description: "", price: "$14" },
  { category: "Appetizers", name: "Nachos - Mixtos (2 meats)", description: "", price: "$18" },

  { category: "Burritos", name: "Steak", description: "Served with Mexican rice and pinto beans, pico de gallo, chihuahua cheese.", price: "$16" },
  { category: "Burritos", name: "Chicken", description: "Served with Mexican rice and pinto beans, pico de gallo, chihuahua cheese.", price: "$14" },
  { category: "Burritos", name: "Chorizo", description: "Served with Mexican rice and pinto beans, pico de gallo, chihuahua cheese.", price: "$14" },
  { category: "Burritos", name: "Carnitas", description: "Served with Mexican rice and pinto beans, pico de gallo, chihuahua cheese.", price: "$14" },
  { category: "Burritos", name: "Birria", description: "Served with Mexican rice and pinto beans, pico de gallo, chihuahua cheese.", price: "$16" },
  { category: "Burritos", name: "Camarón", description: "Served with Mexican rice and pinto beans, pico de gallo, chihuahua cheese.", price: "$16" },
  { category: "Burritos", name: "Mixto (2 meats)", description: "Served with Mexican rice and pinto beans, pico de gallo, chihuahua cheese.", price: "$18" },
  { category: "Burritos", name: "Lengua", description: "Served with Mexican rice and pinto beans, pico de gallo, chihuahua cheese.", price: "$14" },

  { category: "Taco Salad", name: "Base salad", description: "Rice, pinto beans, romaine lettuce, guacamole, pico de gallo, crema, cotija cheese, cilantro lime dressing.", price: "$12", tags: ["Vegetarian"] },
  { category: "Taco Salad", name: "Steak", description: "Rice, pinto beans, romaine lettuce, guacamole, pico de gallo, crema, cotija cheese, cilantro lime dressing.", price: "$16" },
  { category: "Taco Salad", name: "Chicken", description: "Rice, pinto beans, romaine lettuce, guacamole, pico de gallo, crema, cotija cheese, cilantro lime dressing.", price: "$14" },
  { category: "Taco Salad", name: "Chorizo", description: "Rice, pinto beans, romaine lettuce, guacamole, pico de gallo, crema, cotija cheese, cilantro lime dressing.", price: "$14" },
  { category: "Taco Salad", name: "Shrimp", description: "Rice, pinto beans, romaine lettuce, guacamole, pico de gallo, crema, cotija cheese, cilantro lime dressing.", price: "$16" },
  { category: "Taco Salad", name: "Mixture (2 meats)", description: "Rice, pinto beans, romaine lettuce, guacamole, pico de gallo, crema, cotija cheese, cilantro lime dressing.", price: "$18" },

  { category: "Sopas", name: "B-Ramen", description: "Ramen noodles, short ribs, egg drop, scallions, consomé, onion, cilantro.", price: "$16" },
  { category: "Sopas", name: "Consomé de pollo", description: "Arroz, garbanzos, handmade tortillas.", price: "$16" },
  { category: "Sopas", name: "Consomé de birria", description: "Garbanzo, birria, handmade tortillas.", price: "$16" },

  { category: "Quesadillas", name: "Steak", description: "Served in flour tortilla with pico de gallo and fresh crema.", price: "$16" },
  { category: "Quesadillas", name: "Chicken", description: "Served in flour tortilla with pico de gallo and fresh crema.", price: "$12" },
  { category: "Quesadillas", name: "Chorizo", description: "Served in flour tortilla with pico de gallo and fresh crema.", price: "$14" },
  { category: "Quesadillas", name: "Carnitas", description: "Served in flour tortilla with pico de gallo and fresh crema.", price: "$14" },
  { category: "Quesadillas", name: "Lengua", description: "Served in flour tortilla with pico de gallo and fresh crema.", price: "$16" },
  { category: "Quesadillas", name: "Camarón", description: "Served in flour tortilla with pico de gallo and fresh crema.", price: "$16" },
  { category: "Quesadillas", name: "Gringa", description: "Pastor, fresh pineapple, melted chihuahua cheese.", price: "$16" },
  { category: "Quesadillas", name: "La Loca", description: "Chorizo, steak, mushroom, onion, cactus, cheese.", price: "$16" },
  { category: "Quesadillas", name: "La Flaca (veggie)", description: "Fresh spinach, mushroom, cactus, cheese.", price: "$16", tags: ["Vegetarian"] },
  { category: "Quesadillas", name: "Quesabirria", description: "Short ribs, melted chihuahua cheese, consomé on the side.", price: "$16" },

  { category: "Tacos", name: "Carne Asada (Steak)", description: "Marinated skirt steak, onion, cilantro.", price: "$4.5", tags: ["Gluten-Free"] },
  { category: "Tacos", name: "Ribeye", description: "Grilled ribeye, handmade tortilla, guacamole, Oaxaca cheese, caramelized onion.", price: "$5.5" },
  { category: "Tacos", name: "Pollo Asado (Chicken)", description: "Adobo & spice marinated, onion, cilantro.", price: "$4.5", tags: ["Gluten-Free"] },
  { category: "Tacos", name: "Mexican Chorizo", description: "Crispy, onion, cilantro.", price: "$4.5", tags: ["Gluten-Free"] },
  { category: "Tacos", name: "Al Pastor", description: "Achiote & pineapple marinated pork, onion, cilantro, caramelized pineapple.", price: "$4.5" },
  { category: "Tacos", name: "Carnitas", description: "5 hrs braised in XX beer, onion, cilantro.", price: "$4.5", tags: ["Gluten-Free"] },
  { category: "Tacos", name: "Lengua (Beef tongue)", description: "3 hrs braised, onion, cilantro.", price: "$5.5", tags: ["Gluten-Free"] },
  { category: "Tacos", name: "Birria", description: "5 hrs slow-cooked short ribs, onion, cilantro, consomé.", price: "$5.5" },
  { category: "Tacos", name: "Veggie", description: "Nopales, caramelized onion, portobello, queso fresco, pico de gallo.", price: "$4.5", tags: ["Vegetarian"] },
  { category: "Tacos", name: "Camarón (Shrimp)", description: "Tempura, chipotle mayo, cilantro, mango pico de gallo.", price: "$5.5" },
  { category: "Tacos", name: "Baja Fish", description: "Tempura cod, chipotle mayo, mango pico de gallo.", price: "$5.5" },
  { category: "Tacos", name: "Pulpo (Octopus)", description: "Guacamole, caramelized onion, Oaxaca cheese.", price: "$5.5" },
  { category: "Tacos", name: "Chicharrón", description: "Guacamole, crispy chicharrón, chiltepin, pickle, red onion.", price: "$5.5" },

  { category: "Drinks", name: "Soft drinks, Topo Chico, Mexican Coca-Cola, Jarritos, Tamarind, Lime, Fruit Punch, Grapefruit", description: "", price: "$3.5" },
  { category: "Drinks", name: "Limonade, Jamaica (hibiscus), Horchata", description: "", price: "$6" },
  { category: "Drinks", name: "Coffee, Tea", description: "", price: "$3.5" },
  { category: "Drinks", name: "Café Mexicano", description: "", price: "—" },

  { category: "Desserts", name: "Churros", description: "", price: "$8" },
  { category: "Desserts", name: "Flan", description: "", price: "$6" },
  { category: "Desserts", name: "3 Leches", description: "", price: "$8" },
]
