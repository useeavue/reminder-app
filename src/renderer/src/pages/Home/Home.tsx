import { Box, Stack, useColorModeValue } from '@chakra-ui/react';
import { Header } from '../../components/Header/Header';
import { Footer } from '@renderer/components/Footer/Footer';

export const Home: React.FC = () => {
	return (
		<div className='container'>
			<Header />
			<Stack spacing={4} paddingTop={8} height='100%'>
				<Box
					padding={3}
					textAlign='center'
					background={useColorModeValue('blackAlpha.50', 'whiteAlpha.100')}
					borderRadius={5}
					fontWeight='semibold'
					fontSize='lg'
				>
					No tasks for now...
				</Box>
			</Stack>
			<Footer />
		</div>
	);
};
