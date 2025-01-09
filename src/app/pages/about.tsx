// pages/about/index.js
export async function getStaticProps() {
  return {
    props: {
      title: 'About Page',
    },
  };
}

export default function About({ title }) {
  return <h1>sdfsdfsdf{title}</h1>;
}