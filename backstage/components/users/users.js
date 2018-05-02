var _fn;

Vue.component('userslist', {
    props: ['api'],
    template: `
        <table class="table">
            <thead class="thead">
                <th>username</th>
                <th>password</th>
                <th>telephone</th>
                <th>gender</th>
                <th>control</th>
            </thead>
            <tbody>
                <tr v-for="(obj,index) in userslist ">
                    <td>{{obj.username}}</td>
                    <td>{{obj.password}}</td>
                    <td>{{obj.telephone}}</td>
                    <td>{{obj.gender}}</td>
                    <td><button>&times;</button></td>
                </tr>
            </tbody>
        </table>   
    `,
    data: function(){
        var obj = {
            userslist: []
        }
        _fn = function(){
            return obj;
        }       
        return obj;
    },
    mounted: function(){
        $.get(this.api, function(res){
            // var obj = _fn();
            // obj.userslist = res.data;
            this.userslist = res.data;

        }.bind(this))        
        
    }
})

