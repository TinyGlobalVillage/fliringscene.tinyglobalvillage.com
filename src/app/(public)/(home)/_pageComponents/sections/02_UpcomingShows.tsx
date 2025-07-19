'use client';
import styled from 'styled-components';

const Section = styled.section`
  background: #f0f0f0;
  height: 100vh;
  width: 75%;
  min-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

export default function UpcomingShows () {
  return (
    <Section>
      <Title>Upcoming Events</Title>
      {/* Add your upcoming events content here */}
      <p>Stay tuned for our next events!</p>
    </Section>
  );
}
