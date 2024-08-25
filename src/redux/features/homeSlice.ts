import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type SelectBlock = number

interface HomeState {
	select_block: SelectBlock
}

const initialState: HomeState = {
	select_block: 1
}

export const HomeSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setSelectBlock: (state, action:PayloadAction<{data: number}>) => {
			state.select_block = action.payload.data
		},
	}
})

export default HomeSlice.reducer
export const {setSelectBlock} = HomeSlice.actions