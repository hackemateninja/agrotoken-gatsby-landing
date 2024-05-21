import React, { FC } from 'react';
import { IIconFeatureItem } from '@comp/icon-feature/types';
import IconFeature from '@comp/icon-feature';
import { Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';
import { useIntl } from 'gatsby-plugin-react-intl';
import { IIconFeatureSectionProps } from '@comp/icon-feature-section/types';

const IconFeatureSection: FC<IIconFeatureSectionProps> = ({
	items,
	columns,
	variant,
}) => {
	const intl = useIntl();

	const position = useBreakpointValue({ base: 'flex-start', md: 'center' });
	const textAlign = useBreakpointValue({ base: 'left', md: 'center' });

	return (
		<Grid
			maxW="7xl"
			w="100%"
			alignItems="center"
			justifyItems="center"
			mx="auto"
			templateColumns={`repeat(${columns}, 1fr)`}
			gap={{ base: 8, lg: variant === 'Teaser' ? 20 : 8 }}
		>
			{items.map((item: IIconFeatureItem) => (
				<GridItem
					key={item.id}
					colSpan={{ base: 4, lg: 1 }}
					maxW={variant === 'Teaser' ? '281px' : '341px'}
					w={'100%'}
				>
					<IconFeature
						variant={variant}
						title={intl.formatMessage({ id: item.title })}
						description={
							item.desc ? intl.formatMessage({ id: item.desc }) : undefined
						}
						textAlign={textAlign}
						icon={item.icon}
						position={position}
					/>
				</GridItem>
			))}
		</Grid>
	);
};

export default IconFeatureSection;
