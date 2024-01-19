import { useReducer, createContext } from "react";
import { new_detail, reset_detail } from "../constants/actionTypes";
import { format } from "date-fns";

const INITIAL_STATE = {
    date:format(new Date(), 'yyyy-MM-dd'),
    time:'',
    service:'',
    price:''
}

export const DetailContext = createContext(INITIAL_STATE);

const DetailReducer = (state, action) => {
    switch (action.type) {
        case new_detail:return action.payload;
        case reset_detail: return INITIAL_STATE;
        default: return state;
    }
}

export const DetailContextProvider = ({children}) => {
    const [detail, dispatch] = useReducer(DetailReducer, INITIAL_STATE)

    return (
        <DetailContext.Provider value={[{
            date:detail.date,
            time:detail.time,
            service:detail.service,
            price:detail.price,
            dispatch
        }]}>
            {children}
        </DetailContext.Provider>
    )
}