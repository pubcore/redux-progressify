
Simple, redux based way to maintain progress of asynchronous functions (promises).
Used in context of user-interfaces, this state can be used to show some "wait spinner".  

If there are further, nested progressified promisses, progress is increase by one
for each pending promise, and decrease by one for each resolved or rejected.

## Prerequisite
Knowledge of redux-actions and -reducers, usage of middleware for promises

## Example
#### progressify an asynchronous action

	import progressify from '@pubcore/redux-progressify'

	//assume we have a promise "loadSomeData"

	//We may implement an action the loadSomeData-promise is used in.
	//To get info about its progress within state, we just cover the
	//call with "progressify":
	export default dispatch => progressify(dispatch,
		loadSomeData.then(mapResult, mapError)
	)

#### reducer

	import {combineReducers} from 'redux'
	import {progress} from '@pubcore/redux-progressify'

	export default combineReducers({
		progress
	})

	//this will lead to this initial state:
	{
		progress: 0
	}
