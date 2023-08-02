/**
 * Format number into currency
 * e.g. 2.99 into 3,99€
 * @param price 
 * @param withoutCurrencySign 
 */
export const formatCurrency = (
	price: number,
	withoutCurrencySign?: boolean,
):string => {
	let formattedCurrency = price
		.toLocaleString('de-DE', {
			style: 'currency',
			currency: 'EUR',
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		})
		.replace(/\s/g, '');

	if (withoutCurrencySign) {
		formattedCurrency = formattedCurrency.replace('€', '');
	}

	return formattedCurrency;
};
