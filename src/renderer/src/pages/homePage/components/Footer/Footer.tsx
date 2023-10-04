import { AddIcon } from '@chakra-ui/icons';
import { Button, Center, useDisclosure } from '@chakra-ui/react';
import { ModalForm } from '../ModalForm/ModalForm';

export const Footer: React.FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Center paddingTop={5} paddingBottom={5}>
			<Button
				colorScheme='teal'
				variant='solid'
				lineHeight={0}
				size='lg'
				onClick={onOpen}
			>
				New reminder
				<AddIcon marginLeft={2} fontSize={16} />
			</Button>
			<ModalForm {...{ isOpen, onClose }} />
		</Center>
	);
};
