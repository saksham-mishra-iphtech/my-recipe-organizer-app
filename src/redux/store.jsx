import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import { combineReducers } from 'redux';
import favouriteReducer from './favouriteSlice';
import recipeReducer from './recipeSlice';
import popularReducer from './popularSlice'
import myOwnFavoritesReducer from './myOwnRecipeFavouriteSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  favorites: favouriteReducer,
  recipes: recipeReducer, 
  popular: popularReducer,
  myOwnFavorites: myOwnFavoritesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;
