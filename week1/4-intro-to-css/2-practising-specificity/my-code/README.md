## Practising with specificity

Create an unordered list of the following characters:

```html
<ul>
  <li class="character">Kylo Ren</li>
  <li class="character">Han Solo</li>
  <li class="character">Rey</li>
  <li class="character">Finn</li>
  <li class="character">Poe Dameron</li>
</ul>
```

In the CSS let's add:

```css
.character {
  color: purple;
}
```

We can see that all the list items have turned purple as they all have a class of `character`.

If we wanted to override the color for Rey, we could add a `female` class to her li, and in the CSS add the following:

```css
.character {
  color: purple;
}

.female {
  color: red;
}
```

This `.female` style has the same specificity as the `.character` above, but thanks to the rules of Cascading Style Sheets, it will override that style because it comes afterwards. If we switch these styles around, we can see that the `.character` style will override the `.female` style.

Open up the Chrome console and inspect the list. If you click on Rey's li you will be able to see that the `color: purple` that is coming from the `.character` style has been crossed out, and the style from `.female` is being used instead. The Chrome inspector will be incredibly useful for this type of bug fixing, as you will be able to see exactly where the styles are coming from for each particular element.

Let's have a look at how ids affect specificity. Give Poe an id of `pilot`, and in the CSS add:

```css
#pilot {
  color: blue;
}
```

We can see that his li has turned blue. It doesn't matter where in the style sheet we put this code, it will always override the styling coming from the `character` class, as an id has a higher specificity value than a class. This is one of the reasons why you should avoid using ids as much as possible for styling purposes, and stick to classes or combinations of classes; if you need to override a style it is harder to do if that style is coming from an id.

Finally let's look at combining an element selector with a class selector.

In your CSS add:

```css
li.character {
  color: green;
}
```

Having these two selectors together gives us a higher specifity value than a single class will give, so no matter where on the page it is placed it will override the `.character` styles and the `.female` styles, but Poe's `pilot` id still wins.

If you are ever styling and getting frustrated that the styles you expect to see are not appearing in the browser, make sure that you open up the Chrome console and inspect the element to check if your style is being overridden by something more specific.

