# JavaScript Objects Lab

##### This is your chance to practice what you've learnt about JavaScript objects.

> ***Note:*** _This can be a pair programming activity or done independently._

## Task One - Classmates

Create 2 objects one which contains information about you and the other about the person sitting next to you. Call each object the name of the person. You can choose any properties you like but some examples could be:

- `name (String)`
- `age (Number)`
- `hometown (String)`
- `favourite Bill Murray Films (Array)`

## Task Two - Cars

Create a `car` object, which has properties for the following:

  - `brand (String)`
  - `number of seats (Number)`
  - `speed in mph (Number)`

And the following methods:

  - `speedUp`: which increments the car's current speed.
  - `slowDown`: which decrements the car's current speed.

Both methods should also console log the following string, passing in the brand name and new speed value: ```"The (brand) is travelling at (speed)mph"```

Test drive your cars by invoking their methods. Practice using both syntaxes for retrieving properties (dot notation and bracket notation).

## Task Three - Ice Cream

Create some ice cream objects with the following properties:

- `number of scoops (Number)`
- `flake (Boolean)`

They should also have a method `calculatePrice` which returns the price of the ice cream assuming that:

 - 1 scoop of ice cream costs £1.10
 - A flake costs £0.30

## Task Four - Countries

Create a new country object with the following properties:

- `name (String)`
- `population (Number)`
- `size in square kilometres (Number)`

It should have a method `calculateDensity` that calculates the countries population density and prints out a string:

`(name) has a population density of (density) people per sq km. This is (low/average/high).`

The string should use `low` if the density is under 100 per sq km, `average` if it is between 100-500 and `high` if it is over 500.

## Task Five - Pets

Create a person object with the following properties:

- `name (String)`
- `pet (Object)`

The value of the pet property should be another object with the following properties:

- `name (String)`
- `age (Number)`
- `type (String)`

The person object should have an `introduce` method which will print a statement like this:

`Hi, my name is (name) and this is my (pet age)-year old (pet type), (pet name).`;

*Bonus Challenge*

Create a person object with multiple pet objects within it. Write an `introduce` method that will introduce the person and _all_ of their pets.

## Task Six - The Bag

Create a bag object with the following property:

- `contents (Array)`

The bag should have the following methods:

- `addItem(String)` - pushes a new item into the bag's contents array.
- `removeItem(String)` - removes a given item from the bag's contents array.
- `listItems` - lists all the current contents of the bag.
- `emptyBag` - removes all items from the bag.
