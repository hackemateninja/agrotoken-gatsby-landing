//config
import URLS from '@config/urls';
//definitions
import { IExchange } from '@def/IExchange';

// services that get rate agro tokens
const getRates = async (): Promise<Array<IExchange>> => {
	const res = await fetch(`${URLS.currency}`);
	const data = await res.json();
	return data.map((d: IExchange) => d);
};
export default getRates;
