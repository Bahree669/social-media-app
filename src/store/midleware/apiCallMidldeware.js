import * as actions from "../apiActions";
import axios from "axios";

const apiCallMiddleware =
    ({ dispatch }) =>
    (next) =>
    async (action) => {
        if (action.type !== actions.apiCallBegan.type) return next(action);

        const { url, method, data, onStart, onSuccess, onError } = action.payload;

        if (onStart) dispatch({ type: onStart });

        next(action);

        let response;
        try {
            response = await axios.request({
                baseURL: "http://localhost:5000",
                url,
                method,
                data,
            });

            // General success dispatch
            dispatch(actions.apiCallSuccess(response.data));
            // Specific success dispatch
            if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
        } catch (error) {
            // General error dispatch
            dispatch(actions.apiCallFailed(error.message));
            // Specific error dispatch
            if (onError) dispatch({ type: onError, payload: error.message });
        }
    };

export default apiCallMiddleware;
