import {
	Box,
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Stack,
} from '@chakra-ui/react';
import { useAppDispatch } from '@renderer/hooks/redux';
import { Reminder } from '@renderer/models/reminder';
import {
	addReminder,
	editReminder,
} from '@renderer/store/slices/reminderSlice';
import { Field, Form, Formik } from 'formik';

interface Props {
	isOpen: boolean;
	onClose: () => void;
	value?: Reminder;
}

interface FormValues {
	name: string;
	day: string;
	startTime: string;
	endTime: string;
	notificationTime: string;
}

export const ModalForm: React.FC<Props> = ({ isOpen, onClose, value }) => {
	const initialValues: FormValues = {
		name: '',
		day: new Date().toLocaleDateString('en-CA'),
		startTime: '10:00',
		endTime: '11:00',
		notificationTime: new Date().toLocaleDateString('en-CA') + 'T09:00',
	};
	const getFormValues = (): FormValues => {
		if (value) {
			return {
				name: value.name,
				day: value.eventDate.day,
				startTime: value.eventDate.startTime,
				endTime: value.eventDate.endTime,
				notificationTime: value.notificationTime,
			};
		}
		return initialValues;
	};

	const dispatch = useAppDispatch();

	return (
		<Modal
			scrollBehavior='inside'
			isCentered
			isOpen={isOpen}
			onClose={onClose}
		>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>{`${value ? 'Edit' : 'New'} reminder`}</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Formik
						initialValues={getFormValues()}
						onSubmit={(formValues, actions) => {
							const retrieved = {
								name: formValues.name,
								creationTime: new Date().toISOString(),
								eventDate: {
									day: formValues.day,
									endTime: formValues.endTime,
									startTime: formValues.startTime,
								},
								notificationTime: formValues.notificationTime,
								completed: false,
							};

							if (value) {
								dispatch(
									editReminder({
										...retrieved,
										id: value.id,
									})
								);
							} else {
								dispatch(addReminder(retrieved));
							}

							onClose();
						}}
					>
						{props => (
							<Form>
								<Stack spacing={4}>
									<Field name='name'>
										{({ field, form }) => (
											<FormControl
												isInvalid={
													form.errors.name && form.touched.name
												}
											>
												<FormLabel>Event name</FormLabel>
												<Input {...field} placeholder='Name' />
												<FormErrorMessage>
													{form.errors.name}
												</FormErrorMessage>
											</FormControl>
										)}
									</Field>
									<Field name='day'>
										{({ field, form }) => {
											return (
												<FormControl
													isInvalid={
														form.errors.day && form.touched.day
													}
												>
													<FormLabel>Event date</FormLabel>
													<Input
														{...field}
														placeholder='Event date'
														type='date'
													/>
													<FormErrorMessage>
														{form.errors.name}
													</FormErrorMessage>
												</FormControl>
											);
										}}
									</Field>
									<Field name='startTime'>
										{({ field, form }) => (
											<FormControl
												isInvalid={
													form.errors.startTime &&
													form.touched.startTime
												}
											>
												<FormLabel>Start time</FormLabel>
												<Input
													{...field}
													placeholder='Start time'
													type='time'
												/>
												<FormErrorMessage>
													{form.errors.name}
												</FormErrorMessage>
											</FormControl>
										)}
									</Field>
									<Field name='endTime'>
										{({ field, form }) => (
											<FormControl
												isInvalid={
													form.errors.endTime &&
													form.touched.endTime
												}
											>
												<FormLabel>End time</FormLabel>
												<Input
													{...field}
													placeholder='End time'
													type='time'
												/>
												<FormErrorMessage>
													{form.errors.name}
												</FormErrorMessage>
											</FormControl>
										)}
									</Field>
									<Field name='notificationTime'>
										{({ field, form }) => (
											<FormControl
												isInvalid={
													form.errors.notificationTime &&
													form.touched.notificationTime
												}
											>
												<FormLabel>When to remind?</FormLabel>
												<Input
													{...field}
													placeholder='When to remind?'
													type='datetime-local'
												/>
												<FormErrorMessage>
													{form.errors.name}
												</FormErrorMessage>
											</FormControl>
										)}
									</Field>
								</Stack>
								<Box mt={4} mb={2}>
									<Button
										mr={4}
										colorScheme='teal'
										isLoading={props.isSubmitting}
										type='submit'
									>
										Save
									</Button>
									<Button variant='ghost' onClick={onClose}>
										Cancel
									</Button>
								</Box>
							</Form>
						)}
					</Formik>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};
