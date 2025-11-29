export interface ApiResponse<T> {
	success: boolean;
	data: T;
	error?: string;
}

export interface SelectOption {
	value: string;
	label: string;
}
