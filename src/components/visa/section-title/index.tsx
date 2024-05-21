import React, { FC } from 'react';
import { ISectionTitleProps } from '@comp/visa/section-title/types';
import { Heading, Text } from '@chakra-ui/react';

const SectionTitle: FC<ISectionTitleProps> = ({ sectionName, title, desc, variant }) => {
	return (
		<>
			{sectionName ? (
				<Text
					mb="12px"
					textAlign="center"
					fontSize={{base:"14px", lg:"16px"}}
					lineHeight={{base: "20px", lg:"24px"}}
					color={variant === 'dark' ? 'primary.600' :"primary.700"}
					fontWeight="500"
				>
					{sectionName}
				</Text>
			) : null}
			{title ? (
				<Heading
					textAlign="center"
					mb="20px"
					maxW="768px"
					fontWeight="500"
					color={variant === 'dark' ? 'white' :""}
					fontSize={{base: "30px", lg:"36px"}}
					lineHeight={{base: "38px", lg:"48px"}}
					letterSpacing="-2%"
				>
					{title}
				</Heading>
			) : null}
			{desc ? (
				<Text
					textAlign="center"
					fontSize={{base: "18px", lg: "20px"}}
					lineHeight={{base: "28px", lg: "30px"}}
					color={variant === 'dark' ? 'white' :"gray.500"}
					maxW="768px"
					fontWeight="400"
				>
					{desc}
				</Text>
			) : null}
		</>
	);
};
export default SectionTitle;
