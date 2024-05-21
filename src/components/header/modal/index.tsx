// packages
import {
	Badge,
	Box,
	Button,
	FormControl,
	FormLabel,
	Grid,
	GridItem,
	Heading,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	useBreakpointValue,
} from '@chakra-ui/react';
import { useIntl } from 'gatsby-plugin-react-intl';
import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

//config
import URLS from '@config/urls';

//types
import { IDeveloperModalProps } from './types';

const DeveloperModal: FC<IDeveloperModalProps> = ({ isOpen, onClose }) => {
	const intl = useIntl();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [ok, setIsOk] = useState<boolean>(false);

	const device = useBreakpointValue({ base: 'sm', md: 'md' });

	const onSubmit = (data: any) => {
		fetch(`${URLS.developer}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			},
			body: JSON.stringify({ data }),
		}).then((e) => {
			e.ok ? setIsOk(true) : setIsOk(false);
		});
	};

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			size={{ base: 'xs', md: 'md', lg: '3xl' }}
		>
			<ModalOverlay />
			{ok ? (
				<ModalContent>
					<ModalBody py={6}>
						<Heading
							fontSize="24px"
							lineHeight="32px"
							color="gray.900"
							mb="4px"
						>
							{intl.formatMessage({ id: 'developer.thanks' })}
						</Heading>
						<Text fontSize="14px" lineHeight="20px" color="gray.700">
							{intl.formatMessage({ id: 'developer.thanksMessage' })}
						</Text>
					</ModalBody>
					<ModalFooter pb={6} pt={2}>
						<Button
							h="44px"
							borderRadius="3px"
							py="10px"
							px="18px"
							variant="primary"
							onClick={onClose}
						>
							{intl.formatMessage({ id: 'developer.und' })}
						</Button>
					</ModalFooter>
				</ModalContent>
			) : (
				<form onSubmit={handleSubmit(onSubmit)}>
					<ModalContent>
						<ModalHeader pt={6}>
							{device === 'sm' ? null : (
								<Badge
									px={2}
									py={0.5}
									bgColor="primary.50"
									borderRadius="16px"
									colorScheme="primary.50"
									color="primary.700"
									textTransform="none"
									fontSize="12px"
									lineHeight="18px"
									fontWeight="400"
								>
									{intl.formatMessage({ id: 'developer.modalTitle' })}
								</Badge>
							)}
						</ModalHeader>
						<ModalBody pb={4} pt={0}>
							<Heading
								fontSize="24px"
								lineHeight="32px"
								color="gray.900"
								mb="4px"
							>
								{intl.formatMessage({ id: 'developer.modalTitle' })}
							</Heading>
							<Text fontSize="14px" lineHeight="20px" color="gray.700" mb={4}>
								{intl.formatMessage({ id: 'developer.desc' })}
							</Text>
							<Text
								fontSize="14px"
								lineHeight="20px"
								fontWeight="500"
								color="gray.900"
								mb={8}
							>
								{intl.formatMessage({ id: 'developer.beta' })}
							</Text>
							<Grid templateColumns="repeat(2, 1fr)" gap={4}>
								<GridItem colSpan={{ base: 2, lg: 1 }}>
									<FormControl isInvalid={errors.name}>
										<FormLabel htmlFor="name" fontSize="sm">
											{intl.formatMessage({ id: 'developer.nameLabel' })}
										</FormLabel>
										<Input
											type="text"
											placeholder={intl.formatMessage({
												id: 'developer.namePlaceholder',
											})}
											{...register('name', { required: true })}
										/>
										{errors.name && (
											<Text color="error.400" mt={2} fontSize="sm">
												{intl.formatMessage({ id: 'contact.error.name' })}
											</Text>
										)}
									</FormControl>
								</GridItem>
								<GridItem colSpan={{ base: 2, lg: 1 }}>
									<FormControl isInvalid={errors.email}>
										<FormLabel htmlFor="email" fontSize="sm">
											{intl.formatMessage({ id: 'developer.emailLabel' })}
										</FormLabel>
										<Input
											type="email"
											placeholder={intl.formatMessage({
												id: 'developer.emailPlaceholder',
											})}
											{...register('email', {
												required: true,
												pattern: /^\S+@\S+$/i,
											})}
										/>
										{errors.email && (
											<Text color="error.400" mt={2} fontSize="sm">
												{intl.formatMessage({ id: 'contact.error.email' })}
											</Text>
										)}
									</FormControl>
								</GridItem>
								<GridItem colSpan={{ base: 2, lg: 1 }}>
									<FormControl isInvalid={errors.api}>
										<FormLabel htmlFor="api" fontSize="sm">
											{intl.formatMessage({ id: 'developer.apiLabel' })}
										</FormLabel>
										<Input
											type="text"
											placeholder={intl.formatMessage({
												id: 'developer.apiPlaceholder',
											})}
											{...register('api', { required: true })}
										/>
										{errors.api && (
											<Text color="error.400" mt={2} fontSize="sm">
												{intl.formatMessage({ id: 'contact.error.empty' })}
											</Text>
										)}
									</FormControl>
								</GridItem>
								<GridItem colSpan={{ base: 2, lg: 1 }}>
									<FormControl isInvalid={errors.company}>
										<FormLabel htmlFor="company" fontSize="sm">
											{intl.formatMessage({ id: 'developer.companyLabel' })}
										</FormLabel>
										<Input
											type="text"
											placeholder={intl.formatMessage({
												id: 'developer.companyPlaceholder',
											})}
											{...register('company')}
										/>
									</FormControl>
								</GridItem>
							</Grid>
						</ModalBody>

						<ModalFooter justifyContent="flex-start" pb={6}>
							<Button
								h="44px"
								borderRadius="3px"
								py="10px"
								px="18px"
								variant="primary"
								mr={4}
								type="submit"
							>
								{intl.formatMessage({ id: 'developer.signUp' })}
							</Button>
							<Button
								h="44px"
								borderRadius="3px"
								py="10px"
								px="18px"
								onClick={onClose}
							>
								{intl.formatMessage({ id: 'developer.later' })}
							</Button>
						</ModalFooter>
					</ModalContent>
				</form>
			)}
		</Modal>
	);
};
export default DeveloperModal;
