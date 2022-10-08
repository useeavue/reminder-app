import styles from './Home.module.scss';
import { Box, Button, IconButton, Tooltip } from '@chakra-ui/react';
import { AddIcon, MoonIcon, SettingsIcon } from '@chakra-ui/icons';

export const Home: React.FC = () => {
	return (
		<div className='container'>
			<header className={styles.header}>
				<h1 className={styles.heading}>My reminders</h1>
				<nav className={styles.nav}>
					<Tooltip label='Dark theme' fontSize='md'>
						<IconButton
							aria-label='Dark theme'
							colorScheme={'purple'}
							icon={<MoonIcon />}
						/>
					</Tooltip>
					<Tooltip label='Settings' fontSize='md'>
						<IconButton
							aria-label='Settings'
							colorScheme={'blue'}
							icon={<SettingsIcon />}
						/>
					</Tooltip>
				</nav>
			</header>
			<main className={styles.content}>
				<Box
					padding={3}
					textAlign='center'
					background='blackAlpha.100'
					borderRadius={5}
					fontWeight='semibold'
					fontSize='lg'
				>
					No tasks for now...
				</Box>
			</main>
			<footer className={styles.footer}>
				<Button colorScheme='teal' variant='solid' lineHeight={0} size='lg'>
					New reminder
					<AddIcon marginLeft={2} fontSize={16} />
				</Button>
			</footer>
		</div>
	);
};
