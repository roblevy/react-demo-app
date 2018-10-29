## Referencing Data

1. In your model add the field that you want to link and reference the other module you are linking to. For example:
`addedBy: { type: mongoose.Schema.ObjectId, ref: 'User' }`
*Type is telling mongoose that it will be an object id*
*Ref is the name of the module this reference is pointing to*

2. Amend your create route so that you save the id of the logged in user rather than just their name. You can do this in the view or in the controller (if you have access to the logged in users id at that point). Example from `new.ejs` below:

`<input type="text" name="addedBy" value='<%= locals.currentUser._id%>' hidden>`

*Make sure that name matches the model*
*Add hidden at the end to make it hidden*

3. At this point you are saving the id of the logged in user in the `addedBy` field. To save space this is saved as a *String* which looks a bit like this:

`addedBy: '568694324234'`

4. When we are rendering the index or show routes we don't really want to have a random id number on the page as it doesn't make sense to our users. Instead we want to show the user's name and potentially some other details as well. In order to have access to the other details we need to populate the `addedBy` field so that we can access the other data.

Before population `addedBy: '568694324234'`

After population `addedBy: { username: 'Matt', favouriteWDI: 37 }`

5. We do this by adding this line in the controller after `.find()` or `.findById(req.params.id)`:

`.populate('addedBy')`

6. We now have access to all the other fields from the user who created this puppy in the show/index page.

7. To reverse this process (i.e. see all the puppies added by a user) in the user model add:

`userSchema.virtual('addedPuppies', {
  ref: 'Puppy',
  localField: '_id',
  foreignField: 'addedBy'
});`

*Virtuals are fields not stored as hard coded data in the database but as fields we can populate when we need them*
*addedPuppies is the name we are giving this field*
*ref is the name of the model with the data we want*
*localField is the field in this model we want to look for*
*foreignField is the field to look in within the other model*

8. Again like in step 5 we need to add `.populate` in our controller to populate this field :

`.populate('addedPuppies')`
