import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	searchValue: '',
	value: [
		{
			id: 'beff0d03-209c-47a4-b2c6-d6b10bc69aae',
			name: 'GHS R+RL Nickel Rockers',
			description:
				"GHS Nickel Rockers are special. Since 1964, Nickel Rockers™ have provided discriminating guitarists with the PURE NICKEL sound of original rock n' roll and the warm tones of blues and jazz. The unique GHS rollerwinding process slightly flattens the strings for a smooth, comfortable feel with a 'touch' of extra tension.",
			image: 'GHS_R+RL_Nickel_Rockers.jpg',
			type: 'Electric',
			price: 10.99,
			date: new Date('June 30, 2021'),
		},
		{
			id: '2cc14971-d42a-440e-b056-0239878d9d06',
			name: "D'Addario NYXL1046",
			description:
				"D'Addario NYXL1046 Nickel Wound Electric Guitar Strings are roundwound with nickelplated steel for distinctive bright tone and excellent intonation. NYXL strings are precision wound with NY Steel, a newly developed, high carbon steel alloy for strings with greater strength and elasticity. This allows for a more consistent and tighter string-to-string sound. NYXL strings provide a more dynamic and expressive sound with enhanced clarity and harmonic response. NYXL1046 is a set of 6 strings, plain steel .010, .013, nickel wound .017, .026, .036, .046.",
			image: 'Daddario_NYXL1046_1.jpg',
			type: 'Electric',
			price: 12.99,
			date: new Date('September 11, 2021'),
		},
		{
			id: '874ea296-3b6a-47e6-ac66-4b4395b552a8',
			name: 'Ernie Ball 2721 Regular Slinky Cobalt',
			description:
				'Ernie Ball Regular Slinky Cobalt strings are made with the finest and freshest raw materials, precision drawn, micro polished and hand inspected to ensure consistency, optimum performance, and long life. Cobalt strings are known for their increased magnetic properties, which results in a longer sustain and a more pronounced low end. Cobalt strings are also known for their increased resistance to corrosion, which results in a longer life. Cobalt strings are ideal for players who use a lot of distortion or play in extreme environments. Cobalt strings are also ideal for players who prefer a more pronounced low end. Ernie Ball Regular Slinky Cobalt strings are available in gauges .010, .013, .017, .026, .036, .046.',
			image: 'Ernie_Ball_2721_Regular_Slinky_Cobalt.png',
			type: 'Electric',
			price: 12.99,
			date: new Date('December 9, 2021'),
		},
		{
			id: 'd0f5b0e1-5c5f-4b0f-8f9f-5f9f2f2f2f2f',
			name: 'Dunlop DEN1046 Nickel Plated Steel',
			description:
				'Dunlop Nickel Plated Steel strings are made from nickel-plated steel wire wrapped around tin-plated hex-shaped steel core wire. The result is a bright, crisp tone with excellent intonation. Dunlop Nickel Plated Steel strings are available in gauges .010, .013, .017, .026, .036, .046.',
			image: 'Dunlop_DEN1046_Nickel_Plated_Steel.jpg',
			type: 'Electric',
			price: 9.99,
			date: new Date('April 11, 2021'),
		},
		{
			id: '907c6f0d-94c5-418d-b819-ebd3b3ae788a',
			name: "D'Addario NB1253 Nickel Bronze",
			description:
				"D'Addario NB1253 Nickel Bronze Acoustic Guitar Strings are roundwound with nickelplated steel for distinctive bright tone and excellent intonation. NB1253 is a set of 6 strings, plain steel .012, .016, nickel wound .024, .032, .042, .053.",
			image: "D'Addario_NB1253_Nickel_Bronze.jpg",
			type: 'Acoustic',
			price: 12.99,
			date: new Date('July 20, 2021'),
		},
	],
};

export const stringsSlice = createSlice({
	name: 'strings',
	initialState,
	reducers: {
		sortAtoZ: (state) => {
			state.value.sort((a, b) => a.name.localeCompare(b.name));
		},
		sortZtoA: (state) => {
			state.value.sort((a, b) => b.name.localeCompare(a.name));
		},
		sortPriceLowToHigh: (state) => {
			state.value.sort((a, b) => a.price - b.price);
		},
		sortPriceHighToLow: (state) => {
			state.value.sort((a, b) => b.price - a.price);
		},
		sortByDate: (state) => {
			state.value.sort((a, b) => b.date - a.date);
		},
		changeSearchValue: (state, action) => {
			state.searchValue = action.payload;
		},
		filterAcoustic: (state, action) => {
			state.value = initialState.value;
			if (action.payload === false) {
				state.value = initialState.value;
				return;
			} else {
				state.value = state.value.filter((strings) => strings.type === 'Acoustic');
			}
		},
	},
});

export const regexSearch = (state, regex) => {
	return state.stringsList.value.filter((strings) => {
		return strings.name.toLowerCase().match(regex.toLowerCase());
	});
};

export const {
	sortAtoZ,
	sortZtoA,
	sortPriceLowToHigh,
	sortPriceHighToLow,
	changeSearchValue,
	filterAcoustic,
	sortByDate,
} = stringsSlice.actions;

export default stringsSlice.reducer;
