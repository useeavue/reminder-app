export interface Reminder {
	id?: number;
	name: string;
	creationTime: string;
	notificationTime: string;
	eventDate: EventDate;
	completed: boolean;
	started: boolean;
}

export interface EventDate {
	day: string;
	startTime: string;
	endTime: string;
}
