var profileApp = new Vue({
  el: '#userProfileApp',
  data: {
    users: []
  },
  methods: {
    fetchUsers() {
      fetch('app\public\randomuser.me-sample.json')
      .then(function(response) {return response.json()})
      .then(function(json) {profileApp.people = json});

    }
  },
  created: function() {
    this.fetchUsers();
  }

})
