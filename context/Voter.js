import React,{useState,useEffect} from 'react';
import Web3Modal from 'web3modal';
import {ethers} from "ethers";
import {create as ipfsHttpClient} from "ipfs-http-client";
import { useRouter } from 'next/router';

import {Voting} from 'Voting/contarcst'
const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0');
const fetchContract =(signerOrProvide)=>
new ethers.Contract(VotingAddress, VotingAddressABI, signerOrProvide);
export const VotingContext=React.createContext();
export const VotingProvider=({children})=>{
  const votingTitle='smart contract app'
  return (<VotingContext.Provider value={{}}>{children}</VotingContext.Provider>)
};



