import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
} from '@chakra-ui/react';

interface Props {
	isOpen: boolean;
	onClose: () => void;
}

export const ModalForm: React.FC<Props> = ({ isOpen, onClose }) => {
	return (
		<Modal isCentered isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>New reminder</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Text>qweqweqweqwe</Text>
				</ModalBody>

				<ModalFooter>
					<Button colorScheme='teal' mr={3} onClick={onClose}>
						Save
					</Button>
					<Button variant='ghost'>Cancel</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};
