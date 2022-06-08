const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [
				{name: "test"},
				{name: "another test"}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				console.log('Im running');
				console.log('lol')
			},
			addFavorite: (obj) => {
				const store = getStore()			
				setStore({favorites: [...store.favorites, obj]}) 
			}
		}
	};
};

export default getState;
