/**
 * All of these values are used throughout the site – for example,
 * in the <meta> tags, in the footer, and in the RSS feed.
 *
 * PLEASE BE SURE TO UPDATE THEM ALL! Thank you!
 **/

export const siteTitle = 'Yourdot.com'
export const siteDescription = 'The official website of you'
export const siteURL = 'example.com'
export const siteLink = 'https://example.com/'
export const siteAuthor = 'You'
export const pictureAssetsURL = 'https://r2bucket-subdomain.example.com/pictures/'
export const audioAssetsURL = 'https://r2bucket-subdomain.example.com/audios/'
export const videoAssetsURL = 'https://r2bucket-subdomain.example.com/videos/'

// Controls how many posts are shown per page on the main blog index pages
export const postsPerPage = 6

// Edit this to alter the main nav menu. (Also used by the footer and mobile nav.)
export const navItems = [
	{
		title: 'Blog',
		route: '/blog'
	}, {
		title: 'About',
		route: '/about'
	}, {
		title: 'Contact',
		route: '/contact'
	},
]
