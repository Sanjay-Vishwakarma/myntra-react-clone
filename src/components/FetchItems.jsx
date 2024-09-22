import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../store/itemsSlice";
import { fetchStatusAction } from "../store/fetchStatusSlice";

const FetchItems = () => {

    const fetchStatus = useSelector((store) => store.fetchStatus); // fetchStatus : fetchStatusSlice.reducer,
    const dispatch = useDispatch();

    useEffect(() => {
        if (fetchStatus.fetchDone) return;

        const controller = new AbortController();
        const signal = controller.signal;

        dispatch(fetchStatusAction.markFetchingStarted);
        fetch('http://localhost:1414/items', { signal })
            .then((res) => res.json())
            .then(({ items }) => {
                dispatch(fetchStatusAction.markFetchDone);
                dispatch(fetchStatusAction.markFetchingFinished);
                dispatch(itemActions.addInitialItems(items));
            })
            .catch((error) => {
                if (error.name === "AbortError") {
                    console.log("Fetch aborted");
                } else {
                    console.error("Fetch error:", error);
                }
            });

        return () => {
            controller.abort();  // Abort the fetch request when the component unmounts
        };
    }, [fetchStatus]);

    return (<>
    </>);
}

export default FetchItems;
