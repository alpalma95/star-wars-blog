const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			characters: [],
			planets: [],
			charactersDetails: [],
			planetsDetails: [],
			btnStyle: {}
		},
		actions: {
			loadCharacters: () =>{
				const store = getStore();

				fetch(`https://www.swapi.tech/api/people/`)
				.then(response => response.json())
				.then(data => setStore({characters: data.results}))
				.then(()=> console.log(store))
				.catch(err => console.error(err.message))
				console.log(store)
			},
			loadPlanets: () => {
				const store = getStore();

				fetch(`https://www.swapi.tech/api/planets/`)
				.then(response => response.json())
				.then(data => setStore({planets: data.results}))
				.then(()=> console.log(store))
				.catch(err => console.error(err.message))

				console.log(store);

			},
			loadDetails: (url, type) => {
				const store = getStore();

				fetch(url)
				.then(response => response.json())
				.then(data => {
					if (type === "planet") {
						setStore({planetsDetails: [...store.planetsDetails, data.result]})
					} else if (type === "character") {
						setStore({charactersDetails: [...store.charactersDetails, data.result]})
					}
				})
				console.log(store)
			},
			addFavorite: (obj) => {
				const store = getStore()
				
			 	setStore({favorites: [...store.favorites, obj]})
			},
			removeFavorite: (e) => {
				const store = getStore();

				const newFavorites = store.favorites.filter((x)=>{
					return e.target.id !== x.id
				})

				setStore({favorites: newFavorites})
			},
			removeFavorite2: (str) => {
				const store = getStore();

				const newFavorites = store.favorites.filter((x)=>{
					return str != x.name
				})

				setStore({favorites: newFavorites})
			},
			addBtnStyle: (obj) => {
				const store = getStore();

				setStore({btnStyle: {...store.btnStyle, obj}})
			}
		}
	};
};

export default getState;
