import { Stack } from '@chakra-ui/react';
import { Header } from '../components/Header/Header';
import { Footer } from '@renderer/components/Footer/Footer';
import { ItemList } from '@renderer/components/ItemList/ItemList';
import { useAppSelector } from '@renderer/hooks/redux';

export const Home: React.FC = () => {
	const items = useAppSelector(state => state.reminder.list);
	return (
		<div className='container'>
			<Header />
			<Stack spacing={4} paddingTop={8} height='100%'>
				<ItemList list={items}></ItemList>
			</Stack>
			<Footer />
		</div>
	);
};
