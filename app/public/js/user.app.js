var userProfileApp = new Vue({
  el: '#userProfileApp',
  data: {
    users: []
  },
  methods: {
    fetchUsers() {
      fetch('https://randomuser.me/api/')
      .then(function(response) {return response.json()})
      .then(function(json) {userProfileApp.people = json});

    }
  },
  created() {
    this.fetchUsers();
  }

})
