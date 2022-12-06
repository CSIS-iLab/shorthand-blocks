# What is this?

An html/CSS grid for ceating an author block in Shorthand.com. Based on the existing author block on CSIS.org ([example](https://www.csis.org/analysis/improved-export-controls-enforcement-technology-needed-us-national-security)).

# How do I use it?

In addition to the instructions in the main README.MD file, you will need several things in order to update these blocks:

- A link to the author's profile on CSIS.org
- A link to the author's headshot
- The author's name
- The author's title

The structure of the HTML is one container named "cards" and then as many "card" containers as needed, one for each author.

> _To add another author_: copy everything in one block (an example is below) and paste it at the very end, above the final closing `</div>`.

Below is a code sample for a single author card. To update a card for your author, replace the text you see in all caps. It is important to link to the author bio in both places specified.

```
  <div class="card">
    <div class="image-container">
      <a href="LINK TO AUTHOR BIO"
        <img
          src="LINK TO AUTHOR HEADSHOT"
          alt="AUTHOR NAME headshot"
        />
      </a>
    </div>
    <a class="name" href="LINK TO AUTHOR BIO">AUTHOR NAME</a>
    <br />
    <p id="description1">AUTHOR TITLE</p>
  </div>
```
