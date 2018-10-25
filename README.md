## Prerequiste
Knowledge of redux-actions and -reducers, usage of middleware for promises

## Example
#### progressify an asynchronous action

		import progressify from '@pubcore/redux-progressify'

		//assume we have a promise "loadSomeData"

		//we may implement an action loadSomeData promise is used.
		//just cover the call with "promisify":
		export default dispatch => promisify(dispatch,
			loadSomeData.then(
				res => {
					//[...] dispatch result
				},
				err => {
					//[...] dispatch error
				}
			)
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
