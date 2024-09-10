import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type SettingsOpen = boolean

interface HomeState {
	settings_open: SettingsOpen
}

const initialState: HomeState = {
	settings_open: false
}

export const HomeSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setSettingsOpen: (state, action:PayloadAction<{data: boolean}>) => {
			state.settings_open = action.payload.data
		},
	}
})

export default HomeSlice.reducer
export const {setSettingsOpen} = HomeSlice.actions