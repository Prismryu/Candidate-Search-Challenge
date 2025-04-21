import { useEffect, useState } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const candidatesFromStorage = localStorage.getItem('savedCandidates');
    if (candidatesFromStorage) {
      setSavedCandidates(JSON.parse(candidatesFromStorage));
    }
  }, []);

  return (
    <div className="saved-candidates-container">
      <h1 className="page-title">Potential Candidates</h1>
      {savedCandidates.length === 0 ? (
        <p className="empty-message">No candidates have been accepted yet.</p>
      ) : (
        savedCandidates.map((candidate, index) => (
          <div className="candidate-card" key={index}>
            <img
              className="candidate-avatar"
              src={candidate.avatar_url}
              alt={candidate.login}
            />
            <div className="candidate-details">
              <h2>{candidate.name || 'No name provided'}</h2>
              <p><strong>Username:</strong> {candidate.login}</p>
              <p><strong>Location:</strong> {candidate.location || 'N/A'}</p>
              <p><strong>Email:</strong> {candidate.email || 'N/A'}</p>
              <p><strong>Company:</strong> {candidate.company || 'N/A'}</p>
              <p>
                <strong>GitHub:</strong>{' '}
                <a
                  href={candidate.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {candidate.html_url}
                </a>
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default SavedCandidates;