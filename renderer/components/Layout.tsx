import Header from './Header';
import ResponsiveDrawer from './ResponsiveDrawer';
import Head from 'next/head';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

//<Header />

const Layout = (props: { children: any }) => (
  <div style={layoutStyle}>
    <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <title>devonfw dashboard</title>
    </Head>
    
    <ResponsiveDrawer>{props.children}</ResponsiveDrawer>
  </div>
);

export default Layout