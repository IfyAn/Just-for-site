const initState={
    posts:[
        {id:'1', title: 'My Economics Teacher', body: ' She is a very pompouse lady with good morals'},
        {id:'2', title: 'My CRK Teacher', body: ' She is a very strict lady with good teaching'},
        {id:'3', title: 'My Math Teacher', body: ' He is a very funny man with bold stature'}
    ]
};

const rootReducer= (state=initState, action)=>{
    if(action.type==='DELETE_POST'){
        let newPosts=state.posts.filter(post=>{
            return action.id !== post.id
        });
        return {
            ... state,
            posts:newPosts
        }
    }
    return state;
}

export default rootReducer