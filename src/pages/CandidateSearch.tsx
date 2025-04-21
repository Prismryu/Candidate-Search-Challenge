import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [usernames, setUsernames] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCandidate, setCurrentCandidate] = useState<Candidate | null>(null);
  const [loading, setLoading] = useState(true);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const fetchCandidates = async () => {
      const users = await searchGithub();
      const logins = users.map((user: any) => user.login);
      setUsernames(logins);
    };
    fetchCandidates();
  }, []);

  useEffect(() => {
    const loadCandidate = async () => {
      setLoading(true);
      if (currentIndex >= usernames.length) {
        setDone(true);
        setCurrentCandidate(null);
        return;
      }

      const fullData = await searchGithubUser(usernames[currentIndex]);
      setCurrentCandidate(fullData);
      setLoading(false);
    };

    if (usernames.length > 0) {
      loadCandidate();
    }
  }, [usernames, currentIndex]);

  const handleAccept = () => {
    if (currentCandidate) {
      const saved = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
      localStorage.setItem('savedCandidates', JSON.stringify([...saved, currentCandidate]));
    }
    setCurrentIndex((prev) => prev + 1);
  };

  const handleReject = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <div style={{ padding: '1rem', background: '#f0f0f0', borderRadius: '8px' }}>
      <h1>CandidateSearch</h1>

      {loading && <p>Loading candidate...</p>}
      {done && <p>No more candidates available</p>}

      {!loading && currentCandidate && (
        <div>
          <img
            src={currentCandidate.avatar_url}
            alt={currentCandidate.login}
            width={150}
            style={{ borderRadius: '8px' }}
          />
          <h2>{currentCandidate.name || 'No name listed'}</h2>
          <p><strong>Username:</strong> {currentCandidate.login}</p>
          <p><strong>Location:</strong> {currentCandidate.location || 'N/A'}</p>
          <p><strong>Email:</strong> {currentCandidate.email || 'N/A'}</p>
          <p><strong>Company:</strong> {currentCandidate.company || 'N/A'}</p>
          <p>
            <strong>Profile:</strong>{' '}
            <a href={currentCandidate.html_url} target="_blank" rel="noreferrer">
              {currentCandidate.html_url}
            </a>
          </p>

          <div style={{ marginTop: '1rem' }}>
            <button onClick={handleAccept} style={{ marginRight: '1rem' }}>
              ➕ Accept
            </button>
            <button onClick={handleReject}>➖ Reject</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CandidateSearch;