export default{
    name:'badges',
    title:'badges',
    type: 'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'company',
            title:'Company',
            type:'string'
        },
        {
            name:'expedicion',
            title:'Expedicion',
            type:'string'
        },
        {
            name:'bgColor',
            title:'BgColor',
            type:'string'
        },
        {
            name: 'badgeLink',
            title: 'Badge Link',
            type: 'string',
          },
        {
            name:'icon',
            title:'Icon',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        
    ]
}