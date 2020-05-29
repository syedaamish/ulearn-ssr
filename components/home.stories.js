import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "../Assets/css/style.scss"
import Layout from './MyLayout';
import Header from './Header';
import CardWithIcon from './CardWithIcon';

export default { title: 'Basic Components' };

export const header = () =><>  <Header/></>;

export const layout = () => (
 <div>
   <Layout/>
 </div>
);

export const cardwithicon = () => (
  <div>
    <CardWithIcon/>
  </div>
 );