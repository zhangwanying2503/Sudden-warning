import Axios from "axios";

export default {
    namespace: 'Overall_situationAR',
    state: {
        RealTimeData: [],
        getChartData:[],
        // getChart1Res:[]
    },
    effects: {
        *changeName(_, { put,call }) {
            let res=yield call(Axios.get,'http://169.254.213.146:7001/getRealTimeData')
            let chartRes=yield call(Axios.get,'http://169.254.213.146:7001/getChartData')
            // let chart1Res=yield call(Axios.get,'http://169.254.213.146:7001/getCharts1')
            res=res.data.data.body.RealTimeData
            chartRes=chartRes.data.data.body.getChartData
            // chart1Res=chartRes.data.data.body
            yield put({
                type: 'changeStateName',
                res,
                chartRes
            })
        }
    },
    reducers: {
        changeStateName(state, {res,chartRes}) {
            return {
                ...state,
                RealTimeData:res,
                getChartData:chartRes
            }

        }
    }
}