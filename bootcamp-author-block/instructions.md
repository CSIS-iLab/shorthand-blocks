# What is this?

This is an author block based on the one used in the Journalism Bootcam's feature stories ([example](https://journalism.csis.org/from-grocery-store-to-landfill-addressing-food-waste-at-the-household-level/)).

# How do I use it?

In addition to the instructions in the main README.MD file, you will need several things in order to update these blocks:

- The author's name
- The author's university/institution
- The author's blurb/bio paragraph

The structure of the HTML is one outer container named "author-container", the title "Authors", and then as many "author-block" sections as needed.

> _To add another author_: copy everything in one block (an example is below) and paste it at the very end, above the final closing `</div>`.

To update a single block for a single author, replace what you see below in all caps (link to their photo, their name, their university, and their bio):

```
<div class="author-block">
  <img
    class="image-circle"
    src="LINK TO AUTHOR PHOTO"
    aria-hidden="true"
  />
  <div class="author-content">
    <h4 class="author-name">AUTHOR NAME</h4>
    <figcaption class="author-university">AUTHOR UNIVESRITY<figcaption>
    <div class="author-bio">
      <p>AUTHOR BIO</p>
    </div>
  </div>
</div>
```
