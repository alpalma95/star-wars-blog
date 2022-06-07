const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			test: {
				title: "test1"
			}
		},
		actions: {
			// Use getActions to call a function within a fuction
			
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			}
		}
	};
};

export default getState;
