<script>
	import { videoAssetsURL } from "$lib/config";
	export let fileName;
</script>

<div class="video-container">
	<!-- svelte-ignore a11y-media-has-caption -->
	<video src={`${videoAssetsURL}${fileName}`} controls></video>
</div>
