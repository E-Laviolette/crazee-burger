import DisplayHome from "../display/DisplayHome";
import LoginPage from "../pages/login/LoginPage";

export default function ErrorPage() {
    // state


    // comportement
    const handleSubmit = (event) => {

    }


    // render
    return (
        <div>
            <DisplayHome />

            <Router>
                <Route path="/" exact component={DisplayHome} />
                <Route path="/LoginPage" component={LoginPage} />
            </Router>
        </div>

    )
}
