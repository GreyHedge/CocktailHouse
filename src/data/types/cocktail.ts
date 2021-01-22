export interface ICocktailDetail extends ICocktail {
  category: string;
  iba: string;
  glass: string;
  instructions: string;
  isAlcohol: boolean;
  ingredients: IIngredient[];
}

export interface ICocktail {
  id: string;
  name: string;
  img: string;
}

export interface IIngredient {
  name: string;
  value: string | null;
  img: string;
}

export interface ICocktailDetailResponse extends ICocktailResponse{
  strCategory: string;
  strIBA: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strIngredient1: string | null;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
  strMeasure1: string | null;
  strMeasure2: string | null;
  strMeasure3: string | null;
  strMeasure4: string | null;
  strMeasure5: string | null;
  strMeasure6: string | null;
  strMeasure7: string | null;
  strMeasure8: string | null;
  strMeasure9: string | null;
  strMeasure10: string | null;
  strMeasure11: string | null;
  strMeasure12: string | null;
  strMeasure13: string | null;
  strMeasure14: string | null;
  strMeasure15: string | null;
}

export interface ICocktailResponse {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}
