<script>
	export let posts = [];
</script>

<ul class="posts-list">
	{#each posts as post}
		<a href="/blog/{post.slug}">
			<li>
				<article>
					<img
						src={post.coverImage}
						alt=""
						width={post.coverWidth}
						height={post.coverHeight}
						style="ratio: {post.coverWidth} / {post.coverHeight}"
					/>
					<h2>
						{post.title}
					</h2>
				</article>
				<p>{post.excerpt}</p>
			</li>
		</a>
	{/each}
</ul>
