import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Dishes } from "../redux/dishes";
import { Promotions } from "../redux/prommotions";
import { Comments } from "../redux/comments";
import { Leaders } from "../redux/leaders";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createForms } from 'react-redux-form';
import {InitialFeedback} from "./forms";


export const ConfigureStore = () => {
    const store = createStore(combineReducers({
        dishes: Dishes, 
        leaders: Leaders,
        comments: Comments,
        promotions: Promotions,
        ...createForms({feedback: InitialFeedback}) 
    }),
    applyMiddleware(thunk, logger)
    );

    return store;
}