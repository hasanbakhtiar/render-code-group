import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="px-4 py-5 my-5 text-center">
            <h1 className="display-5 fw-bold text-body-emphasis">Organize your day</h1>
            <div className="col-lg-6 mx-auto">

                <p className="lead mb-4">
                    A simple and fast todo app to help you plan your tasks, track progress,
                    and stay focused. Add tasks in seconds, mark them done, and keep your
                    day organized without the clutter.
                </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">

                    <Link to={'/todoapp'} type="button" className="btn btn-warning btn-lg px-4 gap-3">
                        Get started
                    </Link>

                </div>
            </div>
        </div>

    )
}

export default Home