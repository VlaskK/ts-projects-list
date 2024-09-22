import RepoList from "../repo-list/RepoList";
import RepoSearch from "../repo-search/RepoSearch";
import {useState} from "react";
import {Repository} from "../../types";
import RepoSorter from "../repo-sorter/RepoSorter.tsx";
import Loader from "../loader/Loader.tsx";
import "./MainLayout.css";

const MainLayout = () => {
    const [repos, setRepos] = useState<Repository[]>([]);
    const [loading, setLoading] = useState(true);

    return (
        <div className="wrapper">
            <h1>Typescript проекты</h1>
            <RepoSearch setRepos={setRepos} setLoading={setLoading}/>
            {loading
                ? <Loader/>
                : <div>
                    <RepoSorter repos={repos} setSortedRepos={setRepos}/>
                    <RepoList repos={repos}/>
                </div>
            }
        </div>
    );
};

export default MainLayout;
