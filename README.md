## What is this? 
An html/CSS grid for ceating an author block in Shorthand.com. 

## Why? 
Shorthand has a native grid section, but its formatting isn't what we want, and making CSS edits to it directly [gets complicated quickly](https://support.shorthand.com/en/articles/50-custom-css):
> [T]he suggested approach for all CSS configuration is to use a development tool, such as the Developer Tools Inspector within Google Chrome, to identify the appropriate CSS selectors and the current values within your Shorthand story.

Instead, we've created our own section with custom CSS to match what's on CSIS.org (as of 6/22/22).

## How do I use it?
In your Shorthand story, at the bottom of the left sidebar, click "+ Add Section", scroll down a bit, and select "Custom HTML."

This will bring up a very (very) basic editing block. In here you can copy and paste the HTML and CSS from this repo.

The CSS should be added at the top of the block in between `<style>` tags. If you choose to add it to the larger Custom CSS settings, test thoroughly and make sure your changes are only affecting the custom HTML.

## Note
The CSS you add will be interacting with the rest of the CSS Shorthand has for the story you're creating. The first time this section was added, the text needed to be targeted via ID tags in order to display properly. 

If you see anything weird, use the dev tools and check that your HTML elements have rendered and if so, what CSS is (or is not) being applied.