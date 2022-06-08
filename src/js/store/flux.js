const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			addFavorite: (obj) => {
				const store = getStore()			
				setStore({favorites: [...store.favorites, obj]}) 
			}
		}
	};
};

export default getState;
