import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaGithub, FaLink } from 'react-icons/fa';
import styles from '../style/Github.module.css'; // Import the CSS module

const Github = () => {
    const [githubData, setGithubData] = useState(null);
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchGithubData = async () => {
            try {
                // Replace 'your-username' with your GitHub username
                const userResponse = await axios.get('https://api.github.com/users/Chinmaya0011');
                setGithubData(userResponse.data);

                // Fetch repositories
                const reposResponse = await axios.get(userResponse.data.repos_url);
                setRepos(reposResponse.data);
            } catch (error) {
                console.error('Error fetching GitHub data:', error);
            }
        };

        fetchGithubData();
    }, []);

    if (!githubData) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.githubComponent}>
            <h2 className={styles.header}>
                <FaGithub /> {githubData.name}
            </h2>
            <p className={styles.bio}>{githubData.bio}</p>
            <h3 className={styles.repoHeader}>Repositories:</h3>
            <ul className={styles.repoList}>
                {repos.map(repo => (
                    <li key={repo.id} className={styles.repoItem}>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className={styles.repoLink}>
                            <FaLink /> {repo.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Github;
