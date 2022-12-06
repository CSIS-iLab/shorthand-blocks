# What is this?

This is an audio player block based on the one used in the Journalism Bootcam's feature stories ([example](https://journalism.csis.org/from-grocery-store-to-landfill-addressing-food-waste-at-the-household-level/)).

# How do I use it?

In addition to the instructions in the main README.MD file, you will need several things in order to update these blocks:

- The title of the audio
- Link to mp3 (only mp3 is supported) of audio
- The source (name, link, artist) of any background music
- The speaker's name
- The speaker's title
- The speaker's company/institution

The structure of the HTML is one outer container named "audio-block-container", the title inside "audio-title", a block for the audio player and related information named "audio-block", and as many "audio-people-container" blocks as needed, one for each speaker.

> \_To add another speaker: copy everything in one "audio-people-container" block (an example is below) and paste it at the very end, above the final closing `</div>`.

To update a single block for a single speaker, replace what you see below in all caps (link to their photo, their name, their title, and their company/institution):

```
<div class="audio-people-container">
  <img
    class="audio-speaker-image"
    src="LINK TO SPEAKER'S PHOTO"
    aria-hidden="true"
  />
  <div class="audio-speaker-container">
    <div class="audio-speaker-name">SPEAKER NAME<div>
    <figcaptionclass="audio-speaker-title">SPEAKER TITLE of SPEAKER COMPANY</figcaption>
  </div>
</div>
```

To update the media player information, replace what you see below in all caps (the link to the audio, any background music information):

```
<figure class="audio-block">
  <audio
    controls
    src="LINK TO MP3 AUDIO"
  ></audio>
  <figcaption class="audio-caption">
    Background Music via&nbsp;
    <a
      class="audio-link"
      rel="noreferrer noopener"
      target="_blank"
      href="LINK TO SOURCE OF MUSIC"
      >SOURCE OF MUSIC</a
    >
    - "SONG NAME" by ARTIST, "SONG NAME 2" by ARTIST2
  </figcaption>
</figure>
```

To update the title of the block, replace what you see below in all caps:

```
  <div class="audio-title">TITLE GOES HERE</div>
```
