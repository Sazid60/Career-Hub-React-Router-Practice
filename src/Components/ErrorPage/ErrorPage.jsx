import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>Error Page</h1>
            <Link to ="/">Go Back </Link>
        </div>
    );
};

export default ErrorPage;