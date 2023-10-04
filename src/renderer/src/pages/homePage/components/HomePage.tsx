import { Stack } from '@chakra-ui/react';
import { Footer } from '@renderer/pages/homePage/components/Footer/Footer';
import { useAppSelector } from '@renderer/shared/hooks/redux';
import { Header } from './Header/Header';
import { ItemList } from './ItemList/ItemList';

export const HomePage: React.FC = () => {
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
