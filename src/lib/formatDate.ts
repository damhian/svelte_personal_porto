import type { DateField } from '@prismicio/client';

export function formatDate(dateStr: DateField): string {
	if (!dateStr) return '';

	const date = new Date(dateStr);

	// Option for formatting
	const option: Intl.DateTimeFormatOptions = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};

	return new Intl.DateTimeFormat('id-ID', option).format(date);
}
