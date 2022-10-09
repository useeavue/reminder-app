import { AddIcon } from '@chakra-ui/icons';
import { Button, Center } from '@chakra-ui/react';

export const Footer: React.FC = () => {
	return (
		<Center paddingTop={5} paddingBottom={5}>
			<Button colorScheme='teal' variant='solid' lineHeight={0} size='lg'>
				New reminder
				<AddIcon marginLeft={2} fontSize={16} />
			</Button>
		</Center>
	);
};
