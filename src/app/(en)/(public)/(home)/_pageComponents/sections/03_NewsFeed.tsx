'use client';
import styled from 'styled-components';

const NewsFeedSection = styled.section`
  background-color: rgba(170, 167, 167, 0.5); // semi-transparent black
  height: 100vh;
  width: 75%;
  min-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

  export default function NewsFeed() {
    return (
        <NewsFeedSection>
            <h2>News Feed</h2>
            {/* Add your news feed content here */}
            <p>Latest updates and news will be displayed here.</p>
        </NewsFeedSection>
    )
  }
