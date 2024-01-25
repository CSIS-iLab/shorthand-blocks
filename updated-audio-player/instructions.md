# What is this?

This is a custom audio player block originally built for the The CSIS 2024 Global Forecast—A World Dividing. It includes the following functionality:

- Play
- Pause
- Skip to beginning
- Skip to end
- Skip forward 10 seconds
- Skip backward 10 seconds
- Download Audio
- Download Transcript
- Share Audio
- Adjust Playback Speed
  - 0.25
  - 0.5
  - 0.75
  - 1
  - 1.25
  - 1.5
  - 1.75
  - 2

# How do I use it?

In addition to the instructions in the main README.MD file, you will need several things in order to update these blocks:

- The title of the audio (name of podcast, interview, report, etc)
- The subtitle of the audio (author, person speaking, interviewer, etc)
- Link to audio (from Cloudinary - this is important for downloading)
- Link to a PDF of a transcript if one exists
- Link to an image to use as a background

The structure of the HTML is one outer container named "audio-player" that has two inner containers: "background-image-container" and "controls-container".

## Background Images

"background-image-container" contains only the background image -- **if you do not have a background image** that's okay, just remove the entire `<img>` tag, and then go up to the CSS, un-comment out the `background-color` inside `.background-image-container` and set the color you want. The default is `red` so it's easy to find.

## Controls Container

### "audio-info"

This is where your Title and Subtitle info go

### "audio"

The `<audio>` tag is where the URL for your audio goes. This should be a link to the file in cloudinary.

### "progressContainer"

This holds the progress bar. Its movement is handled in the JavaScript. To change the color (the background gray or the progress/fill color), go to the CSS for `.progress-container` and `.progress-bar`. The backgroud colors you need are labeled with a comment so you know what they're for. NOTE the `.progress-container` background color needs to have a decreased opacity for it not to look strange against the semi-transparent background of the player, so make sure you use a RGBA value, not a hex code.

### "controls"

The audio controls are each an `<img>` that goes to an SVG file saved in Cloudinary in a folder for "Shorthand -> Global Forecast". If you ever want to change the icon, just swap out the `src` url.

The `filter-dark` class is what's giving the control icons a color. **To change the color of any of the icons in this file**, you'll need to go to [this codepen](https://codepen.io/sosuke/pen/Pjoqqp), input your desired color into "target color" as a hex code, and then copy the `filter` result. That `filter` is what you'll put in the CSS. If you try setting a fill or a background color instead of using the filter, it won't work.

The `svg-icon` class gives the icons their size - if you change these values, every icon in the conrols will change.

### kebab-menu - "menu-content"

This is the three-dot menu in the top-right corner of the controls portion of the player (the white box). Clicking on this reveals your options to download the audio or transcript, share the audio, and change the playback speed. The buttons all have a related icon just before the text. It has the same `filter-dark` class as the other icons, but note these have `menu-icon` instead of `svg-icon` - this affects the size and position, so don't confuse these. 

**IF YOU DO NOT HAVE A TRANSCRIPT** -- You're going to need to either delete the code for the transcript button, or comment it out. (In the future, the goal is for this button to only render if you've given it a `src`.) You need to comment out BOTH the HTML **AND** the JavaScript. To find it, you can `ctrl+f` the `id`: `"download-transcript"`.

Get rid of this in the HTML:

````
<button type="button" id="download-transcript">
  <img
    src="https://res.cloudinary.com/csisideaslab/image/upload/v1706148613/Shorthand/Global%20Forecast/download-svgrepo-com.svg"
    class="filter-dark menu-icon"
    alt="Download Icon"
  />
    Download Transcript
  </button>
````
and all of this in the JavaScript:

```
document
  .getElementById("download-transcript")
  .addEventListener("click", () => {
    var link = document.createElement("a");
    /* ---------------- LINK TO YOUR PDF HERE --------------- */
    link.href = "https://csis-website-prod.s3.amazonaws.com/s3fs-public/2024-0240122_Lin_Surveying_Experts.pdf?VersionId=KpijDB0VBA6tKMBZd_TRr4DLn3YXcXsF";
    link.setAttribute("target", "_blank"); // Force link to open in a new tab
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
```
### kebab-menu - "menu-content playback-speed-menu"
This shows all of your playback speed options. It starts out with `1x (Normal)` selected and tells the user which is selected by adding a checkmark in front of it. To get out of this, you need to click "Back to Options" at the top. This is to prevent the user from clicking away and closing it without being able to see what speed they clicked on. 

## The JavaScript
The JavaScript handles all of the behavior - the button clicking, the playing, downloads, sharing, etc. 

You need to do two things here: (1) Link to your audio (2) Link to your transcript

Link to your audio in the `download-audio` section. The `href` you need to replace is labeled with a comment saying "LINK TO YOUR AUDIO HERE". **IMPORTANT FOR DOWNLOAD TO WORK AS EXPECTED** -- in your link from cloudinary, add `fl_attachment` just after `upload/` in the URL. This is to let the browser to download the file instead of opening it in another tab for the user to download from there. (See this [Stack Overflow post](https://stackoverflow.com/questions/65381723/download-image-from-cloudinary-url#:~:text=Just%20add%20the%20Cloudinary%20flags,and%20the%20file%20will%20download.&text=You%20can%20optionally%20set%20a,using%20the%20format%20fl_attachment%3Amy_custom_filename%20.))

Link to your transcript in the `download-transcript` section. The `href` you need to replace is labeled with a comment saying "LINK TO YOUR PDF HERE". This can be any link - Cloudinary, aws, etc. We're going open it in a new tab and let the user download from there. 

# Note on editing
The HTML file is 471 lines long, and editing it in the shorthand HTML block will be very frustrating.

I recommend copying the HTML from here into an online HTML editor [like this one from tutorialspoint](https://www.tutorialspoint.com/online_html_editor.php). It has a "Beautify" button that will format things neatly if they get messed up and keep things easy to read for you. 

Use `ctrl+f` where you can. Look for `download-audio`, `download-transcript`, `background-image`, `audio-info`, and `<audio` to get to the pieces you need.
