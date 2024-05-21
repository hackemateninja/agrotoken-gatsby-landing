// packages
import React, {FC} from 'react';

// components
import Banner from '@comp/home/banner';
import BePart from '@comp/home/be-part';
import Blockchain from '@comp/home/blockchain';
import Hero from '@comp/home/hero';
import Press from '@comp/home/press';
import Rates from '@comp/home/rates';
import SectionList from '@comp/section-list';
import Subscribe from '@comp/home/subscribe';
import WeDo from '@comp/home/we-do';

//configs
import HomeSeo from '@config/home';

//data
import homeSections from '@data/home-sections';

//layouts
import Global from '@layouts/global';

// markup
const IndexPage: FC = () => {



	return (
		<Global>
      <Banner />
			<Hero />
			<Press />
			<WeDo />
			<Rates />
			<span id="use-cases" />
			{homeSections.map((item) => (
				<SectionList
					key={item.id}
					icon={item.icon}
					title={item.title}
					desc={item.desc}
					stage={item.stage}
					items={item.items}
					isReverse={item.isReverse}
				/>
			))}
			<Blockchain />
			<BePart />
			<Subscribe />
		</Global>
	);
};

export default IndexPage;

export function Head() {
	return (
		<>
			<title>{HomeSeo.title}</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
			<meta name="description" content={HomeSeo.description}/>
			<meta
				name="keywords"
				content={HomeSeo.keyWords.join(" ")}
			/>
		</>
	)
}
