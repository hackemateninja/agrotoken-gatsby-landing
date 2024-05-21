import {
	Alert,
	AlertIcon,
	Button,
	FormControl,
	Grid,
	GridItem,
	Input,
	Text,
	useBreakpointValue,
	useDisclosure,
} from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import addToMailchimp from 'gatsby-plugin-mailchimp';

import {
	IMailChimp,
	Inputs,
	ISubscriptionFormProps,
} from '@comp/subscription-form/types';


import TeaserModal from '@comp/teaser/modal-teaser';


import URLS from "@config/urls";

const emailPattern = /^\S+@\S+$/i;

const SubscriptionForm: FC<ISubscriptionFormProps> = ({
	variant,
	placeholder,
	buttonText,
	errorMessage,
}) => {
	const device = useBreakpointValue({ base: 'mobile', lg: 'lg' });

	const [email, setEmail] = useState<string>('');
	const { isOpen, onOpen, onClose } = useDisclosure();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	const [chimpData, setChimpData] = useState<IMailChimp>({
		result: '',
		msg: '',
	});

	const onSubmit: SubmitHandler<Inputs> = async ({ email }) => {
		if (variant === 'Teaser' || variant === 'Qatar') {
			if (emailPattern.test(email)) {
				setEmail(email);
				onOpen();
			} else {
				setEmail('');
			}
		} else {
			const { result, msg } = await addToMailchimp(email);
			setChimpData((prev) => ({
				...prev,
				...{ result, msg },
			}));
			setTimeout(() => {
				setChimpData({
					result: '',
					msg: '',
				});
			}, 2000);
		}
	};

	const handleUrlForm = (): string => {
		switch (variant){
			case "Qatar":
				return URLS.qatar
			case "Teaser":
				return URLS.visa
			default:
				return URLS.visa
		}
	}

	const url = handleUrlForm();

	return (
		<>
			<TeaserModal
				variant={variant}
				url={url}
				isOpen={isOpen}
				onClose={onClose}
				email={email}
				comesFrom='form'
			/>
			<form
				style={{ width: device === 'mobile' ? '100%' : 'auto' }}
				onSubmit={handleSubmit(onSubmit)}
			>
				<Grid w="100%" templateColumns="repeat(4, 1fr)" gap={4}>
					{/* @ts-ignore */}
					<GridItem colSpan={{ base: 4, lg: 3 }}>
						<FormControl isInvalid={errors.email}>
							<Input
								type="email"
								h="44px"
								py="10px"
								px="14px"
								placeholder={placeholder}
								{...register('email', {
									required: true,
									pattern: emailPattern,
								})}
							/>
							{errors.email && (
								<Text color="error.400" mt={2} fontSize="sm">
									{errorMessage}
								</Text>
							)}
						</FormControl>
					</GridItem>
					<GridItem colSpan={{ base: 4, lg: 1 }}>
						<Button
							type="submit"
							w="100%"
							variant="primary"
							h="44px"
							borderRadius="3px"
							px="18px"
							py="10px"
						>
							{buttonText}
						</Button>
					</GridItem>
				</Grid>
			</form>
			{chimpData.result ? (
				<Alert
					borderRadius={4}
					status={chimpData.result === 'error' ? 'error' : 'success'}
				>
					<AlertIcon />
					{chimpData.msg}
				</Alert>
			) : null}
		</>
	);
};

export default SubscriptionForm;
