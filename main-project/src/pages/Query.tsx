import { useSearchParams } from "react-router-dom";
import styles from "./Query.module.css";

function Query() {
        const [searchParams, SetURLSearchParams] = useSearchParams();
        const query = searchParams.get("search");
        
    return (
        <div className={styles.query}>
            <h1>Query {query}</h1>
            <p>Query</p>
        </div>
    );
}
export default Query;