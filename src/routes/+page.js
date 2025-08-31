import { error } from '@sveltejs/kit'

export const load = async () => {
	try {
		const IndexPageFile = await import('$lib/pages/index-page.md')
		const IndexPage = IndexPageFile.default

		return {
			IndexPage
		}
	}
	catch(err) {
		error(500, err);
	}
}
