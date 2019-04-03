import React from 'react';
import Loadable from 'react-loadable';
import Loading from '../spinner';


   
const Slides = Loadable ({
    loader: () => import('../Carousel'),
    loading:() => <Loading/>,
    delay: 3000, // 0.3 seconds
    timeout:10000,
});

const Welcome = Loadable ({
    loader: () => import('../Form'),
    loading:() => <Loading/>,
});
const Invite = Loadable ({
    loader: () => import('../Submittion'),
    loading:() =>  <Loading/>,
});

const Books = Loadable({
    loader:()=>import('../Books'),
    loading:() =>  <Loading/>
})

const Review = Loadable({
    loader:()=>import('../Review'),
    loading:() => <Loading/>,
})



 const routes = [
    {path:'/', exact: true, key:"Slides", name:"Slides", component:Slides },
    {path:'/signup',key:"Welcome",  name:"Welcome", component:Welcome },
    {path:'/invite',key:"Invites", name:"Invite", component:Invite},
    {path:'/mybooks', key:"Books", name:"Books", component:Books},
    {path:'/review',key:"Review", name:'Review', component:Review}
]

export default routes;
