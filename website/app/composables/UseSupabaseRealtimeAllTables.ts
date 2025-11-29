type EventType = "INSERT" | "UPDATE" | "DELETE";

export const UseSupabaseRealtimeAllTables = () => {
	// Mocking an event emitter interface
	const on = (event: EventType, callback: (payload: any) => void) => {
		// No-op for now as we don't have real events
	};

	return {
		events: { on },
	};
};
