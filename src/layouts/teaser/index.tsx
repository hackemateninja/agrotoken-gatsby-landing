// packages
import React, { FC } from 'react';

//components
import Footer from '@comp/footer';
import Header from '@comp/header';

//types
import { IGlobalLayoutProps } from '@def/types';
import Whatsapp from "@comp/watsapp";

// global layout
const Teaser: FC<IGlobalLayoutProps> = ({ children }) => {
	return (
		<>
			<Header variant="Teaser" />
			{children}
			<Footer variant="Teaser" />
			<Whatsapp/>
		</>
	);
};
export default Teaser;
