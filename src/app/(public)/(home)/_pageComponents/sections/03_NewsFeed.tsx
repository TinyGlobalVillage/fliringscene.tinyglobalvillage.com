'use client';
import styled from 'styled-components';

const Section = styled.section`
  background: #f0f0f0;
  height: 100vh;
  width: 75%;

  `;

  export default function NewsFeed() {
    return (
        <Section>
            <h2>News Feed</h2>
            {/* Add your news feed content here */}
            <p>Latest updates and news will be displayed here.</p>
        </Section>
    )
  }
