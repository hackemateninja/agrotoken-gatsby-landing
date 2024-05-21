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
	ModalOverlay, Select,
	Text,
} from '@chakra-ui/react';
import { useIntl } from 'gatsby-plugin-react-intl';
import { navigate } from "gatsby"
import React, {FC, useState} from 'react';
import { useForm } from 'react-hook-form';

//config
import URLS from "@config/urls";

//types
import IQatarModalProps  from './types';

type IIntent = 'success' | 'error' | undefined;

const QatarModal: FC<IQatarModalProps> = ({isOpen, onClose }) => {
	const intl = useIntl();


	const [isValidCui, setIsValidCui] = useState<boolean>(false);
	const [intent, setIntent] = useState<string>();

	const [email, setEmail] = useState<IIntent>();

	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm();
	const [ok, setIsOk] = useState<boolean>(false);

	const onSubmit = async (data: any) => {

		const res = await fetch(`${URLS.qatarEndpoint}?cuit=${data.cui}`);
		const d = await res.json();

		console.log(typeof d.res)

		if (d.res === "1" ){
			fetch(`${URLS.qatarCui}`, {
				method: 'POST',
				headers: {'Content-Type': 'application/json', 'Accept': 'application/json',},
				body: JSON.stringify({...data}),
			}).then((e) => {
				if (e.ok){
					navigate('/[agrotoken-catar2022]-redirect')
				}
			})
		}else {
			setIntent('success');
			setEmail(data.email)
		}
	}

	const onSubmitPassedCui = (data: any) => {
		fetch(`${URLS.qatar}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			},
			body: JSON.stringify({ ...data }),
		}).then((e) => {
			if (e.ok) {
				setIsOk(true)
			}
		});
	}


const FormNoPassedCui = () => {
	if (ok){
		return (
			<ModalContent>
				<ModalBody py={6}>
					<Heading
						fontSize="24px"
						lineHeight="32px"
						color="gray.900"
						mb="4px">
						{intl.formatMessage({ id: 'qatar.modalTitle' })}
					</Heading>
					<Text fontSize="14px" lineHeight="20px" color="gray.700">
						{intl.formatMessage({ id: 'qatar.modalMessage' })}
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
		)
	}else {
		return (
			<form onSubmit={handleSubmit(onSubmitPassedCui)}>
				<ModalContent>
					<ModalBody pb={4} pt={6}>
						<Heading
							fontSize="24px"
							lineHeight="32px"
							color="gray.900"
							mb="4px"
						>
							{intl.formatMessage({ id: 'qatar.modalTitleInputs' })}
						</Heading>
						<Text fontSize="14px" lineHeight="20px" color="gray.700" mb={4}>
							{intl.formatMessage({ id: 'qatar.modalDescInputs' })}
						</Text>
						<Grid templateColumns="repeat(2, 1fr)" gap={4}>
							<GridItem colSpan={{ base: 2, lg: 1 }}>
								<FormControl isInvalid={errors.tel}>
									<FormLabel htmlFor="fullName" fontSize="sm">
										{intl.formatMessage({ id: 'teaser.nameLabel' })}
									</FormLabel>
									<Input
										type="text"
										placeholder={intl.formatMessage({
											id: 'teaser.namePlaceholder',
										})}
										{...register('fullName', { required: true})}
									/>
									{errors.fullName && (
										<Text color="error.400" mt={2} fontSize="sm">
											{intl.formatMessage({ id: 'contact.error.empty' })}
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
						</Grid>
						<Input type='hidden' value={email} {...register('email', { required: true })}/>
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
		)
	}
}


	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			size={{ base: 'xs', md: 'md', lg: '3xl' }}>
			<ModalOverlay />
			{intent !== 'success' ? <form onSubmit={handleSubmit(onSubmit)}>
				<ModalContent>
					<ModalBody pb={4} pt={6}>
						<Heading
							fontSize="24px"
							lineHeight="32px"
							color="gray.900"
							mb="4px"
						>
							{intl.formatMessage({ id: 'qatar.modalTitleInputs' })}
						</Heading>
						<Text fontSize="14px" lineHeight="20px" color="gray.700" mb={4}>
							{intl.formatMessage({ id: 'qatar.modalDescInputs' })}
						</Text>
						<Grid templateColumns="repeat(2, 1fr)" gap={4}>
							<GridItem colSpan={{ base: 2, lg: 1 }}>
								<FormControl isInvalid={errors.cui}>
									<FormLabel htmlFor="cui" fontSize="sm">
										{intl.formatMessage({ id: 'qatar.cuitLabel' })}
									</FormLabel>
									<Input
										type='number'
										disabled={isValidCui}
										placeholder={intl.formatMessage({
											id: 'qatar.cuitPlaceHolder',
										})}
										{...register('cui', { required: true })}
									/>
									<Text color="gray.500" mt={2} fontSize="sm" fontWeight='400'>
										{intl.formatMessage({ id: 'qatar.sisa' })}
									</Text>
									{errors.cui && (
										<Text color="error.400" mt={2} fontSize="sm">
											{intl.formatMessage({ id: 'contact.error.name' })}
										</Text>
									)}
								</FormControl>
							</GridItem>
							<GridItem colSpan={{ base: 2, lg: 1 }}>
								<FormControl isInvalid={errors.fullName}>
									<FormLabel htmlFor="fullName" fontSize="sm">
										{intl.formatMessage({ id: 'teaser.nameLabel' })}
									</FormLabel>
									<Input
										type="text"
										placeholder={intl.formatMessage({
											id: 'teaser.namePlaceholder',
										})}
										{...register('fullName', { required: true})}
									/>
									{errors.fullName && (
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
								<FormControl isInvalid={errors.acoOther}>
									<FormLabel htmlFor="acoOther" fontSize="sm">
										{intl.formatMessage({ id: 'qatar.acopLabel' })}
									</FormLabel>
									<Input
										type="text"
										placeholder={intl.formatMessage({
											id: 'qatar.acopPlaceHolder',
										})}
										{...register('acoOther', { required: false})}
									/>
									{errors.aco && (
										<Text color="error.400" mt={2} fontSize="sm">
											{intl.formatMessage({ id: 'contact.error.empty' })}
										</Text>
									)}
								</FormControl>
							</GridItem>
							<GridItem colSpan={{ base: 2, lg: 1 }}>
								<FormControl isInvalid={errors.email}>
									<FormLabel htmlFor="email" fontSize="sm">
										{intl.formatMessage({ id: 'visa.emailLabel' })}
									</FormLabel>
									<Input
										type="email"
										placeholder={intl.formatMessage({
											id: 'visa.emailPlace',
										})}
										{...register('email', { required: true})}
									/>
									{errors.email && (
										<Text color="error.400" mt={2} fontSize="sm">
											{intl.formatMessage({ id: 'contact.error.email' })}
										</Text>
									)}
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
			</form> : <FormNoPassedCui/> }
		</Modal>
	);
};
export default QatarModal;
