import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type SettingsOpen = boolean
type BoostOpen = boolean

interface HomeState {
	settings_open: SettingsOpen,
	boost_open: BoostOpen
}

const initialState: HomeState = {
	settings_open: false,
	boost_open: false
}

export const HomeSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setSettingsOpen: (state, action:PayloadAction<{data: boolean}>) => {
			state.settings_open = action.payload.data
		},
		setBoostOpen: (state, action:PayloadAction<{data: boolean}>) => {
			state.boost_open = action.payload.data
		}
	}
})

export default HomeSlice.reducer
export const {setSettingsOpen, setBoostOpen} = HomeSlice.actions