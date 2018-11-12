import {expect} from 'chai'
import progressify, {progress} from '../src/index'
var slice = 0

var aPromise = new Promise(res => res(1))
var dispatch = a => (slice = progress(slice, a))
var chained = progressify(dispatch, aPromise)

describe('progressify', () => {
	it('changes progress state', () =>
		progressify(dispatch, aPromise).then(
			() => expect(slice).to.equal(0)
		)
	)
	it('supports several promisses, chained or in parallel', () =>
		progressify(dispatch, chained).then(
			() => expect(slice).to.equal(0)
		)
	)
	it('rejects error, if given promise rejects', () => {
		progressify(dispatch, Promise.reject('test')).then(
			()=>{throw 'unexpected resolve'},
			err => expect(err).to.equal('test')
		)
	})
	it('keep process equal or greater than 0', () => {
		dispatch({type:'PROGRESS_STOP'})
		dispatch({type:'PROGRESS_STOP'})
		expect(slice).to.equal(0)
	})
})
