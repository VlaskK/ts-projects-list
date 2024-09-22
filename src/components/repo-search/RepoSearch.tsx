import React, {useEffect, useState} from "react";
import {useDebounce} from "../../utils";
import { getRepos } from "../../services/github-project.service";
import { Repository } from "../../types";
import "./RepoSearch.css";

interface RepoSearchProps {
    setRepos: React.Dispatch<React.SetStateAction<Repository[]>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const RepoSearch: React.FC<RepoSearchProps> = ({ setRepos, setLoading }) => {
    const [inputValue, setInputValue] = useState('');
    const debouncedInputValue = useDebounce(inputValue, 500);

    function handleChange(event: React.FormEvent<HTMLInputElement>) {
        setInputValue(event.currentTarget.value);
    }

    useEffect(() => {
        setLoading(true);
        const fetchRepos = async () => {
            try {
                const fetchedRepos = await getRepos(debouncedInputValue);
                setRepos(fetchedRepos);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.error("Error fetching repositories:", error);
            }
        };

        fetchRepos();
    }, [debouncedInputValue, setRepos]);

    return (
        <input
            className="input"
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Искать"
        />
    );
};

export default RepoSearch;