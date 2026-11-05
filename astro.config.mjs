// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://dakshvanshaj.com',
	base: '/leafs-loonies-automation-plan',
	integrations: [
		starlight({
			title: 'Automation plan for Leafs & Loonies',
			customCss: ['./src/styles/plan.css'],
			pagefind: false,
			// Shared by link with one founder; no reason for it to show up in search.
			head: [{ tag: 'meta', attrs: { name: 'robots', content: 'noindex' } }],
			sidebar: [
				{ label: 'The plan', slug: 'index' },
				{ label: '1. Bookkeeping', slug: 'bookkeeping' },
				{ label: '2. Payroll', slug: 'payroll' },
				{ label: '3. Tax prep', slug: 'tax' },
				{ label: 'Why I can build this', slug: 'proof' },
				{ label: 'Questions for you', slug: 'questions' },
			],
		}),
	],
});
