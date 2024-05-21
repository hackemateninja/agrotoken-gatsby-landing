// packages
import React, { FC } from 'react';

//components
import Footer from '@comp/footer';
import Whatsapp from "@comp/watsapp";

//types
import { IGlobalLayoutProps } from '@def/types';

// global layout
const Qatar: FC<IGlobalLayoutProps> = ({ children }) => {
	return (
		<>
			{children}
			<Footer />
			<Whatsapp />
		</>
	);
};
export default Qatar;
