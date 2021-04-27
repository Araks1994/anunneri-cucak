new Vue(
{
    el:"#cank",
    data:{
        Cucak:[
                
            { anun:"Ani",azganun:"Martirosyan",tariq:25},
            {anun:"Lilit",azganun:"Qocharyan",tariq:20},
            {anun:"Lianna",azganun:"Haroyanyan",tariq:35},
            {anun:"Anna",azganun:"Hovhannisyan",tariq:15},
            {anun:"Lusine",azganun:"Eghiazaryan",tariq:18},
            {anun:"Leo",azganun:"Harutyunyan",tariq:5},
            {anun:"Vahe",azganun:"Grigoryan",tariq:45},
            {anun:"Samvel",azganun:"Martirosyan",tariq:13},
            {anun:"Anul",azganun:"Karapetyan",tariq:23},
            {anun:"Ashot",azganun:"Aharonyan",tariq:50},

            
    ]
    },
    methods:{
        jnjel:function(obj){
            let index=this.Cucak.indexOf(obj)
            this.Cucak.splice(index,1)
        }
    }

})

