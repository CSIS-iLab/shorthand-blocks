# What is this?

An html/CSS grid for ceating an author block in Shorthand.com. Based on the author block from the old CSIS.org ([example]([https://www.csis.org/analysis/improved-export-controls-enforcement-technology-needed-us-national-security](https://web.archive.org/web/20221205152917/https://www.csis.org/analysis/improved-export-controls-enforcement-technology-needed-us-national-security))).

The style no longer matches CSIS.org but it's a good place to start - there is a color background for each photo that can change on hover, as well as an underline for the author's name that can appear on hover. The photos appear in a grid and the grid is responsive for all screen sizes. 

# How do I use it?

In addition to the instructions in the main README.MD file, you will need several things in order to update these blocks:

- A link to the author's profile on CSIS.org
- A link to the author's headshot
- The author's name
- The author's title

The structure of the HTML is one container named "cards" and then as many "card" containers as needed, one for each author.

_To add another author_: copy everything in one block (an example is below) and paste it at the very end, above the final closing `</div>`.

Below is a code sample for a single author card. To update a card for your author, replace the text you see in all caps. It is important to link to the author bio in both places specified.

NOTE: This was designed to use the headshots from CSIS.org, which were 224x224 square. Headshots on the current site are 135x135 square. If you use photos with different proportions (non-square) you will need to debug the styling.

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
# To add a specific background color to the section
You'll need to make this change in the CSS for the entire page; making the change inside this HTML block will only color the grid background, not the entire section.

First, grab the "Section ID" from the section's settings. In this example it's `#section-aTVDuH1Cwy`:<br> 
<img width="211" alt="Screenshot 2023-01-27 at 11 01 35 AM" src="https://user-images.githubusercontent.com/41589348/215131999-2bb2d6a3-2847-497f-98d4-99ef4193344f.png">

Next, go to the CSS settings for your Shorthand piece:
<img width="706" alt="Screenshot 2023-01-27 at 11 00 10 AM" src="https://user-images.githubusercontent.com/41589348/215131510-b1ab5d95-b436-400f-8baf-eb4dc3120885.png">

Finally, add your section ID and specify the background color: 
```
#section-aTVDuH1Cwy {
  background: #000;
}
```

## Why use the section ID instead of adding a new CSS class? 
In the section options you'll also see "ADD CSS CLASS TO SECTION" with a white input box:<br>
<img width="217" alt="Screenshot 2023-01-27 at 11 04 08 AM" src="https://user-images.githubusercontent.com/41589348/215132712-caf25bc4-0003-4e62-a037-b05d19b58165.png">

Inside that box you can create your own CSS class, like "my-block". Shorthand adds the `.sh` to the front, so when you go to edit the CSS for the entire page you'd use `.sh-my-block` instead of the section ID.

This _does_ work but it does introduce some risks. CSS stands for "Cascading Style Sheets" -- the settings all trickle down from least specific to most specific, and the most specific settings override the least specific ones. A class is less specific than an ID, since it can be applied to multiple elements. An ID is unique and can only apply to one element. Classes can be reused, IDs cannot. The risk is that a class, when applied to more than one section, will affect more than you intend. The odds of this are low in an environment like Shorthand, but specificity is a good habit to develop. 

Classes _are_ good for styles you want to apply throughout the piece but not to the _entire_ piece. If you want to make certain sections have a blue background, create a class called `.sh-blue-background` and then apply that to as many sections as you need. Shorthand interprets your custom class as higher in priority than the default `.BlockHTML` so it will only apply it to those sections instead of every single one. 
