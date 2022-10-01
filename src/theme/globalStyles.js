import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/* RESET */
/* Box sizing rules */

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: inherit;
}
html {
  font-size: 16px;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  position: relative;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Custom scrollbar */
/* width */
::-webkit-scrollbar {
  width: 15px;
}

/* Track */
::-webkit-scrollbar-track {
    background:${({ theme }) => theme.colors.cardButtonBgColor};
  border-radius: 8px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.colors.backgroundColor};
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.cardButtonBgColor};
  width: 10px;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
    body {
        background: ${({ theme }) => theme.colors.backgroundColor};
        color: ${({ theme }) => theme.colors.bodyTextColor};
        font-family: ${({ theme }) => theme.typography.mainFont};
    }

    h1 {
        font-size: ${({ theme }) => theme.typography.heroHeading};
    }
    button {
      cursor: pointer;
    }
`;
