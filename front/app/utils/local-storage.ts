export const getStoreLocal = (name: string) => {
	if (typeof localStorage !== 'undefined') { // typeof window !== undefined
		const ls = localStorage.getItem(name)

		return ls ? JSON.parse(ls) : null
	}
	return null
}