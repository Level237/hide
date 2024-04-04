
const paths={
    home(){
        return '/'
    },
    login(){
        return '/login'
    },
    register(){

    },
    profile(name:string){
        return `/profile/${name}`
    },
    newPost(){
        return '/new/post'
    },
    newNote(){
        return '/new/note'
    }
}