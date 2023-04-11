# What is this?

This is a block for a video that's:

- 400px wide (50% of Shorthand's column of 800px)
- Centered on the page

# How do I use it?

In addition to the instructions in the main README.MD file, you will need several things in order to update these blocks:

- A link to the mp4 for the video
- A link to the cover image (also called the `poster`) for the video

The structure of the HTML is one outer container named "parent" and then inside it the `video` tag.

When you copy this code to your Shorthand HTML block, all you need to do is replace the existing links to links for your video.

```
<div class="parent">
  <video
    id="my-video"
    controls
    poster="PUT THE LINK TO YOUR POSTER JPG HERE"
  >
    <source
      src="PUT THE LINK TO YOUR VIDEO MP4 HERE"
      type="video/mp4"
    />
  </video>
</div>
```

# Can I change the width?

Sure! Once it's in Shorthand, feel free to adust the max-width as needed. The `max-width` property can take pixels (`px`) or percentages (`%`). Learn more about the max-width property [here](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width).
