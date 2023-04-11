import { writable } from 'svelte/store';
import type { AuthDataStore } from 'src/types';

/* authDataStore is initialized with the return value from an IIFE that is used to create the authDataStore with initial values and returns an object with methods to subscribe to the dataStore to listen for changes and to update its properties */
export const authDataStore = (() => {
	const initialDataStoreState: AuthDataStore = {
		accessToken: null,
		refreshToken: null
	};

	const { subscribe, set, update } = writable(initialDataStoreState);

	return {
		subscribe,
		updateAuthDataStore: (newAuthDataStore: AuthDataStore) => set(newAuthDataStore),
		updateAccessToken: (newAccessToken: string | null) => {
			update((prevAuthDataStore) => {
				const updatedAuthDataStore = { ...prevAuthDataStore, accessToken: newAccessToken };
				return updatedAuthDataStore;
			});
		},
		updateRefreshToken: (newRefreshToken: string | null) => {
			update((prevAuthDataStore) => {
				const updatedAuthDataStore = { ...prevAuthDataStore, refreshToken: newRefreshToken };
				return updatedAuthDataStore;
			});
		}
	};
})();
