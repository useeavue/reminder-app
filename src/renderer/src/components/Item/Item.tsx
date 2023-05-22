import { EditIcon } from '@chakra-ui/icons';
import {
	Box,
	useColorModeValue,
	Flex,
	Text,
	Spacer,
	Tooltip,
	IconButton,
	Checkbox,
	Center,
	Highlight,
	useDisclosure,
} from '@chakra-ui/react';
import { useAppDispatch } from '@renderer/hooks/redux';
import { Reminder } from '@renderer/models/reminder';
import { markAsCompleted } from '@renderer/store/slices/reminderSlice';
import { ModalForm } from '../ModalForm/ModalForm';

type Props = {
	value: Reminder;
};

export const Item: React.FC<Props> = ({ value }) => {
	const dispatch = useAppDispatch();
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box
			textAlign='left'
			background={useColorModeValue('blackAlpha.50', 'whiteAlpha.100')}
			borderRadius={12}
		>
			<Flex>
				{!value.completed ? (
					<Center p={3} paddingRight={0}>
						<Checkbox
							size={'lg'}
							onChange={() => {
								setTimeout(() => {
									dispatch(markAsCompleted(value.id));
								}, 250);
							}}
						/>
					</Center>
				) : null}

				<Flex direction={'column'} gap={1} p={3}>
					<Text fontSize='xl' fontWeight='medium' noOfLines={1}>
						{value.name}
					</Text>

					<Text fontSize={14}>
						<Highlight
							query={[
								value.eventDate.startTime,
								value.eventDate.endTime,
							]}
							styles={{
								px: '1',
								py: '0',
								rounded: 'full',
								bg: 'telegram.100',
							}}
						>
							{`Start: ${value.eventDate.startTime} End: ${value.eventDate.endTime}`}
						</Highlight>
					</Text>
				</Flex>
				<Spacer />
				<Center p={3}>
					<Flex direction={'column'} gap={2}>
						<Tooltip label='Edit' fontSize='sm' borderRadius={5}>
							<IconButton
								aria-label='Edit'
								colorScheme='teal'
								icon={<EditIcon />}
								onClick={onOpen}
								size='sm'
							/>
						</Tooltip>
						<ModalForm {...{ isOpen, onClose, value }} />
					</Flex>
				</Center>
			</Flex>
		</Box>
	);
};
