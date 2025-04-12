export const Schema_Post = {
    name:"post",
    type:"document",
    title:"Post",
    fields:[
        {
            name:"title",
            title:"Title",
            type:"string",
        },
        {
            name:"content",
            title:"Content",
            type:"text",
        }
    ]
}