# What is this
Pulled from [the inline audio player in this Axios piece](https://www.axios.com/chinese-communist-party-training-school-africa) from August 2023. It's for use with direct quotes and audio. The quote will be highlighted when the audio starts playing, and end when the audio stops playing. 

## How do I use it
Copy the content of `forShorthand.html` into an HTML block in Shorthand. It will **not work in your browser** -- to preview and edit in the browser, use `index.html`. 

- To change audio: change `src` of `<audio>` element
- To change NON-higlighted text: update text in `#audioParagraph`
- To change HIGHLIGHTED text: update text just before the closing `</span>`, before the last `</div>`.

## How do I style it
- NON-highlighted text color: `#audioParagraph` `color`
- Highlighted text color: `#highlight` `color`
- Font style: `font-family` in the joint `#audioParagraph, #highlight` settings. 
- Be sure to update the `@import` for fonts as-needed.
- Play/Pause icon colors: `filter` in the joint `#playIcon, #pauseIcon` settings. Get the filter from using [this CodePen](https://codepen.io/sosuke/pen/Pjoqqp).
- Default highlight background color: `.highlight-span` `color`
- Highlight: 
  - The first number should be the default background color for your highlighted text (in this example it's `#092458`).
  - The second two numbers should be the color you want your highlighter to be (in this example it's `#134fbe`). 
  - The example has a dark background with a lighter highlighter. Make sure to check any color combinations you choose for [a11y](https://webaim.org/resources/contrastchecker/).
