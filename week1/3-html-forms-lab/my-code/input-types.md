# The `<input>` tag.

Almost everything inside a form is an `input`. An input is a form field that can hold data from the user. It is a self-closing element, like `img`. It has a `type` attribute which tells the browser what type of data the field should contain, and how it should behave. Here's a list of input types and what data they accept:

| type     | info   |
|:--------|:-------|
| `button` | a simple button (no default behaviour) |
| `checkbox` | boolean value (true or false; can be checked by default with the `checked` attribute) |
| `color` | colour (opens a colour picker; takes the format #RRGGBB) |
| `date` | date (opens a date picker) |
| `email` | valid email address |
| `file` | file to be uploaded |
| `hidden` | alpha-numeric characters (not displayed to the user) |
| `image` | a button with an image (submits form and adds mouse co-ordinates to form data) |
| `month` | month & year (opens a date picker) |
| `number` | numbers only (requires `step` attribute for decimals) |
| `password` | alpha-numeric characters (characters are hidden with a •) |
| `radio` | select one of many options (can be checked by default with the `checked` attribute) |
| `range` | number between two points (dislpays a slider; can be modified with `min`, `max` and `step` attributes |
| `reset` | a button that resets the form |
| `search` | alpha-numeric characters (line-breaks are removed) |
| `submit` | submits the form (requires a `value` attribute) |
| `tel` | telephone number (can be modified with `pattern` and `maxlength` attributes |
| `text` | alpha-numeric characters (line-breaks are removed) |
| `time` | time (HH:MM format) |
| `url` | a valid URL (can be modified with `pattern` and `maxlength` attributes |
| `week` | week of the year (opens a week picker) |
