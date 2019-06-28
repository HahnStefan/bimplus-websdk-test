import Service from '@ember/service';

export default Service.extend({

  getTeams () {

    var api = this.apiAdapter; // registered in app.js

    return api.teams.get().done(function(data){
      // debugger;
      if (data.length > 0){
        api.setTeamSlug(data[0].slug);
      }
    }).fail(function(err){
      alert('Failed to extract teams ' + err)
    });			
  },

  getTeamBySlug (team_slug) {
    var api = this.apiAdapter; // registered in app.js
    debugger;
    return api.teams.get(team_slug).done(function(data){
      // let ts = team_slug;
      // debugger;
      // var team = data.find(function(d){
      //   debugger;
      //   let equal = d.slug === ts;
      //   return equal;
      //   // return d.slug === team_slug;
      // });
      debugger;
      // api.setTeamSlug(team.slug);
      api.setTeamSlug(data.slug);
      
      // return data.findAll();
      // var team = data.find(function(d){
      //     return d.name === tn;
      // });

      //deferred.resolve(team.slug,team.id);
    }).fail(function(err){
      alert('Failed to extract team slug ' + err)
    });			
  }  
});

