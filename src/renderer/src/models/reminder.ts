export enum NotificationTimeMeasurement {
	Seconds = 'seconds',
	Minutes = 'minutes',
	Hours = 'hours',
	Days = 'days',
}

export interface Reminder {
	id: number;
	name: string;
	creationTime: string;
	notificationTime: string;
	eventDate: EventDate;
	completed: boolean;
}

export interface EventDate {
	day: string;
	startTime: string;
	endTime: string;
}

export interface TimeUntilNotification {
	type: NotificationTimeMeasurement;
	value: number;
}
