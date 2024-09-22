import React from 'react';
import {Repository} from "../../types";
import "./RepoSorter.css";


interface RepoSorterProps {
    repos: Repository[];
    setSortedRepos: React.Dispatch<React.SetStateAction<Repository[]>>;
}

const RepoSorter: React.FC<RepoSorterProps> = ({ repos, setSortedRepos }) => {
    const sortByStarsAscending = () => {
        const sorted = [...repos].sort((a, b) => a.stargazers_count - b.stargazers_count);
        setSortedRepos(sorted);
    };

    const sortByStarsDescending = () => {
        const sorted = [...repos].sort((a, b) => b.stargazers_count - a.stargazers_count);
        setSortedRepos(sorted);
    };

    const resetSorting = () => {
        setSortedRepos(repos);
    };

    return (
        <div className="repo-sorter">
            <button className="sort-button" onClick={sortByStarsAscending}>Сортировать по звездам (возрастание)</button>
            <button className="sort-button" onClick={sortByStarsDescending}>Сортировать по звездам (убывание)</button>
            <button className="sort-button reset-button" onClick={resetSorting}>Отменить сортировку</button>
        </div>
    );
};

export default RepoSorter;