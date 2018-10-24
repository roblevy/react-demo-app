const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/happy-hour');
// Out of the db folder, into models and find cocktail.js
const Cocktail = require('../models/cocktail');

const cocktailData = [
  {
    id: '1a34efs',
    name: 'Bramble',
    ingredients: [ 'gin', 'lemon juice', 'blackberries', 'cranberries' ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Bramble_Cocktail1.jpg/440px-Bramble_Cocktail1.jpg'
  },
  {
    id: '2a',
    name: 'Embankment Garden',
    ingredients: ['Oxley Gin', 'Spiced Martini Bianco', 'Fresh Lime Juice', 'Fig Leaf Syrup'],
    image: 'https://www.diffordsguide.com/media/pubs/beaufort2.jpg'
  },
  {
    id: '2b',
    name: 'Gimlet',
    ingredients: [ 'gin', 'lime', 'soda' ],
    image: 'https://www.rachaelraymag.com/.image/t_share/MTUxNDE4OTkxNzU4OTQzNDg3/sparkling-tequila-gimlet-103191692.jpg'
  },
  {
    id: '3c',
    name: 'Espresso Martini',
    ingredients: [ 'Vanilla Vodka', 'Kahlua', 'Double Espresso', 'Sugar Syrup' ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Bistrot_Bruno_Loubet%2C_Clerkenwell%2C_London_%284574785649%29.jpg/440px-Bistrot_Bruno_Loubet%2C_Clerkenwell%2C_London_%284574785649%29.jpg'
  },
  {
    id: '5g',
    name: 'Long Island Iced Tea',
    ingredients: ['Tequila', 'Vodka', 'White Rum', 'Triple Sec', 'Lemon Juice', 'Cola', 'Gin', 'Gomme Syrup'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Long_Island_Iced_Teas.jpg/440px-Long_Island_Iced_Teas.jpg'
  },
  {
    id: '4p',
    name: 'Fishbowl',
    ingredients: [ 'WKD blue', 'Vodka', 'Lemon' ],
    image: 'https://images.ecosia.org/ME4YQ-T8ZmT1DyDKx8qg3EW339o=/0x390/smart/http%3A%2F%2Fwww.barmans.co.uk%2Fproductimg%2F35343_large.jpg'
  },
  {
    id: '9q',
    name: 'Pornstar Martini',
    ingredients: ['Vanilla Vodka', 'Passion Fruit puree', 'Passion Fruit Liquer', 'Prosecco'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr3ceug_5jsQPob5LyBtuvy4WMvzu4PrEcngSzoeFhYQPFXYmz'
  },
  {
    id: '5j',
    name: 'Flaming Giraffe',
    ingredients: [ 'coffee liqueur', 'butterscotch schnapps', 'rum' ],
    image: 'https://i.pinimg.com/originals/f3/ad/ed/f3aded59ee4070a73d92280b19bf14f1.jpg'
  },
  {
    id: '1k',
    name: 'Swimming Pool',
    ingredients: [ 'Pineapple juice', 'Vodka', 'Coconut Cream', 'White Rum', 'Cream', 'Blue Curaçao' ],
    image: 'https://images.ichkoche.at/data/image/variations/496x384/3/swimming-pool-img-23419.jpg'
  },
  {
    id: '0o',
    name: 'fernet with coke',
    ingredients: [ 'Fernet', 'Coca Cola', 'An alcoholic beverage of some description' ],
    image: 'https://static.urbandaddy.com/uploads/assets/image/articles/standard/710f0a7db97e290c3b6852808dd2f366.png'
  },
  {
    id: '9fg',
    name: 'Pina Colada!',
    ingredients: [ 'Pineapple juice', 'Coconut cream', 'White rum', 'Slice of pineapple' ],
    image: 'https://stevethebartender.com.au/wp-content/uploads/2013/07/pina-colada-cocktail.jpg'
  },
  {
    id: '2er',
    name: 'Old Fashioned',
    ingredients: [ '2oz Bourbon', '2 dashes of Angostura Bitters', '1 sugar cube', 'orange twist garnish' ],
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-164770405-1-1508961546.jpg'
  },
  {
    id: '5jfue',
    name: 'The Lindsay lohan',
    ingredients: [ 'Peach Schnapps', 'Jagermeister', 'Coke', 'Cranberry' ],
    image: 'https://d4l6i3suptb3a.cloudfront.net/wp-content/uploads/2013/12/ll.jpg'
  },
  {
    id: '248fj',
    name: 'Mojito',
    ingredients: ['bacardi carta blanca','fresh lime','mint leaves','sugar', 'soda water'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Mojito98775.jpeg/440px-Mojito98775.jpeg'
  },
  {
    id: '30fje',
    name: 'buttery nipple',
    ingredients: ['1/2 oz Sambuca', '1/2 oz Baileys Irish Cream'],
    image: 'https://cdn.liquor.com/wp-content/uploads/2015/10/25155707/buttery-nipple-720x720-recipe.jpg'
  },
  {
    id: '14fdfse',
    name: 'El Presidente',
    ingredients: [ 'Golden Rum', 'Vermouth', 'Grenadine'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/El_Presidente_Cocktail.jpg/440px-El_Presidente_Cocktail.jpg'
  },
  {
    id: '6ijedd',
    name: 'Buckfast',
    ingredients: [ 'Buckfast', 'Regret' ],
    image: 'https://images-na.ssl-images-amazon.com/images/I/41OamjKKMQL.jpg'
  }
];

Cocktail.create(cocktailData);
