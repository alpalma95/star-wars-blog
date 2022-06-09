const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [
				{name: "test"},
				{name: "another test"}
			],
			characters: [],
			planets: [],
			charactersDetails: [],
			planetsDetails: []
		},
		actions: {
			loadCharacters: () =>{
				const store = getStore();

				fetch(`https://www.swapi.tech/api/people/`)
				.then(response => response.json())
				.then(data => setStore({characters: data.results}))
				.catch(err => console.error(err.message))
				console.log(store)
			},
			loadPlanets: () => {
				const store = getStore();

				fetch(`https://www.swapi.tech/api/planets/`)
				.then(response => response.json())
				.then(data => setStore({planets: data.results}))
				.catch(err => console.error(err.message))

				console.log(store);

			},
			loadCharactersDetails: (url) => {
				const store = getStore();

				fetch(url)
				.then(response => response.json())
				.then(data => {
					setStore({charactersDetails: [...store.charactersDetails, data.result]})
				})
				console.log(store)


			},
			loadPlanetsDetails: (url) => {
				const store = getStore();

				fetch(url)
				.then(response => response.json())
				.then(data => {
					setStore({planetsDetails: [...store.planetsDetails, data.result]})
				})

				console.log(store)
			},
			addFavorite: (obj) => {
				// const store = getStore()			
				// setStore({favorites: [...store.favorites, obj]}) 
			}
		}
	};
};

export default getState;
