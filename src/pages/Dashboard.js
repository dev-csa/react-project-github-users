import React from 'react';
import { Info, Repos, User, Search, Navbar, NoUser } from '../components';
import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context';
const Dashboard = () => {
  const {isLoading, error} = React.useContext(GithubContext)
  if(isLoading){
    return <main>
      <Navbar />
      <Search />
      <img src={loadingImage} className='loading-img' alt='loading' />
    </main>
  }
  if(!error.show){
    return (
      <main>
        <Navbar />
        <Search />
        <Info />
        <User />
        <Repos />
      </main>
    );
  }
  else{
    return (
      <main>
      <Navbar />
      <Search />
      <NoUser />
      <Info />
      <User />
      <Repos />
    </main>
  );
}
};

export default Dashboard;
