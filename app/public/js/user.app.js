var userProfileApp = new Vue({
  el: '#userProfileApp',
  data: {
        results: [ {
              "name": {
                "first": "",
                "last": ""
              },
              "email": "",
              "dob": {
                "date": "",
                "age": ""
              },
              "picture": {
                "large": "",
                "thumbnail": ""
              },
              "nat": ""
            }
        ]
      },
      methods: {
      fetchUsers(){
        fetch('https://randomuser.me/api/')
        .then(function(response) {return response.json() })
        .then(json => {userProfileApp.results = json.results });
      }
    },

  created() {
    this.fetchUsers();
  }

})
