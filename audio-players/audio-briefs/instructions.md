# Contents
- [What is this](#what-is-this)
- [How do I use it?](#how-to-use)
- [How do I customize it?](#how-to-customize)
  - [Substance](#substance)
  - [Style](#style)
- [The JavaScript](#javascript)

## <a id="what-is-this">What is this?</a>

This is a custom audio player block originally built for the The CSIS 2024 Global Forecast—A World Dividing. It was first used in Part I, [The China Challenge](https://features.csis.org/global-forecast-china-challenge/). It includes the following functionality:

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
 
It also inclues the following styling customization options:
- Audio Title
- Audio Subtitle
- Text font
- Background image
- Background color
- Progress bar background color
- Progress bar fill color
- Icon color
- Icon hover state 
- Button color
- Button hover state

## <a id="how-to-use">How do I use it?</a>

Due to bugs Shorthand introduces, especially when trying to use multiple players on one page, this block should be implemented via an iframe using an HTML block in Shorthand. Examples are in [the repo for Global Forecast](https://github.com/CSIS-iLab/global-forecast/tree/main). The code for the iframe is below. Adjust as needed, but make sure to keep `allow="web-share"` or the player's Share Audio button won't work. 

```
<style>
    .iframe-container-player{
    position: relative;
    width: 100%; /* Full width on smaller screens */
    height: 411px; /* Adjust height */
    font-family: "IBM Plex Sans", sans-serif;
    border-radius: 20px;
  }

  /* These styles apply on desktop */
  @media (min-width: 900px) {
    .iframe-container-player {
      margin: auto;
      min-width: 390px;
      max-width: 700px;
      max-height: 400px;
      border-radius: 20px;
    }
  }
 
</style>
<div class="iframe-container-player">
  <iframe title="audio brief" width="100%" height="100%"
    src="https://csis-ilab.github.io/global-forecast/china-challenge/edelBrief.html" allow="web-share" allowfullscreen="" style="position:absolute; top:0; left: 0; border-radius: 20px;">
  </iframe>
</div>

```
### NOTE ON AUDIO DOWNLOADS
The links to audio should come from Cloudinary. The JavaScript adds `fl_attachment/` after `upload/` to force the browser to start the download immediately rather than open the audio in a new tab for the user to download from there using the native audio controls.

## <a id="how-to-customize">How do I customize it?</a>
### <a id="substance">Substance (audio, icons)</a>
Below the HTML in the `<script>`, you'll see two objects: `audioInfo` and `iconInfo`. These two objects supply the information for the audio and all of the icons. They also supply the text for the `<title>` and the title of the audio when using the share button.

`audioInfo` has `backgroundImageUrl`, `backgroundColor`, `title`, `audioUrl`, and `transcriptUrl`. 
- The "download transcript" button is conditionally rendered depending on whether you supply a value for the transcript url. If none, leave an empty string. 
- The `backgroundColor` is conditionally rendered depending on whether you supply a background image url. If you do not have a url, leave it `""` and update `backgroundColor` to your desired color. 
- The default background color is the darkest blue from the CSIS website (`#050f27`).

If you need to change the icons, `iconInfo` has the links to the SVG icons for the main player controls: 
- Skip to start of audio: `skipToStartIcon`
- Skip back ten seconds: `skipBackIcon`
- Play: `play-icon`
- Pause: `pause-icon`
- Skip forward 10 seconds: `skipForwardIcon`
- Skip to end of audio: `skipToEndIcon`
- Kebab menu icon: `menuIcon`

As well as icons for the kebab menu items:
- Download (audio, transcript): `downloadIcon`
- Playback speed: `playbackSpeedIcon`
- Share audio: `shareIcon`
- Back to options: `backToOptionsIcon`
- SVG for the playback speed checkmark: `checkmarkSVG`.

Note the `checkmarkSVG` is the entire `<img>`, including necessary CSS classes and the `src` for simplicitly later in the code.

###  <a id="style">Key Style Points</a>
- `background-image-container` holds the background image. If you have no image, set the background color inside the `audioInfo` object in the JavaScript.
- `progress-container` is the background bar color
- `progress-bar` is the fill color.
- `menu-icon` and `controls-icon` control the colors of the svg icons. **To change the color of any of the icons in this file**, you'll need to go to [this codepen](https://codepen.io/sosuke/pen/Pjoqqp), input your desired color into "target color" as a hex code, and then copy the `filter` result. That `filter` is what you'll put in the CSS. If you try setting a fill or a background color instead of using the filter, it won't work.

## <a id="javascript">The JavaScript</a>
The JavaScript handles all of the behavior - the button clicking, the playing, downloads, sharing, etc. 

All you need to use this player as is (i.e. in the same CSS style) is supply the `audioInfo` object with:
- `backgroundImageUrl`
- `backgroundColor` (if different than default)
- `title`
- `audioUrl`
- `transcriptUrl` (if you have one; if not, leave empty string)

If you need to update the icons, update the urls in `iconInfo`.

The rest of the JS is primarily event handlers for the various buttons and some logic to conditionally render the transcript download button and a background color if there's no background image. Comments are used as headings to help you know where you are in the file.
