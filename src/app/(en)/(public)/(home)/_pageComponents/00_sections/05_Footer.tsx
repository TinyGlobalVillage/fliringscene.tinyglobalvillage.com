'use client';
import styled from 'styled-components';

const FooterSection = styled.section`
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

  export default function Footer() {
    return (
        <FooterSection>
            <h2>Footer</h2>
            {/* Add your footer content here */}
            <p>© 2025 Fliring Scene. All rights reserved.</p>
            <p>Follow us on social media!</p>
        </FooterSection>
    )
  }
