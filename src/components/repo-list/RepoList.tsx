import React, {useState} from 'react';
import RepoInfo from "../repo-info/RepoInfo.tsx";
import {Repository} from "../../types";
import "./RepoList.css";

interface RepoListProps {
    repos: Repository[];
}

const RepoList: React.FC<RepoListProps> = ({ repos }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    if (!repos.length) return <p>No repositories found.</p>;

    const indexOfLastRepo = currentPage * itemsPerPage;
    const indexOfFirstRepo = indexOfLastRepo - itemsPerPage;
    const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);
    const allPages = Math.ceil(repos.length / itemsPerPage);


    const nextPage = () => {
        if (currentPage < Math.ceil(repos.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
            {currentRepos.map(repo => (
                <RepoInfo
                    key={repo.id}
                    name={repo.name}
                    description={repo.description || ""}
                    html_url={repo.html_url}
                    stargazers_count={repo.stargazers_count}
                />
            ))}
            <div className="buttons">
                <button onClick={prevPage} disabled={currentPage === 1}>Предыдущая</button>
                <button onClick={nextPage} disabled={currentPage >= allPages}>Следующая</button>
            </div>
            <p>Страница {currentPage} из {allPages}</p>
        </div>
    );
};

export default RepoList;
