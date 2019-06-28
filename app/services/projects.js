import Service from '@ember/service';

export default Service.extend({

  getProjects () {
    var api = this.apiAdapter; // registered in app.js
    
    return api.projects.get().done(function(data){    
      return data;
    }).fail(function (err) {
      alert('Failed to get projects: ' + err);
    });
  }
});
