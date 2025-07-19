'use client';
import styled from 'styled-components';

const Section = styled.section`
  background: #f0f0f0;
  width: 100%;
  height: 50vh;
  min-width: 400px;
  `;

  export default function Footer() {
    return (
        <Section>
            <h2>Footer</h2>
            {/* Add your footer content here */}
            <p>© 2025 Fliring Scene. All rights reserved.</p>
            <p>Follow us on social media!</p>
        </Section>
    )
  }
