<svelte:head>
	<title>About</title>
</svelte:head>

<script>
    import AudioClip from '$lib/components/AudioClip.svelte'
    import VideoClip from '$lib/components/VideoClip.svelte'
    import { pictureAssetsURL } from '$lib/config.js';
</script>

# About
![we love you]({pictureAssetsURL}we-love-you.jpg)

- Your Funny Song
<AudioClip fileName="Your Funny Song.mp3" />

## Style
Your style is Awesome!!

## Biography
Your bio here.

## Legacy
Your legacy here.

## Sample Video
Your Kurorekishi Video Clip
<VideoClip fileName="your-kurorekishi.mp4" />