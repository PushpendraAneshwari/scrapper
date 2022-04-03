// import React from 'react';
import React, { useEffect, useState } from 'react';
const leeturl = `https://leetcode-stats-api.herokuapp.com/Roonal274?format=json`;
// const gitHubUrl = `https://api.github.com/search/commits?q=author:joash4000&sort=author-date&order=desc&page=1%27`;
const gitHubUrl = `https://api.github.com/users/joash4000`;
const codefUrl = `https://codeforces.com/api/user.info?handles=Tyyyyyy`;
//<---Leetcode User Data---->
const Leet = () => {
  const [userData, setUserData] = useState({});


  const leetUserWithFetch = async () => {
    const response = await fetch(leeturl);
    const jsonData = await response.json();
    console.log(jsonData);
    setUserData(jsonData);
  };
  useEffect(() => {
    leetUserWithFetch();
  }, []);
  console.log(userData);
  //<----leetCode---->//

  //   //<---Github User Data---->
  // const Gith = () => {
  //   const [userData2, setUserData2] = useState({});


  //   const getGitHubUserWithFetch = async () => {
  //     const response = await fetch(gitHubUrl);
  //     const jsonData = await response.json();
  //     console.log(jsonData);
  //     setUserData2(jsonData);
  //   };
  //   useEffect(() => {
  //     getGitHubUserWithFetch();
  //   }, []);
  //    console.log(userData);
  // }
  //   //<----leetCode---->//


  return (
    <>
      <div className="App">
        <header className="App-header">
          <h2>Leetcode User Data</h2>
        </header>
        <div className="user-container">
          <h5 className="info-item">Ranking : {userData.ranking}</h5>
          <h5 className="info-item">Acceptance-Rate : {userData.acceptanceRate}</h5>
          <h5 className="info-item">Easy Solved : {userData.easySolved}</h5>
          <h5 className="info-item">Medium Solved : {userData.mediumSolved}</h5>
          <h5 className="info-item">Hard Solved : {userData.hardSolved}</h5>
          <h5 className="info-item">Contribution Points : {userData.contributionPoints}</h5>
        </div>
      </div>

    </>


  );
}

//<---Github User Data---->
const Gith = () => {
  const [userData2, setUserData2] = useState({});


  const getGitHubUserWithFetch = async () => {
    const response = await fetch(gitHubUrl);
    const jsonData = await response.json();
    console.log(jsonData);
    setUserData2(jsonData);
  };
  useEffect(() => {
    getGitHubUserWithFetch();
  }, []);
  // console.log(userData2);
  // let namedata=(datas)=>{
  //   for(var i in datas){
  //   console.log(datas[i].repository.name);
  // }


  //   //<----Github User Data--->//
  return (
    <div className="App">
      <header className="App-header">
        <h2>GitHub User Data</h2>
      </header>
      <div className="user-container">

    {/* <h4>
    {userData2.map(())}
    </h4>

     {/* {(() =>{

      for(let i in userData2){
        <h4>{userData2[i].name}</h4>
        {console.log(userData2[i].name)}
      }
     }
     )}  */} 
     
        <h5 className="info-item">Name : {userData2.name}</h5> 
        <h5 className="info-item">Blog : {userData2.blog}</h5>
        <h5 className="info-item">company : {userData2.company}</h5>
        <h5 className="info-item">Public-Repos : {userData2.public_repos}</h5>
        <h5 className="info-item">Followers : {userData2.followers}</h5>
        <h5 className="info-item">Following : {userData2.following}</h5>
      </div>
    </div>


  );
      }

      
//<---Github User Data---->
const Codef = () => {
  const [userData3, setUserData3] = useState({});


  const codefUserWithFetch = async () => {
    const response = await fetch(codefUrl);
    const jsonData = await response.json();
    console.log(jsonData);
    setUserData3(jsonData);
  };
  useEffect(() => {
    codefUserWithFetch();
  }, []);
  console.log(userData3);

  //   //<----Github User Data--->//
  return (
    <div className="App">
      <header className="App-header">
        <h2>Codeforces User Data</h2>
      </header>
      <div className="user-container">
        {/* <h5 className="info-item">Ranking : {userData3.result[0].rank}</h5>
        <h5 className="info-item">Contribution : {userData3.result[0].contribution}</h5>
        <h5 className="info-item">Rating : {userData3.result[0].rating}</h5>
        <h5 className="info-item">Organization : {userData3.result[0].organization}</h5>
        <h5 className="info-item">MaxRank : {userData3.result[0].maxRank}</h5> */}

      </div>
    </div>




  );
}

export { Leet, Gith, Codef };