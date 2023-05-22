import { Box, useColorModeValue } from '@chakra-ui/react';
import { Reminder } from '@renderer/models/reminder';
import React from 'react';
import { Item } from '../Item/Item';

type Props = {
	list: Reminder[];
};

export const ItemList: React.FC<Props> = ({ list }) => {
	return list?.length ? (
		<React.Fragment>
			{list.map(item => (
				<Item key={item.id} value={item} />
			))}
		</React.Fragment>
	) : (
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
	);
};
