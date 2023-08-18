# What is this?

This is a block for block that looks like pieces of torn paper. The text is selectable, and the style includes the ability to highlight text. The style comes directly from this New York Times piece: [States Passed a Record Number of Transgender Laws. Here’s What They Say.](https://www.nytimes.com/2023/06/27/us/transgender-laws-states.html)

# Do I need anything else?

In addition to the instructions in the main README.MD file, you will need several things in order to update these blocks for use in your Shorthand story:

- The text you want to appear in the "torn paper" portion

# How do I use it?

## Structure

The structure of the HTML is one outer container named "wrapper" and then inside it is a `<figure>` followed by a `<p>` followed by another `<figure>`.

Inside each figure, you'll find a `<div>` with the class name "torn-text". Inside that `<div>` is a `<p>` for the example, as well as a `<span>`.

## Highlighting Text

In the NYT piece, you'll notice that certain text is highlighted. That's done with the use of the `<span>` that has the class "g-highlight". Any text you want highlighted needs to go inside a `<span>` with this class name.

## Do I need anything else?

- Yes, the ID of the Shorthand Section your HTML block will go in/be.

## Use in Shorthand

First, copy and paste the code into Shorthand exactly as it is.

Next, go to the CSS settings for your story:

- At the top, paste: `@import url("https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap");`
- We need to override the default `<p>` settings from Shorthand. Using the section ID for the section your HTML block is in, add the below custom CSS. The section ID here is an example, be sure to replace it with your own:

```
/* -------------------------------------------------------------------- */
/*                       Torn Paper Section                             */
/* -------------------------------------------------------------------- */
#section-bElbkDgiKZ p {
  margin-top: 0;
  margin-bottom: 0;
  font-family: "Courier Prime";
}
```

- Now, add your text. If you need to add additional text, follow the existing structure:
  - To add a new "sheet of paper" create a new <figure>
  - To add another paragraph in the same "sheet of paper" section, use two <br/> and add your text.
- The text that goes _in between_ the torn paper sections has the class "in-between". You will need to use `!important` for the font-family.
