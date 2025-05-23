export async function fetchRecipes(filter) {
    const { query, limit } = filter;

    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_APP_KEY}&from=0&to=${limit}`;

    const response = await fetch(url, {
        headers: {
            'Edamam-Account-User': process.env.REACT_APP_EDAMAM_USER_ID
        }
    });

    const data = await response.json();
    return data?.hits;
}

export async function fetchRecipe(id) {
    const url = `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_APP_KEY}`;

    const response = await fetch(url, {
        headers: {
            'Edamam-Account-User': process.env.REACT_APP_EDAMAM_USER_ID
        }
    });

    const data = await response.json();
    return data;
}