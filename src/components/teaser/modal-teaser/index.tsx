// packages
import {
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
	ModalOverlay,
	Select,
	Text,
} from '@chakra-ui/react';
import { useIntl } from 'gatsby-plugin-react-intl';
import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';


//types
import { ITeaserModalProps } from './types';

const TeaserModal: FC<ITeaserModalProps> = ({ url,variant,isOpen, email, onClose, comesFrom }) => {
	const intl = useIntl();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [ok, setIsOk] = useState<boolean>(false);

	const onSubmit = (data: any) => {

		fetch(`${url}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			},
			body: JSON.stringify({ ...data, comesFrom }),
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
							{intl.formatMessage({ id: 'teaser.thanks' })}
						</Heading>
						<Text fontSize="14px" lineHeight="20px" color="gray.700">
							{variant === 'Qatar' ?
								intl.formatMessage({ id: 'qatar.thanksMessage' }) :
								intl.formatMessage({ id: 'teaser.thanksMessage' })}
						</Text>
					</ModalBody>
					<ModalFooter justifyContent="flex-start" pb={6} pt={2}>
						<Button
							h="44px"
							borderRadius="3px"
							py="10px"
							px="18px"
							variant="primary"
							onClick={onClose}
						>
							{intl.formatMessage({ id: 'teaser.und' })}
						</Button>
					</ModalFooter>
				</ModalContent>
			) : (
				<form onSubmit={handleSubmit(onSubmit)}>
					<ModalContent>
						<ModalBody pb={4} pt={6}>
							<Heading
								fontSize="24px"
								lineHeight="32px"
								color="gray.900"
								mb="4px"
							>
								{variant === 'Qatar' ?
									intl.formatMessage({ id: 'qatar.modalTitleInputs' }) :
									intl.formatMessage({ id: 'visa.contactTitle' })}
							</Heading>
							<Text fontSize="14px" lineHeight="20px" color="gray.700" mb={4}>
								{variant === 'Qatar' ?
									intl.formatMessage({ id: 'qatar.modalDescInputs' }) :
									intl.formatMessage({ id: 'visa.contactTitle' })}
							</Text>
							<Grid templateColumns="repeat(2, 1fr)" gap={4}>
								<GridItem colSpan={{ base: 2, lg: 1 }}>
									<FormControl isInvalid={errors.name}>
										<FormLabel htmlFor="name" fontSize="sm">
											{intl.formatMessage({ id: 'teaser.nameLabel' })}
										</FormLabel>
										<Input
											type="text"
											placeholder={intl.formatMessage({
												id: 'teaser.namePlaceholder',
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
									<FormControl isInvalid={errors.tel}>
										<FormLabel htmlFor="tel" fontSize="sm">
											{intl.formatMessage({ id: 'teaser.telLabel' })}
										</FormLabel>
										<Input
											type="tel"
											placeholder={intl.formatMessage({
												id: 'teaser.telPlaceholder',
											})}
											{...register('tel', { required: true })}
										/>
										{errors.tel && (
											<Text color="error.400" mt={2} fontSize="sm">
												{intl.formatMessage({ id: 'contact.error.empty' })}
											</Text>
										)}
									</FormControl>
								</GridItem>
								<GridItem colSpan={{ base: 2, lg: 1 }}>
									<FormControl isInvalid={errors.aco}>
										<FormLabel htmlFor="aco" fontSize="sm">
											{intl.formatMessage({ id: 'teaser.acoLabel' })}
										</FormLabel>
										<Input
											type="text"
											placeholder={intl.formatMessage({
												id: 'teaser.acoPlaceholder',
											})}
											{...register('aco', { required: true })}
										/>
										{errors.aco && (
											<Text color="error.400" mt={2} fontSize="sm">
												{intl.formatMessage({ id: 'contact.error.empty' })}
											</Text>
										)}
									</FormControl>
								</GridItem>
								<GridItem colSpan={{ base: 2, lg: 1 }}>
									<FormControl isInvalid={errors.role}>
										<FormLabel htmlFor="role" fontSize="sm">
											{intl.formatMessage({ id: 'teaser.rolLabel' })}
										</FormLabel>
										<Select
											borderRadius="md"
											{...register('role', { required: true })}
										>
											<option value="" selected={true} disabled>
												{intl.formatMessage({ id: 'contact.role.placeholder' })}
											</option>
											<option value="farmer">
												{intl.formatMessage({ id: 'contact.role.producer' })}
											</option>
											<option value=" merchant">
												{' '}
												{intl.formatMessage({ id: 'contact.role.merchant' })}
											</option>
											<option value=" investor">
												{' '}
												{intl.formatMessage({ id: 'contact.role.investor' })}
											</option>
											<option value=" other">
												{' '}
												{intl.formatMessage({ id: 'contact.role.other' })}
											</option>
										</Select>
										{errors.role && (
											<Text color="error.400" mt={2} fontSize="sm">
												{intl.formatMessage({ id: 'contact.error.empty' })}
											</Text>
										)}
									</FormControl>
								</GridItem>
								{email ? <Input type='hidden' value={email} {...register('email', { required: true })}/> : <GridItem colSpan={{ base: 2, lg: 1 }}>
									<FormControl isInvalid={errors.email}>
										<FormLabel htmlFor="email" fontSize="sm">
											{intl.formatMessage({ id: 'visa.emailLabel' })}
										</FormLabel>
										<Input
											type="email"
											placeholder={intl.formatMessage({
												id: 'visa.emailPlace',
											})}
											{...register('email', { required: true })}
										/>
										{errors.email && (
											<Text color="error.400" mt={2} fontSize="sm">
												{intl.formatMessage({ id: 'contact.error.email' })}
											</Text>
										)}
									</FormControl>
								</GridItem>}
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
								{intl.formatMessage({ id: 'teaser.buttonText' })}
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
export default TeaserModal;
