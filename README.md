## What is this?

This repo contains code for custom HTML blocks in Shorthand.com projects.

## Why?

Shorthand has many native features, but sometimes its formatting isn't what we want, and making CSS edits to it directly [gets complicated quickly](https://support.shorthand.com/en/articles/50-custom-css):

> [T]he suggested approach for all CSS configuration is to use a development tool, such as the Developer Tools Inspector within Google Chrome, to identify the appropriate CSS selectors and the current values within your Shorthand story.

When needed, we've created our own code blocks with custom HTML and CSS.

## How do I use it?

In your Shorthand story, at the bottom of the left sidebar, click "+ Add Section", scroll down a bit, and select "Custom HTML."

This will bring up a very (very) basic editing block. In here you can copy and paste the HTML and CSS from this repo. If embedding directly, copy the content of the `forShorthand.html` files. If you need to use an iframe (e.g. the audio briefs player), the instructions are in the README for that block.

CSS should be added at the top of the block in between `<style>` tags. If you choose to add it to the larger Shorthand Custom CSS settings, test thoroughly and make sure your changes are only affecting the custom HTML (this can usually be done by targeting the section that contains the HTML block). If there are conflicts with existing class names or settings, you’ll see breaking changes.

## Note
_*In Shorthand, if you see anything in red in your custom CSS settings*_ (other than `!important`) that means you have an error somewhere that should be resolved before publication. (An easy first check is that every opening "`{`" bracket has a matching closing "`}`" bracket.)
