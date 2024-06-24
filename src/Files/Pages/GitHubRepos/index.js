import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';

const Loader = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-weight: bold;
`;

const GitHubRepos = () => {
  const [repos, setRepos] = useState([]);
  const [commits, setCommits] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const username = 't8ninho';

  useEffect(() => {
    // Buscando os repositórios
    axios.get(`https://api.github.com/users/${username}/repos`)
      .then(response => {
        setRepos(response.data);
        response.data.forEach(repo => {
          // Buscando os commits de cada repositório
          axios.get(`https://api.github.com/repos/${username}/${repo.name}/commits`)
            .then(commitResponse => {
              setCommits(prevCommits => ({
                ...prevCommits,
                [repo.name]: commitResponse.data
              }));
            })
            .catch(err => {
              console.error(`Erro ao buscar commits do repositório ${repo.name}:`, err);
              setError('Erro ao buscar commits. Tente novamente mais tarde.');
            });
        });
        setLoading(false);
      })
      .catch(err => {
        console.error('Erro ao buscar repositórios:', err);
        setError('Erro ao buscar repositórios. Tente novamente mais tarde.');
        setLoading(false);
      });
  }, [username]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  return (
    <div>
      <h1>Meus Repositórios do GitHub</h1>
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>
            <h2>{repo.name}</h2>
            <p>{repo.description}</p>
            <h3>Últimos Commits:</h3>
            <ul>
              {commits[repo.name] && commits[repo.name].slice(0, 5).map(commit => (
                <li key={commit.sha}>
                  <p>{commit.commit.message}</p>
                  <p><strong>Autor:</strong> {commit.commit.author.name}</p>
                  <p><strong>Data:</strong> {new Date(commit.commit.author.date).toLocaleString()}</p>
                </li>
              ))}
            </ul><br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GitHubRepos;
