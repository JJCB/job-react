import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { jobs } from 'View/Home/State/reducer';
import { advertisement } from 'View/Advertisement/State/reducer';
import { locations } from 'View/Home/Component/Search/State/reducer';

export default () => {
  const store = createStore(
    combineReducers({
      jobs,
      locations,
      advertisement
    }),
    
    applyMiddleware(
      thunk
    )
  );
  return store;
}
