<script>
	import { audioAssetsURL } from "$lib/config";
	export let fileName;
</script>

<div class="audio-container">
	<audio src={`${audioAssetsURL}${fileName}`} controls></audio>
</div>
