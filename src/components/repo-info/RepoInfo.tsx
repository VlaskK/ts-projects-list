import React from 'react';
import "./RepoInfo.css";

interface RepoInfoProps {
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
}

const RepoInfo: React.FC<RepoInfoProps> = ({ name, description, html_url, stargazers_count }) => {
    return (
        <div className="repo-info">
            <h3 className="repo-name">{name}</h3>
            <p className="repo-description">{description}</p>
            <p className="repo-stars">Stars: {stargazers_count}</p>
            <a className="repo-link" href={html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
    );
};

export default RepoInfo;