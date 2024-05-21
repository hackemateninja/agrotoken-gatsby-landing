// packages
import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Grid,
	GridItem,
	Input,
	Select,
	Text,
	Textarea,
} from '@chakra-ui/react';
import { navigate } from 'gatsby';
import { useIntl } from 'gatsby-plugin-react-intl';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

//types
import { IContactFormProps } from '@comp/contact-form/types';

//configs
import TitleOptions from '@comp/title-options';

//contact form that gets desc, title and help text from page
const ContactForm: FC<IContactFormProps> = ({
	title,
	contactURL,
	helpText,
	description,
	isOneRow,
}) => {
	const intl = useIntl();

	const condIsOneRow = isOneRow ? 2 : 1;

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data: any) => {
		fetch(`${contactURL}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			},
			body: JSON.stringify(data),
		}).then(() => {
			navigate(`/get-in-touch/${data.role.trim()}`);
		});
	};

	return (
		<Box w="100%">
			<TitleOptions
				title={title}
				description={description}
				helpText={helpText}
			/>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Grid templateColumns="repeat(2, 1fr)" gap={4}>
					<GridItem colSpan={{ base: 2, lg: condIsOneRow }}>
						<FormControl isInvalid={errors.name}>
							<FormLabel htmlFor="name" fontSize="sm">
								{intl.formatMessage({ id: 'contact.name' })}
							</FormLabel>
							<Input
								type="text"
								placeholder={intl.formatMessage({
									id: 'contact.name.placeholder',
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
					<GridItem colSpan={{ base: 2, lg: condIsOneRow }}>
						<FormControl isInvalid={errors.email}>
							<FormLabel htmlFor="email" fontSize="sm">
								{intl.formatMessage({ id: 'contact.email' })}
							</FormLabel>
							<Input
								type="email"
								placeholder={intl.formatMessage({
									id: 'contact.email.placeholder',
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
					<GridItem colSpan={{ base: 2, lg: condIsOneRow }}>
						<FormControl isInvalid={errors.tel}>
							<FormLabel htmlFor="tel" fontSize="sm">
								{intl.formatMessage({ id: 'contact.phone' })}
							</FormLabel>
							<Input
								type="tel"
								placeholder={intl.formatMessage({
									id: 'contact.phone.placeholder',
								})}
								{...register('tel', { required: true })}
							/>
							{errors.tel && (
								<Text color="error.400" mt={2} fontSize="sm">
									{intl.formatMessage({ id: 'contact.error.phone' })}
								</Text>
							)}
						</FormControl>
					</GridItem>
					<GridItem colSpan={{ base: 2, lg: condIsOneRow }}>
						<FormControl isInvalid={errors.role}>
							<FormLabel htmlFor="role" fontSize="sm">
								{intl.formatMessage({ id: 'contact.role.label' })}
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
					<GridItem colSpan={{ base: 2, lg: condIsOneRow }}>
						<FormControl>
							<FormLabel htmlFor="message" fontSize="sm">
								{intl.formatMessage({ id: 'contact.message' })}
							</FormLabel>
							<Textarea
								placeholder={intl.formatMessage({
									id: 'contact.message.placeholder',
								})}
								{...register('message', {})}
							/>
						</FormControl>
					</GridItem>
					<GridItem colSpan={{ base: 2, lg: condIsOneRow }}>
						<FormControl>
							<FormLabel htmlFor="company" fontSize="sm">
								{intl.formatMessage({ id: 'contact.company' })}
							</FormLabel>
							<Input
								type="text"
								placeholder={intl.formatMessage({
									id: 'contact.company.placeholder',
								})}
								{...register('company', {})}
							/>
						</FormControl>
					</GridItem>
					<GridItem colSpan={1}>
						<Button h="44px" px="18" type="submit" variant="primary">
							{intl.formatMessage({ id: 'contact.submit' })}
						</Button>
					</GridItem>
				</Grid>
			</form>
		</Box>
	);
};
export default ContactForm;
