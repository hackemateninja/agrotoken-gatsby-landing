import { IMerchants } from '@data/merchants';

export interface IMerchantsProps {
	device: string | undefined;
	merchants: Array<IMerchants>;
}
