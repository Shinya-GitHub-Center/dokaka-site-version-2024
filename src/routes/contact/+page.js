import { error } from '@sveltejs/kit'

export const load = async () => {
	try {
		const ContactPageFile = await import('$lib/pages/contact-page.md')
		const ContactPage = ContactPageFile.default

		return {
			ContactPage
		}
	}
	catch(err) {
		error(500, err);
	}
}
