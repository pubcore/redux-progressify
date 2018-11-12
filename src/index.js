import {createReducer} from 'redux-create-reducer'

export default (dispatch, promise) => {
	dispatch({type:'PROGRESS_START'})
	return promise.then(
		res => {
			dispatch({type:'PROGRESS_STOP'})
			return res
		},
		rej => {
			dispatch({type:'PROGRESS_STOP'})
			return Promise.reject(rej)
		}
	)
}

export const progress = createReducer(
	0,
	{
		PROGRESS_START:slice => slice + 1,
		PROGRESS_STOP:slice => (slice > 0 ? slice - 1 : 0)
	}
)
