import Axios from "axios";

export default {
    namespace: 'Content_monitoringAR',
    state: {
        ShowList:[]
    },
    effects: {
        *getShowListData(_, { put,call }) {
            let res=yield call(Axios.get,'http://169.254.213.146:7001/getShowList')
            yield put({
                type: 'ShowlistData',
                res:res.data.data.body.ShowData
            })
        }
    },
    reducers: {
        ShowlistData(state, {res}) {
            return {
                ...state,
                ShowList:res
            }

        }
    }
}