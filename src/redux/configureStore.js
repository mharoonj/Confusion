import {createStore, combineReducers} from 'redux';
import { Dishes } from "../redux/dishes";
import { Prommotions } from "../redux/prommotions";
import { Comments } from "../redux/comments";
import { Leaders } from "../redux/leaders";

export const ConfigureStore = () => {
    const store = createStore(combineReducers({
        dishes: Dishes, 
        leaders: Leaders,
        comments: Comments,
        promotions: Prommotions,
    })
    );

    return store;
}