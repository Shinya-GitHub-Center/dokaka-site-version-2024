import { error } from '@sveltejs/kit'

export const load = async () => {
	try {
		const AboutPageFile = await import('$lib/pages/about-page.md')
		const AboutPage = AboutPageFile.default

		return {
			AboutPage
		}
	}
	catch(err) {
		error(500, err);
	}
}
