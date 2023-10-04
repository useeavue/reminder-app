import { MoonIcon, SettingsIcon, SunIcon } from '@chakra-ui/icons';
import {
	IconButton,
	Link,
	Tooltip,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';
import styles from './Header.module.scss';

import { Link as ReactRouterLink } from 'react-router-dom';

export const Header: React.FC = () => {
	const { toggleColorMode } = useColorMode();

	return (
		<header className={styles.header}>
			<h1 className={styles.heading}>My reminders</h1>
			<nav className={styles.nav}>
				<Tooltip label='Toggle theme' fontSize='md' borderRadius={5}>
					<IconButton
						aria-label={useColorModeValue('Dark theme', 'Light theme')}
						colorScheme={useColorModeValue('purple', 'orange')}
						icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
						onClick={toggleColorMode}
					/>
				</Tooltip>
				<Tooltip label='Settings' fontSize='md' borderRadius={5}>
					<Link as={ReactRouterLink} to='/settings'>
						<IconButton
							aria-label='Settings'
							colorScheme='telegram'
							icon={<SettingsIcon />}
						/>
					</Link>
				</Tooltip>
			</nav>
		</header>
	);
};
